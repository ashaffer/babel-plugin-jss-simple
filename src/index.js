/**
 * JSS Simple Babel Plugin
 */

function transform ({types: t}) {

  const CallVisitor = {
    CallExpression (path, state) {
      const node = path.node

      if (node.callee.name === state.name && node.arguments.length === 1) {
        path.replaceWith(t.callExpression(t.identifier(state.name), [
            ...node.arguments,
            t.binaryExpression('+', t.identifier('__filename'), t.stringLiteral('_' + state.idx++))
          ]))
      }
    }
  }

  return {
    visitor: {
      ImportDeclaration (path) {
        const node = path.node
        node.parent
        if (node.source.value === 'jss-simple') {
          let identifier
          node.specifiers.forEach(spec => {
            if (t.isImportDefaultSpecifier(spec)) {
              path.parentPath.traverse(CallVisitor, {name: spec.local.name, idx: 1})
            }
          })
        }
      }
    }
  }
}

/**
 * Exports
 */

export default transform

/**
 * JSS Simple Babel Plugin
 */

function transform ({types: t}) {

  const CallVisitor = {
    CallExpression (path, {name}) {
      const node = path.node

      if (node.callee.name === name && node.arguments.length === 1) {
        path.replaceWith(t.callExpression(t.identifier(name), [
            node.arguments[0],
            t.identifier('__filename')
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
              path.parentPath.traverse(CallVisitor, {name: spec.local.name})
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

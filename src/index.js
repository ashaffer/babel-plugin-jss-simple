/**
 * JSS Simple Babel Plugin
 */

function transform ({types: t}) {
  return {
    visitor: {
      ImportDeclaration (node, parent, scope) {
        if (node.source.value === 'jss-simple') {
          node.specifiers.forEach(spec => {
            if (t.isDefaultImportSpecifier(spec)) {
              console.log('default import', spec)
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

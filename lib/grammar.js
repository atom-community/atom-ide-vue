function updateOpenEditors(oldGrammar, newGrammar) {
  const openEditors = atom.workspace.getTextEditors()
  openEditors.forEach((editor) => {
    const editorGrammar = editor.getGrammar()

    const hasOldGrammar = editorGrammar.name === oldGrammar.name
    if (hasOldGrammar) {
      editor.setGrammar(newGrammar)
    }
  })
}

function renameGrammarForScopeName(scopeName, newName) {
  const currentGrammar = atom.grammars.grammarForScopeName(scopeName)

  if (currentGrammar) {
    atom.grammars.readGrammar(currentGrammar.path, (error, grammarRenamed) => {
      if (error) {
        console.error("Failed to read grammar to rename", error)
        return
      }

      grammarRenamed.name = newName

      atom.grammars.removeGrammarForScopeName(scopeName)
      atom.grammars.addGrammar(grammarRenamed)

      updateOpenEditors(currentGrammar, grammarRenamed)

      console.log(`Grammar for scope ${scopeName} renamed from "${currentGrammar.name}" to "${grammarRenamed.name}"`)
    })
  }
}

module.exports = {
  renameGrammarForScopeName,
}

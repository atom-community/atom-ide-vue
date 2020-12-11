const path = require("path")
const { AutoLanguageClient } = require("atom-languageclient")
const { renameGrammarForScopeName } = require("./grammar")

class VueLanguageClient extends AutoLanguageClient {
  getGrammarScopes() {
    return ["text.html.vue"]
  }
  getLanguageName() {
    return "Vue"
  }
  getServerName() {
    return "Vetur"
  }

  startServerProcess() {
    return super.spawnChildNode(["node_modules/vls/dist/vueServerMain"], {
      cwd: path.join(__dirname, ".."),
    })
  }

  preInitialization() {
    renameGrammarForScopeName("text.html.vue", "Vue")
  }

  getInitializeParams(projectPath, process) {
    // vue-language-server doesn't handle mising init options well:
    // https://github.com/vuejs/vetur/issues/1188
    // https://github.com/tomv564/LSP/issues/565
    const { initializationOptions } = require("./config")
    
    return {
      ...super.getInitializeParams(projectPath, process),
      initializationOptions,
    }
  }
}

module.exports = new VueLanguageClient()

const path = require("path");
const { AutoLanguageClient } = require("atom-languageclient");
const { initializationOptions } = require("./config");

class VueLanguageClient extends AutoLanguageClient {
  getGrammarScopes() {
    return ["text.html.vue"];
  }
  getLanguageName() {
    return "Vue";
  }
  getServerName() {
    return "Vetur";
  }

  startServerProcess() {
    return super.spawnChildNode(
      ["node_modules/vue-language-server/dist/vueServerMain"],
      { cwd: path.join(__dirname, "..") }
    );
  }

  getInitializeParams(projectPath, process) {
    // vue-language-server doesn't handle mising init options well:
    // https://github.com/vuejs/vetur/issues/1188
    // https://github.com/tomv564/LSP/issues/565

    return {
      ...super.getInitializeParams(projectPath, process),
      initializationOptions
    };
  }
}

module.exports = new VueLanguageClient();

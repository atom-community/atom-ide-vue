const path = require("path")
const { AutoLanguageClient } = require("atom-languageclient")
const { initializationOptions } = require("./config")
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
    package_deps().catch((e) => {
      atom.notification.addError(e)
    }) // let it install in the background
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

    return {
      ...super.getInitializeParams(projectPath, process),
      initializationOptions,
    }
  }
}

/**
 * install Atom package dependencies if not already loaded
 */
async function package_deps() {
  // Add entries from package-deps here manually
  // (to prevent loading atom-package-deps and package.json when the deps are already loaded)
  const deps = ["language-vue", "atom-ide-base", "atom-ide-javascript"]
  if (deps.some((p) => !atom.packages.isPackageLoaded(p))) {
    await import("atom-package-deps").then((atom_package_deps) => {
      // install if not installed
      atom_package_deps.install("atom-ide-vue", false)
      // enable if disabled
      deps
        .filter((p) => !atom.packages.isPackageLoaded(p))
        .forEach((p) => {
          atom.notifications.addInfo(`Enabling package ${p} that is needed for atom-ide-vue`)
          atom.packages.enablePackage(p)
        })
    })
  }
}

module.exports = new VueLanguageClient()

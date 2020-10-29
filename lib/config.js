const extensionConfig = atom.config.get("atom-ide-vue")

const initializationOptions = {
  config: {
    vetur: {
      validation: {
        template: extensionConfig.validation.template,
        style: extensionConfig.validation.style,
        script: extensionConfig.validation.script,
      },
      completion: {},
      format: {
        defaultFormatterOptions: {},
        options: {},
      },
      dev: {},
      trace: {},
      experimental: {
        templateInterpolationService: extensionConfig.experimental.templateInterpolationService,
      },
    },
    css: {},
    html: {
      suggest: {},
    },
    javascript: {
      format: {},
    },
    typescript: {
      format: {},
    },
    emmet: {},
    stylusSupremacy: {},
  },
}

module.exports = {
  initializationOptions,
}

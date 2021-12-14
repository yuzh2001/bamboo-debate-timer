const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
const path = require('path');

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  pluginOptions: {
    _: 'lodash',
    electronBuilder: {
      builderOptions: {
        asar: false,
        win: {
          icon: './public/electron.ico',
          target: [
            {
              target: 'nsis',
              arch: [
                "ia32"
              ]
            }
          ]
        },
      }
    }
  },
  configureWebpack: () => {
    if(process.env.NODE_ENV === 'production' && !process.env.IS_ELECTRON) {
      return {module: {
          rules: [
            {
              test: /\.mjs$/,
              include: /node_modules/,
              type: "javascript/auto"
            },
          ]
        },
        plugins: [
          new PrerenderSPAPlugin({
            staticDir: path.join(__dirname, './dist'),
            routes: ['/', '/show'],
            renderer: new Renderer({
              headless: true,
              // renderAfterTime: 5000,
              renderAfterDocumentEvent: 'render-event',
            })
          }),

        ],};
    }else {
      return {module: {
          rules: [
            {
              test: /\.mjs$/,
              include: /node_modules/,
              type: "javascript/auto"
            },
          ]
        }};
    }
  }
}

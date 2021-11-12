const path = require("path");

const config = {
  alias: {
    "@": path.resolve(__dirname, "..", "src/"),
  },
  projectName: 'taro-react',
  date: '2021-10-22',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: ["@tarojs/plugin-html"],
  defineConstants: {
  },
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  framework: 'react',
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {

        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: true,
        config: {
          namingPattern: 'global',
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      },
    },
    lessLoaderOption: {
      lessOptions: {
        javascriptEnabled: true,
        modifyVars: {
          '@pxx-hd': '2', //改为pxx-hd  预防以后冲突
          '@pxx-hdx': '@pxx-hd*1px',
          '@pxxm-prefix': 'pxxm',
          '@html-selector': 'page', //为各种各样的小程序准备
        },
      },
    },
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        enable: true,
        config: {
          namingPattern: 'global',
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}

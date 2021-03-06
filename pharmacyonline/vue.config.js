const CleanWebpackPlugin = require("clean-webpack-plugin")  //清除多余文件
const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: []
    },

    Options: [
      new CleanWebpackPlugin()//清除多余文件
    ]
  },



  devServer: {
    historyApiFallback: {
      index: '/index.html'
    },
    proxy: {
      '^/apis': {
        // 测试环境
        target: 'https://cn.pharmacyonline.com.au',  // 接口域名
        changeOrigin: true,  //是否跨域
        pathRewrite: {
          '^/apis': ''   //需要rewrite重写的,
        }
      },

      '^/hjm': {
        // 测试环境
        target: 'https://www.huajuanmall.com',  // 接口域名
        changeOrigin: true,  //是否跨域
        pathRewrite: {
          '^/hjm': '/'   //需要rewrite重写的,
        }
      },

      '^/jml': {
        // 测试环境
        target: 'https://www.huajuanmall.com',  // 接口域名
        changeOrigin: true,  //是否跨域
        pathRewrite: {
          '^/jml': '/'   //需要rewrite重写的,
        }
      }
    }
  },


  // outputDir: 'docs',
  // publicPath: process.env.NODE_ENV === 'production' ? '/vant-demo/' : '/',
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 37.5,
            propList: ['*']
          })
        ]
      }
    }
  }





}

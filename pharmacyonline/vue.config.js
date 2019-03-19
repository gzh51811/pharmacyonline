module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: []
    }
  },

  // devServer: {
  //   historyApiFallback: {
  //     index: '/index.html'
  //   },

  //   proxy: {
  //     '^/api': {
  //       target: 'https://m.jiuxian.com',
  //       changeOrigon: false,
  //       pathRewrite: {
  //         "^/api": "/"
  //       }
  //     }
  //   }
  // }


  // devServer: {
  // proxy: {
  //   '^/apis': {
  //     // 测试环境
  //     target: 'https://cn.pharmacyonline.com.au',  // 接口域名
  //     changeOrigin: true,  //是否跨域
  //     pathRewrite: {
  //       '^/apis': '/'   //需要rewrite重写的,
  //     }
  //   }
  // }
  // }

}

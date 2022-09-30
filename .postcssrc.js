module.exports = {
  plugins: {
    // 当前px转rem的效果只适用于安卓4.0级及以上，ios8及以上
    // 'autoprefixer': {
    //   browsers: ['Android >= 4.0', 'iOS >= 8']
    // },
    //   自动将代码中的37.5转化成1rem
    // postcss-pxtorem插件只能修改内部样式表，外部样式表中的px
    // 不可以修改行内样式表中的px设置
    'postcss-pxtorem': {
      rootValue: 37.5,
      // rootValue({ file }) {
      //   return file.indexOf('vant') !== -1 ? 37.5 : 75;
      // },
      propList: ['*']
    }
  }
}

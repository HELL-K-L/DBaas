module.exports = {
  configureWebpack: {
    //设置别名
    resolve: {
      alias: {
        $views: '@/views/',
        $style: '@/assets/style/'
      }
    }
  }
};

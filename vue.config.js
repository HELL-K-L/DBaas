module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/new/" : "/",
  configureWebpack: {
    //设置别名
    resolve: {
      alias: {
        $views: "@/views/",
        $style: "@/assets/style/"
      }
    }
  }
};

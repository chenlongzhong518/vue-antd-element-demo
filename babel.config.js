module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    //element-ui按需引入配置(需下载依赖 babel-plugin-component)：
    [
      "component",
      { libraryName: "element-ui", styleLibraryName: "theme-chalk" }
    ],
    //ant-design-vue按需引入配置(需下载依赖 babel-plugin-import)：
    [
      "import",
      { libraryName: "ant-design-vue", libraryDirectory: "es", style: true }
    ]
  ]
};

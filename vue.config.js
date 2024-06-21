// const { defineConfig } = require('@vue/cli-service')
// module.exports =
//  defineConfig({
//   transpileDependencies: true,
//   publicPath: process.env.NODE_ENV ===
//   ''
// })
const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/test2-of-github-pages/' // به جای 'repository-name'، نام مخزن خودت رو بگذار
    : '/'
});
module.exports = {
  title: 'Doc',
  description: '',
  port: 8095,
  // dest: '/home/kk/document/web/web-docs/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Node', items: [
        { text: 'ERP-phone', link: '/erp-phone' },
        { text: 'PM2', link: '/pm2' },
        { text: 'Yapi', link: '/yapi' },
        { text: 'Vue-component', link: '/vue-component' },
      ] },
      { text: 'OS', items: [
        { text: 'Ubuntu', link: '/ubuntu' },
        { text: 'Ubuntu Server', link: '/ubuntu-server' },
        { text: 'Windows', link: '/windows' },
      ] },
      { text: 'Software', items: [
        { text: 'VSCode', link: '/vscode' },
        { text: 'Vim', link: '/vim' },
        { text: 'Eclipse', link: '/eclipse' },
        { text: 'Npm', link: '/npm' },
        { text: 'Oracle', link: '/oracle' },
        { text: 'Git', link: '/git' },
      ] },
      { text: 'Other', items: [
        { text: 'Typescript', link: '/typescript' },
        { text: 'Webpack', link: '/webpack' },
        { text: 'Mui', link: '/mui' },
        { text: 'Html', link: '/html' },
        { text: 'Array', link: '/array' },
        { text: 'CSS', link: '/css' }
      ] }
    ],
    sidebar: 'auto',
    sidebarDepth: 2
  }
}
module.exports = {
  presets: [
    [
      '@vue/cli-plugin-babel/preset',
      {
        useBuiltIns:process.env.NODE_ENV === "DEMO"? 'usage':false
      }
    ]
  ]
}

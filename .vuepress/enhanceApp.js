export default ({
  Vue,
  options,
  router,
  siteData
}) => {
  Vue.filter('number', (value) => {
    return value.toLocaleString()
  })
}
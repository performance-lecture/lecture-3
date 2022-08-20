module.exports = {
  defaultExtractor: (content) => content.match(/[\w\:\-]+/g) || []
}
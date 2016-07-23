/**
 * Package entry point.
 * @module index
 */
const Client = require('./client');
module.exports = {
  download: (target, options) => () => new Client().download(target, options),
  upload: (source, options) => () => new Client().upload(source, options)
};

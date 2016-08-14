/**
 * Package entry point.
 * @module index
 */
const {DownloadTask, UploadTask} = require('./tasks');

module.exports = {
  download: (target, options) =>
    () => new DownloadTask(Object.assign({target}, options)).run(),
  upload: (source, options) =>
    () => new UploadTask(Object.assign({source}, options)).run()
};

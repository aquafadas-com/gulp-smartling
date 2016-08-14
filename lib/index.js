/**
 * Package entry point.
 * @module index
 */
const {FileType, RetrievalType} = require('./core');
const {DownloadTask, UploadTask} = require('./tasks');

module.exports = {
  download: (filePattern, options) =>
    () => new DownloadTask(Object.assign({filePattern}, options)).run(),
  upload: (file, options) =>
    () => new UploadTask(Object.assign({file}, options)).run(),
  FileType,
  RetrievalType
};

/**
 * Package entry point.
 */
import {DownloadTask, UploadTask} from './tasks';
export {FileType, RetrievalType} from './core';

/**
 * Downloads the message translations from the Smartling server.
 * @param {string} filePattern The pattern indicating the target path of the downloaded files.
 * @param {object} options The task options.
 * @return {Promise} Completes when the message translations have been downloaded.
 */
export function download(filePattern, options) {
  return new DownloadTask(Object.assign({filePattern}, options)).run();
}

/**
 * Uploads the message translations to the Smartling server.
 * @param {string} file The path to the message file.
 * @param {object} options The task options.
 * @return {Promise} Completes when the message file has been uploaded.
 */
export function upload(file, options) {
  return new UploadTask(Object.assign({file}, options)).run();
}

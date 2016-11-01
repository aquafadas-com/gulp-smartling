import {DownloadTask, UploadTask} from './tasks/index';

export * from './api';
export * from './file_type';
export * from './locale';
export * from './retrieval_type';
export * from './tasks/index';

/**
 * Downloads the message translations from the Smartling server.
 * @param {string} filePattern The pattern indicating the target path of the downloaded files.
 * @param {object} [options] The task options.
 * @return {function} A function allowing to download the message translations.
 */
export function download(filePattern, options = {}) {
  return () => new DownloadTask(Object.assign({filePattern}, options)).run();
}

/**
 * Uploads the original source content to the Smartling server.
 * @param {string} file The path to the message file.
 * @param {object} [options] The task options.
 * @return {function} A function allowing to upload the original source content.
 */
export function upload(file, options = {}) {
  return () => new UploadTask(Object.assign({file}, options)).run();
}

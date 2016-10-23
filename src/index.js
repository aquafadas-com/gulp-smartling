/**
 * Package entry point.
 */
import {FileType, RetrievalType} from './core';
import {DownloadTask, UploadTask} from './tasks';

export {FileType, RetrievalType} from './core';

// TODO
export function download(filePattern, options) {
  return new DownloadTask(Object.assign({filePattern}, options)).run();
}

// TODO
export function upload(file, options) {
  return new UploadTask(Object.assign({file}, options)).run();
}

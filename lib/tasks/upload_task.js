/**
 * Implementation of the `UploadTask` class.
 * @module tasks/upload_task
 */
const FileTask = require('./file_task');
const path = require('path');
const SmartlingSdk = require('smartling-sdk');

/**
 * Uploads the message translations to the [Smartling](https://www.smartling.com) server.
 */
class UploadTask extends FileTask {

  /**
   * Initializes a new instance of the class.
   * @param {object} [options] An object specifying values used to initialize this instance.
   */
  constructor(options = {}) {
    super(options);

    /**
     * The path to the message file.
     * @type {string}
     */
    this.file = typeof options.file == 'string' ? options.file : '';

    /**
     * The desired format for the download.
     * @type {string}
     */
    this.fileType = typeof options.fileType == 'string' ? options.fileType : '';

    /**
     * The upload parameters.
     * @type {object}
     * @private
     */
    this._params = {};
    if(typeof options.authorize == 'boolean') this.authorize = options.authorize;
  }

  /**
   * Value indicating whether to return the original string or an empty string when no translation is available.
   * @type {boolean}
   * @default false
   */
  get authorize() { return typeof this._params.approved == 'boolean' ? this._params.approved : false; }
  set authorize(value) { this._params.approved = value; }

  /**
   * Uploads the message translations to the Smartling server.
   * @returns {Promise} Completes when the message file has been uploaded.
   */
  run() {
    let fileApi = new SmartlingSdk(SmartlingSdk.API_BASE_URLS.LIVE, this.apiKey, this.projectId);
    let fileType = this.fileType.length ? this.fileType : UploadTask.getFileTypeFromUri(this.fileUri);
    return fileApi.upload(this.file, this.fileUri, fileType, this._params);
  }
}

// Public interface.
module.exports = UploadTask;

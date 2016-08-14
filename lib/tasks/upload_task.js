/**
 * Implementation of the `UploadTask` class.
 * @module tasks/upload_task
 */
const FileTask = require('./file_task');
const {FileType} = require('../core');
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
     * The desired format for the download.
     * @type {string}
     * @default "json"
     */
    this.fileType = typeof options.fileType == 'string' ? options.fileType : FileType.JSON;

    /**
     * The path to the message source.
     * @type {string}
     */
    this.source = typeof options.source == 'string' ? options.source : '';

    /**
     * The upload parameters.
     * @type {object}
     * @private
     */
    this._params = {
      approved: typeof options.authorize == 'boolean' ? options.authorize : false
    };
  }

  /**
   * Value indicating whether to return the original string or an empty string when no translation is available.
   * @type {boolean}
   * @default false
   */
  get authorize() { return this._params.approved; }
  set authorize(value) { this._params.approved = value; }

  /**
   * Uploads the message translations to the Smartling server.
   * @returns {Promise} Completes when the message source has been uploaded.
   */
  run() {
    let sdk = new SmartlingSdk(SmartlingSdk.API_BASE_URLS.LIVE, this.apiKey, this.projectId);
    return sdk.upload(this.source, this.fileUri, this.fileType, this._params);
  }
}

// Public interface.
module.exports = UploadTask;

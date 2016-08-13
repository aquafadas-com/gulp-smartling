const FileTask = require('./file_task');
const {FileType} = require('../core');
const SmartlingSdk = require('smartling-sdk');

/**
 * Uploads the message translations to the [Smartling](https://www.smartling.com) server.
 */
class UploadTask extends FileTask {

  /**
   * Initializes a new instance of the class.
   * @param {string} source The path to the message source, in English (e.g. `en-US`).
   * @param {object} [options] An object specifying values used to initialize this instance.
   */
  constructor(source, options = {}) {
    super(options);

    /**
     * The desired format for the download.
     * @type {string}
     */
    this.fileType = typeof options.fileType == 'string' ? options.fileType : FileType.JSON;

    /**
     * The path to the message source.
     * @type {string}
     */
    this.source = source;
  }

  /**
   * Uploads the message translations to the Smartling server.
   * @returns {Promise} Completes when the message source has been uploaded.
   */
  run() {
    let sdk = new SmartlingSdk(SmartlingSdk.API_BASE_URLS.LIVE, this.apiKey, this.projectId);
    return sdk.upload(this.source, this.fileUri, this.fileType);
  }
}

// Public interface.
module.exports = UploadTask;

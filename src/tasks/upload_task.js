import {FileTask} from './file_task';
import SmartlingSdk from 'smartling-sdk';

/**
 * Uploads the message translations to the [Smartling](https://www.smartling.com) server.
 */
export class UploadTask extends FileTask {

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
     */
    this._params = {};
    if (typeof options.authorize == 'boolean') this.authorize = options.authorize;
    if (typeof options.callbackURL == 'string') this.callbackURL = options.callbackURL;
  }

  /**
   * Value indicating whether content in the file is authorized (available for translation) in all locales.
   * @type {boolean}
   */
  get authorize() {
    return this._params.approved == 'true';
  }

  /**
   * The URL of the callback called when the file is 100% published for a locale.
   * @type {string}
   */
  get callbackURL() {
    return typeof this._params.callbackUrl == 'string' ? this._params.callbackUrl : '';
  }

  /**
   * Sets a value indicating whether content in the file is authorized (available for translation) in all locales.
   * @param {boolean} value `true` to authorize content in the file, otherwise `false`.
   */
  set authorize(value) {
    this._params.approved = value ? 'true' : 'false';
  }

  /**
   * Sets the URL of the callback called when the file is 100% published for a locale.
   * @param {string} value The URL of the callback called when the file is 100% published for a locale.
   */
  set callbackURL(value) {
    this._params.callbackUrl = value;
  }

  /**
   * Uploads the original source content to the Smartling server.
   * @return {Promise} Completes when the source file has been uploaded.
   */
  run() {
    let fileApi = new SmartlingSdk(SmartlingSdk.API_BASE_URLS.LIVE, this.apiKey, this.projectId);
    let fileType = this.fileType.length ? this.fileType : FileTask.getFileTypeFromURI(this.fileURI);
    return fileApi.upload(this.file, this.fileURI, fileType, this._params);
  }
}

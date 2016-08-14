/**
 * Implementation of the `API` class.
 * @module tasks/download_task
 */
const FileTask = require('./file_task');
const {RetrievalType} = require('../core');
const SmartlingSdk = require('smartling-sdk');

/**
 * Downloads the message translations from the [Smartling](https://www.smartling.com) server.
 */
class DownloadTask extends FileTask {

  /**
   * Initializes a new instance of the class.
   * @param {object} [options] An object specifying values used to initialize this instance.
   */
  constructor(options = {}) {
    super(options);

    /**
     * The list of locales to be downloaded.
     * {string[]}
     */
    this.locales = Array.isArray(options.locales) ? options.locales : [];

    /**
     * The pattern indicating the target path of the downloaded files (e.g. `path/to/i18n/{{locale}}.json`).
     * @type {string}
     */
    this.target = typeof options.target == 'string' ? options.target : '';

    /**
     * The download parameters.
     * @type {object}
     * @private
     */
    this._params = {
      includeOriginalStrings: typeof options.includeOriginalStrings == 'boolean' ? options.includeOriginalStrings : true,
      retrievalType: typeof options.retrievalType == 'string' ? options.retrievalType : RetrievalType.PUBLISHED
    };
  }

  /**
   * Value indicating whether to return the original string or an empty string when no translation is available.
   * @type {boolean}
   * @default true
   */
  get includeOriginalStrings() { return this._params.includeOriginalStrings; }
  set includeOriginalStrings(value) { this._params.includeOriginalStrings = value; }

  /**
   * The desired format for the download.
   * @type {string}
   * @default "published"
   */
  get retrievalType() { return this._params.retrievalType; }
  set retrievalType(value) { this._params.retrievalType = value; }

  /**
   * Downloads the message translations from the Smartling server.
   * @returns {Promise} Completes when the message translations have been downloaded.
   */
  run() {
    let sdk = new SmartlingSdk(SmartlingSdk.API_BASE_URLS.LIVE, this.apiKey, this.projectId);
    return Promise.all(this.locales.map(locale =>
      sdk.get(this.fileUri, this.target.replace('{{locale}}', locale), Object.assign({locale}, this._params))
    ));
  }
}

// Public interface.
module.exports = DownloadTask;

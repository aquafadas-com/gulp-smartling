/**
 * Implementation of the `API` class.
 * @module tasks/download_task
 */
const {Locale, RetrievalType} = require('../core');
const FileTask = require('./file_task');
const SmartlingSdk = require('smartling-sdk');

/**
 * Downloads the message translations from the [Smartling](https://www.smartling.com) server.
 */
module.exports = class DownloadTask extends FileTask {

  /**
   * Initializes a new instance of the class.
   * @param {object} [options] An object specifying values used to initialize this instance.
   */
  constructor(options = {}) {
    super(options);

    /**
     * The pattern indicating the target path of the downloaded files (e.g. `path/to/i18n/{{locale}}.json`).
     * @type {string}
     */
    this.filePattern = typeof options.filePattern == 'string' ? options.filePattern : '';

    /**
     * The list of locales to be downloaded.
     * @type {string[]}
     */
    this.locales = Array.isArray(options.locales) ? options.locales : [];

    /**
     * The download parameters.
     * @type {object}
     * @private
     */
    this._params = {};
    if (typeof options.includeOriginalStrings == 'boolean') this.includeOriginalStrings = options.includeOriginalStrings;
    if (typeof options.retrievalType == 'string') this.retrievalType = options.retrievalType;
  }

  /**
   * Value indicating whether to return the original string or an empty string when no translation is available.
   * @type {boolean}
   */
  get includeOriginalStrings() { return this._params.includeOriginalStrings == 'true'; }
  set includeOriginalStrings(value) { this._params.includeOriginalStrings = value ? 'true' : 'false'; }

  /**
   * The desired format for the download.
   * @type {string}
   */
  get retrievalType() { return typeof this._params.retrievalType == 'string' ? this._params.retrievalType : RetrievalType.PUBLISHED; }
  set retrievalType(value) { this._params.retrievalType = value; }

  /**
   * Downloads the message translations from the Smartling server.
   * @returns {Promise} Completes when the message translations have been downloaded.
   */
  run() {
    let fileApi = new SmartlingSdk(SmartlingSdk.API_BASE_URLS.LIVE, this.apiKey, this.projectId);
    return Promise.all(this.locales.map(locale => fileApi.get(this.fileURI, this.filePattern.replace('{{locale}}', locale), Object.assign({
      locale: Locale.getSpecificLocale(locale)
    }, this._params))));
  }
};

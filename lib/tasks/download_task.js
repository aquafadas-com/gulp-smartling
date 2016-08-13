const FileTask = require('./file_task');
const {Locales, RetrievalType} = require('../core');
const SmartlingSdk = require('smartling-sdk');

/**
 * Downloads the message translations from the [Smartling](https://www.smartling.com) server.
 */
class DownloadTask extends FileTask {

  /**
   * Initializes a new instance of the class.
   * @param {string} target The pattern indicating the target path of the downloaded files (e.g. `path/to/i18n/${locale}.json`).
   * @param {object} [options] An object specifying values used to initialize this instance.
   */
  constructor(target, options = {}) {
    super(options);

    /**
     * The desired format for the download.
     * @type {string}
     */
    this.retrievalType = typeof options.retrievalType == 'string' ? options.retrievalType : RetrievalType.PUBLISHED;

    /**
     * The pattern indicating the target path of the downloaded files.
     * @type {string}
     */
    this.target = target;

    // Check the requirements.
    if(!this.retrievalType.length) throw new Error('Invalid retrieval type.');
  }

  /**
   * Downloads the message translations from the Smartling server.
   * @returns {Promise} Completes when the message translations have been downloaded.
   */
  run() {
    let sdk = new SmartlingSdk(SmartlingSdk.API_BASE_URLS.LIVE, this.apiKey, this.projectId);
    return Promise.all(this.locales.map(locale =>
      locale == 'en' || locale == 'en-US' ?
        Promise.resolve() :
        sdk.get(this.fileUri, this.target.replace('${locale}', locale), {
          locale: locale.includes('-') ? locale : Locales[locale],
          retrievalType: this.retrievalType
        })
    ));
  }
}

// Public interface.
module.exports = DownloadTask;

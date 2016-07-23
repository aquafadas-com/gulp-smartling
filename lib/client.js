/**
 * Implementation of the `smartling.Client` class.
 * @module client
 */
const locales = require('./locales');
const SmartlingSdk = require('smartling-sdk');

/**
 * Client for [Smartling's File API](http://docs.smartling.com/pages/API/v1/FileAPI).
 */
class Client {

  /**
   * Downloads the message translations from the Smartling server.
   * @param {string} target The pattern indicating the target path of the downloaded files (e.g. `path/to/i18n/${locale}.json`).
   * @param {object} options The Smartling settings.
   * @returns {Promise} Completes when the message translations have been downloaded.
   */
  download(target, options) {
    let sdk = new SmartlingSdk(SmartlingSdk.API_BASE_URLS.LIVE, options.apiKey, options.projectId);
    return Promise.all(options.locales.map(locale =>
      locale == 'en' || locale == 'en-US' ?
        Promise.resolve() :
        sdk.get(options.fileUri, target.replace('${locale}', locale), {
          locale: locale.indexOf('-') >= 0 ? locale : locales[locale],
          retrievalType: 'published'
        })
    ));
  }

  /**
   * Uploads the message translations to the Smartling server.
   * @param {string} source The path to the message source, in English (e.g. `en-US`).
   * @param {object} options The Smartling settings.
   * @returns {Promise} Completes when the message source has been uploaded.
   */
  upload(source, options) {
    let sdk = new SmartlingSdk(SmartlingSdk.API_BASE_URLS.LIVE, options.apiKey, options.projectId);
    return sdk.upload(source, options.fileUri, typeof options.fileType == 'string' ? options.fileType : 'json');
  }
}

// Public interface.
module.exports = Client;

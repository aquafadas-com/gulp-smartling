/**
 * Task downloading the message translations.
 * @module download
 */
'use strict';

// Module dependencies.
const locales = require('./locales');
const SmartlingSdk = require('smartling-sdk');

/**
 * Downloads the message translations from the Smartling server.
 * @param {string} target The pattern indicating the target path of the downloaded files (e.g. `path/to/i18n/${locale}.json`).
 * @param {object} options The Smartling settings.
 * @return {Promise} Completes when the message translations have been downloaded.
 */
function download(target, options) {
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

// Public interface.
module.exports = (target, options) => () => download(target, options);

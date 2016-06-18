/**
 * Task uploading the message translations.
 * @module upload
 */
'use strict';

// Module dependencies.
const SmartlingSdk = require('smartling-sdk');

/**
 * Uploads the message translations to the Smartling server.
 * @param {string} source The path to the message source, in English (e.g. `en-US`).
 * @param {object} options The Smartling settings.
 * @return {Promise} Completes when the message source has been uploaded.
 */
function upload(source, options) {
  let sdk = new SmartlingSdk(SmartlingSdk.API_BASE_URLS.LIVE, options.apiKey, options.projectId);
  return sdk.upload(source, options.fileUri, typeof options.fileType == 'string' ? options.fileType : 'json');
}

// Public interface.
module.exports = (source, options) => () => upload(source, options);

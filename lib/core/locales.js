/**
 * Implementation of the `smartling.Locales` class.
 * @module locales
 */

/**
 * Provides the mapping between languages and default locales.
 * @type {object}
 */
const Locales = {
  de: 'de-DE',
  en: 'en-US',
  es: 'es-ES',
  fr: 'fr-FR',
  it: 'it-IT',
  nl: 'nl-NL',
  ja: 'ja-JP',
  pt: 'pt-PT',
  ru: 'ru-RU',
  sv: 'sv-SE',
  zh: 'zh-CN'
};

// Public interface.
module.exports = Object.freeze(Locales);

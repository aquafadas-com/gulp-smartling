/**
 * Implementation of the `Locale` class.
 * @module core/locale
 */

/**
 * Provides the mapping between neutral locales and default specific locales.
 * @type {object}
 * @private
 */
const _locales = Object.freeze({
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
});

/**
 * Provides static methods for locales.
 */
class Locale {

  /**
   * Returns an object providing the mapping between neutral locales and default specific locales.
   * @returns {object} The mapping between neutral locales and default specific locales.
   */
  static get locales() {
    return _locales;
  }

  /**
   * Returns the default specific locale corresponding to the specified neutral locale.
   * @param {string} neutralLocale A neutral locale.
   * @returns {string} The default specific locale corresponding to the specified neutral locale, or the neutral locale if no specific locale matches.
   */
  static getSpecificLocale(neutralLocale) {
    return neutralLocale in Locale.locales ? Locale.locales[neutralLocale] : neutralLocale;
  }
}

// Public interface.
module.exports = Locale;

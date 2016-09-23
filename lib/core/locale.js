/**
 * Implementation of the `Locale` class.
 * @module core/locale
 */

/**
 * Provides the mapping between neutral locales and default specific locales.
 * @constant {object}
 */
const LOCALES = {
  af: 'af-ZA', az: 'az-AZ',
  be: 'be-BY', bg: 'bg-BG', bs: 'bs-BA',
  cs: 'cs-CZ',
  da: 'da-DK', de: 'de-DE',
  el: 'el-GR', en: 'en-US', es: 'es-ES', et: 'et-EE',
  fi: 'fi-FI', fo: 'fo-FO', fr: 'fr-FR',
  he: 'he-IL', hi: 'hi-IN', hr: 'hr-HR', hu: 'hu-HU', hy: 'hy-AM',
  id: 'id-ID', is: 'is-IS', it: 'it-IT',
  ja: 'ja-JP',
  ka: 'ka-GE', kk: 'kk-KZ', kl: 'kl-GL', km: 'km-KH', ko: 'ko-KR', ky: 'ky-KG',
  lb: 'lb-LU', lt: 'lt-LT', lv: 'lv-LV',
  mk: 'mk-MK', mn: 'mn-MN', ms: 'ms-MY',
  ne: 'ne-NP', nl: 'nl-NL', nn: 'nn-NO',
  pl: 'pl-PL', ps: 'ps-AF', pt: 'pt-PT',
  qu: 'qu-PE',
  ro: 'ro-RO', ru: 'ru-RU',
  sk: 'sk-SK', sl: 'sl-SI', sq: 'sq-AL', sr: 'sr-RS', sv: 'sv-SE', sw: 'sw-KE',
  tg: 'tg-TJ', th: 'th-TH', tk: 'tk-TM', tr: 'tr-TR',
  uk: 'uk-UA', uz: 'uz-UZ',
  vi: 'vi-VN',
  zh: 'zh-CN'
};

/**
 * Provides static methods for locales.
 */
module.exports = class Locale {

  /**
   * Returns an object providing the mapping between neutral locales and default specific locales.
   * @returns {object} The mapping between neutral locales and default specific locales.
   * @readonly
   */
  static get locales() {
    return LOCALES;
  }

  /**
   * Returns the default specific locale corresponding to the specified neutral locale.
   * @param {string} neutralLocale A neutral locale.
   * @returns {string} The default specific locale corresponding to the specified neutral locale, or the neutral locale if no specific locale matches.
   */
  static getSpecificLocale(neutralLocale) {
    return neutralLocale in LOCALES ? LOCALES[neutralLocale] : neutralLocale;
  }
};

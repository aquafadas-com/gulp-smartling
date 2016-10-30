import assert from 'assert';
import {Locale} from '../src/locale';

/**
 * @test {Locale}
 */
describe('Locale', () => {

  /**
   * @test {Locale.locales}
   */
  describe('.locales', () => {
    it('should have only [2-letter] neutral locales as keys', () => {
      let neutralLocales = Object.keys(Locale.locales);
      assert.equal(neutralLocales.filter(locale => /^[a-z]{2}$/.test(locale)).length, neutralLocales.length);
    });

    it('should have only [2-letter]-[2-LETTER] specific locales as values', () => {
      let specificLocales = Object.keys(Locale.locales).map(locale => Locale.locales[locale]);
      assert.equal(specificLocales.filter(locale => /^[a-z]{2}-[A-Z]{2}$/.test(locale)).length, specificLocales.length);
    });
  });

  /**
   * @test {Locale.getSpecificLocale}
   */
  describe('.getSpecificLocale()', () => {
    it('should return the specified value if it is an unknown locale', () =>
      assert.equal(Locale.getSpecificLocale('fooBar'), 'fooBar')
    );

    it('should return the specified value if it is already a specific locale', () => {
      assert.equal(Locale.getSpecificLocale('en-GB'), 'en-GB');
      assert.equal(Locale.getSpecificLocale('fr-BE'), 'fr-BE');
    });

    it('should return a specific locale if the specified value is a known neutral locale', () => {
      assert.equal(Locale.getSpecificLocale('en'), 'en-US');
      assert.equal(Locale.getSpecificLocale('fr'), 'fr-FR');
    });
  });
});

/**
 * Implementation of the `API` class.
 */

/**
 * Provides common properties and methods for the [Gulp.js](http://gulpjs.com) tasks related to the [Smartling](https://www.smartling.com) service.
 */
export class API {

  /**
   * Initializes a new instance of the class.
   * @param {object} [options] An object specifying values used to initialize this instance.
   */
  constructor(options = {}) {

    /**
     * The API key to authenticate all requests.
     * @type {string}
     */
    this.apiKey = typeof options.apiKey == 'string' ? options.apiKey : '';

    /**
     * The project identifier.
     * @type {string}
     */
    this.projectId = typeof options.projectId == 'string' ? options.projectId : '';
  }
}

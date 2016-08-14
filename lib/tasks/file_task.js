/**
 * Implementation of the `FileTask` class.
 * @module tasks/file_task
 */
const {API} = require('../core');

/**
 * Provides the base implementation for file-based tasks.
 */
class FileTask extends API {

  /**
   * Initializes a new instance of the class.
   * @param {object} [options] An object specifying values used to initialize this instance.
   */
  constructor(options = {}) {
    super(options);

    /**
     * A value that uniquely identifies the file.
     * @type {string}
     */
    this.fileUri = typeof options.fileUri == 'string' ? options.fileUri : '';
  }
}

// Public interface.
module.exports = FileTask;

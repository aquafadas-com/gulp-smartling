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

    // Check the requirements.
    if(!this.apiKey.length) throw new Error('Your must provide the API key.');
    if(!this.fileUri.length) throw new Error('Your must provide a value that uniquely identifies the file.');
    if(!this.projectId.length) throw new Error('Your must provide the project identifier.');
  }
}

// Public interface.
module.exports = FileTask;

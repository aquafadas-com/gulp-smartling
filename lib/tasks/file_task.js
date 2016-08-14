/**
 * Implementation of the `FileTask` class.
 * @module tasks/file_task
 */
const {API, FileType} = require('../core');
const path = require('path');

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

  /**
   * Returns the file type corresponding to the specified file URI.
   * @param {string} fileUri The file URI.
   * @returns {string} The file type corresponding to the specified file URI, or an empty string if the type is unknown.
   */
  static getFileTypeFromUri(fileUri) {
    let extension = path.extname(fileUri).substr(1).toLowerCase();
    if(!extension) return '';

    switch(extension) {
      case FileType.CSV:
      case FileType.HTML:
      case FileType.INDESIGN:
      case FileType.JSON:
      case FileType.OPEN_XML:
      case FileType.RESX:
      case FileType.YAML:
        return extension;

      case 'properties':
        return FileType.JAVA_PROPERTIES;

      case 'ts':
        return FileType.QT_LINGUIST;

      case 'txt':
        return FileType.PLAIN_TEXT;

      case 'xlf':
        return FileType.XLIFF;

      case 'yml':
        return FileType.YAML;

      default:
        return '';
    }
  }
}

// Public interface.
module.exports = FileTask;

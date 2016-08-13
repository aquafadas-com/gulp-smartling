/**
 * Implementation of the `smartling.FileType` enumeration.
 * @module file_type
 */

/**
 * Defines the type of a file to be uploaded.
 * @enum {string}
 */
const FileType = {

  /**
   * The file is an Android XML resource.
   */
  ANDROID: 'android',

  /**
   * The file is a CSV resource.
   */
  CSV: 'csv',

  /**
   * The file is a Gettext PO/POT resource.
   */
  GETTEXT: 'gettext',

  /**
   * The file is an HTML resource.
   */
  HTML: 'html',

  /**
   * The file is a InDesign Markup Language resource.
   */
  INDESIGN: 'idml',

  /**
   * The file is an iOS Strings resource.
   */
  IOS_STRINGS: 'ios',

  /**
   * The file is an iOS Strings Dictionary resource.
   */
  IOS_STRINGS_DICT: 'stringsdict',

  /**
   * The file is a Java Properties resource.
   */
  JAVA_PROPERTIES: 'javaProperties',

  /**
   * The file is a JSON resource.
   */
  JSON: 'json',

  /**
   * The file is a MadCap Lingo ZIP resource.
   */
  MADCAP_LINGO: 'madcap',

  /**
   * The file is an Office Open XML resource.
   */
  OPEN_XML: 'docx',

  /**
   * The file is a plain text resource.
   */
  PLAIN_TEXT: 'plainText',

  /**
   * The file is a QT Linguist resource.
   */
  QT_LINGUIST: 'qt',

  /**
   * The file is a Microsoft Resx resource.
   */
  RESX: 'resx',

  /**
   * The file is a XLIFF resource.
   */
  XLIFF: 'xliff',

  /**
   * The file is a custom XML resource.
   */
  XML: 'xml',

  /**
   * The file is a YAML resource.
   */
  YAML: 'yaml'
};

// Public interface.
module.exports = Object.freeze(FileType);

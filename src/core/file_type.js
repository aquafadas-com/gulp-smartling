/**
 * Defines the type of a file to be uploaded.
 * @type {object}
 *
 * @property {string} ANDROID The file is an Android XML resource.
 * @property {string} CSV The file is a CSV resource.
 * @property {string} GETTEXT The file is a Gettext PO/POT resource.
 * @property {string} HTML The file is an HTML resource.
 * @property {string} INDESIGN The file is a InDesign Markup Language resource.
 * @property {string} IOS_STRINGS The file is an iOS Strings resource.
 * @property {string} IOS_STRINGS_DICT The file is an iOS Strings Dictionary resource.
 * @property {string} JAVA_PROPERTIES The file is a Java Properties resource.
 * @property {string} JSON The file is a JSON resource.
 * @property {string} MADCAP_LINGO The file is a MadCap Lingo ZIP resource.
 * @property {string} OPEN_XML The file is an Office Open XML resource.
 * @property {string} PLAIN_TEXT The file is a plain text resource.
 * @property {string} QT_LINGUIST The file is a QT Linguist resource.
 * @property {string} RESX The file is a Microsoft Resx resource.
 * @property {string} XLIFF The file is a XLIFF resource.
 * @property {string} XML The file is a custom XML resource.
 * @property {string} YAML The file is a YAML resource.
 */
export const FileType = Object.freeze({
  ANDROID: 'android',
  CSV: 'csv',
  GETTEXT: 'gettext',
  HTML: 'html',
  INDESIGN: 'idml',
  IOS_STRINGS: 'ios',
  IOS_STRINGS_DICT: 'stringsdict',
  JAVA_PROPERTIES: 'javaProperties',
  JSON: 'json',
  MADCAP_LINGO: 'madcap',
  OPEN_XML: 'docx',
  PLAIN_TEXT: 'plainText',
  QT_LINGUIST: 'qt',
  RESX: 'resx',
  XLIFF: 'xliff',
  XML: 'xml',
  YAML: 'yaml'
});

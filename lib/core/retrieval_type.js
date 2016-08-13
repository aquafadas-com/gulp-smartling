/**
 * Implementation of the `smartling.RetrievalType` enumeration.
 * @module retrieval_type
 */

/**
 * Defines the retrieval type of a file to be downloaded.
 * @enum {string}
 */
const RetrievalType = {

  /**
   * Returns a modified version of the original file with strings wrapped in a specific set of Unicode symbols that can later be recognized and matched by the Chrome Context Capture Extension.
   */
  CONTEXT_MATCHING_INSTRUMENTED: 'contextMatchingInstrumented',

  /**
   * Returns any translations (including non-published translations).
   */
  PENDING: 'pending',

  /**
   * Returns a modified version of the original text with certain characters transformed and the text expanded.
   */
  PSEUDO: 'pseudo',

  /**
   * Returns only published/pre-published translations.
   */
  PUBLISHED: 'published'
};

// Public interface.
module.exports = Object.freeze(RetrievalType);

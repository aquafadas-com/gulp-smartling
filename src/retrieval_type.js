/**
 * Defines the retrieval type of a file to be downloaded.
 * @type {object}
 *
 * @property {string} CONTEXT_MATCHING_INSTRUMENTED Returns a modified version of the original file with strings wrapped in a specific set of Unicode symbols that can later be recognized and matched by the Chrome Context Capture Extension.
 * @property {string} PENDING Returns any translations (including non-published translations).
 * @property {string} PSEUDO Returns a modified version of the original text with certain characters transformed and the text expanded.
 * @property {string} PUBLISHED Returns only published/pre-published translations.
 */
export const RetrievalType = Object.freeze({
  CONTEXT_MATCHING_INSTRUMENTED: 'contextMatchingInstrumented',
  PENDING: 'pending',
  PSEUDO: 'pseudo',
  PUBLISHED: 'published'
});

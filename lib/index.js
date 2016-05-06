/**
 * Package entry point.
 * @module index
 */
'use strict';

// Public interface.
module.exports = {
  download: require('./download'),
  upload: require('./upload')
};

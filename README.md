# Gulp-Smartling
![Release](http://img.shields.io/npm/v/gulp-smartling.svg) ![License](http://img.shields.io/npm/l/gulp-smartling.svg) ![Downloads](http://img.shields.io/npm/dm/gulp-smartling.svg) ![Dependencies](http://img.shields.io/david/aquafadas-com/gulp-smartling.svg)

[Gulp.js](http://gulpjs.com) tasks dedicated to the synchronization of translations with the [Smartling](https://www.smartling.com) service.

## Getting Started
If you haven't used [Gulp.js](http://gulpjs.com) before, be sure to check out the [related documentation](https://github.com/gulpjs/gulp/blob/master/docs/README.md), as it explains how to create a `gulpfile.js` as well as install and use plugins.
Once you're familiar with that process, you may install this plugin with this command:

```shell
$ npm install gulp-smartling --save-dev
```

Once the plugin has been installed, it may be enabled inside your `gulpfile.js`.

## Tasks

#### Download the message translations from the Smartling service
This task takes a pattern as input, indicating the target path of the downloaded files.
The `${locale}` placeholder will be replaced by the locale of each file.

```javascript
const gulp = require('gulp');
const smartling = require('gulp-smartling');

gulp.task('i18n:download', smartling.download('path/to/i18n/${locale}.json', {
  apiKey: 'MyApiKey',  // The Smartling API key.
  fileUri: '/Gulp-Smartling/messages.json', // The file URL.
  locales: ['es', 'fr', 'ja', 'zh'], // The locales to be downloaded.
  projectId: 'FooBar' // The project identifier.
}));
```

The English language will be ignored by this task: this is the default locale used by the the message sources.

#### Upload the message source to the Smartling service
This task takes a path as input, specifying the message source to be uploaded.

```javascript
const gulp = require('gulp');
const smartling = require('gulp-smartling');

gulp.task('i18n:upload', smartling.upload('path/to/i18n/en.json', {
  apiKey: 'MyApiKey', // The Smartling API key.
  fileType: 'json', // The file type: defaults to JSON.
  fileUri: '/Gulp-Smartling/messages.json', // The file URL.
  projectId: 'FooBar' // The project identifier.
}));
```

The provided file must be in American English (e.g. the `en-US` locale), as required by the [Smartling](https://www.smartling.com) service.

## See Also
- [API Reference](http://aquafadas-com.github.io/gulp-smartling)
- [Code Quality](https://www.codacy.com/app/aquafadas/gulp-smartling)

## License
[Gulp-Smartling](https://github.com/aquafadas-com/gulp-smartling) is distributed under the Apache License, version 2.0.

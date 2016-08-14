# Gulp-Smartling
![Release](https://img.shields.io/npm/v/@aquafadas/gulp-smartling.svg) ![License](https://img.shields.io/npm/l/@aquafadas/gulp-smartling.svg) ![Downloads](https://img.shields.io/npm/dt/@aquafadas/gulp-smartling.svg) ![Dependencies](https://img.shields.io/david/aquafadas-com/gulp-smartling.svg) ![Code quality](https://img.shields.io/codacy/grade/a694355860834f91b2072e49b2825106.svg) ![Build](https://img.shields.io/travis/aquafadas-com/gulp-smartling.svg)

[Gulp.js](http://gulpjs.com) tasks dedicated to the synchronization of translations with the [Smartling](https://www.smartling.com) service, based on the [File API v1](http://docs.smartling.com/pages/API/v1/FileAPI).

## Getting Started
If you haven't used [Gulp.js](http://gulpjs.com) before, be sure to check out the [related documentation](https://github.com/gulpjs/gulp/blob/master/docs/README.md), as it explains how to create a `gulpfile.js` as well as install and use plugins.
Once you're familiar with that process, you may install the provided Gulp tasks with this command:

```shell
$ npm install --save-dev @aquafadas/gulp-smartling
```

Once the build tasks have been installed, they may be enabled inside your `gulpfile.js`.

## Tasks

#### Download the message translations from the Smartling service
This task takes a pattern as input, indicating the target path of the downloaded files.
The `{{locale}}` placeholder will be replaced by the locale of each file.

```javascript
const gulp = require('gulp');
const smartling = require('@aquafadas/gulp-smartling');

gulp.task('i18n:download', smartling.download('path/to/i18n/{{locale}}.json', {
  apiKey: 'MyApiKey',  // The Smartling API key.
  fileUri: '/Gulp-Smartling/messages.json', // The file URL.
  locales: ['es', 'fr', 'ja', 'zh'], // The locales to be downloaded.
  projectId: 'FooBar', // The project identifier.
  retrievalType: smartling.RetrievalType.PUBLISHED // The retrieval type: defaults to "published".
}));
```

The English language will be ignored by this task: this is the default locale used by the the message sources.

#### Upload the message source to the Smartling service
This task takes a path as input, specifying the message source to be uploaded.

```javascript
const gulp = require('gulp');
const smartling = require('@aquafadas/gulp-smartling');

gulp.task('i18n:upload', smartling.upload('path/to/i18n/en.json', {
  apiKey: 'MyApiKey', // The Smartling API key.
  fileType: smartling.FileType.JSON, // The file type: defaults to "json".
  fileUri: '/Gulp-Smartling/messages.json', // The file URL.
  projectId: 'FooBar' // The project identifier.
}));
```

The provided file must be in American English (e.g. the `en-US` locale), as suggested by the [Smartling](https://www.smartling.com) service.

## See Also
- [Code Quality](https://www.codacy.com/app/aquafadas/gulp-smartling)
- [Continuous Integration](https://travis-ci.org/aquafadas-com/gulp-smartling)

## License
[Gulp-Smartling](https://www.npmjs.com/package/@aquafadas/gulp-smartling) is distributed under the Apache License, version 2.0.

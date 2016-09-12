# Changelog
This file contains highlights of what changes on each version of the [Gulp-Smartling](https://www.npmjs.com/package/@aquafadas/gulp-smartling) package.

#### Version 0.4.0
- Breaking change: raised the required [Node.js](https://nodejs.org) version.

#### Version 0.3.2
- Fixed a bug with the download task whose promise was resolved too soon.
- Updated the package dependencies.

#### Version 0.3.1
- Fixed a bug with the boolean properties of the tasks.

#### Version 0.3.0
- Breaking change: complete rewrite of the source code.
- Download task: renamed the `${locale}` placeholder of the file pattern to `{{locale}}`.
- Download task: the `en`/`en-US` locales are not ignored anymore.
- Download task: added support for `includeOriginalStrings` parameter. 
- Download task: added support for `retrievalType` parameter. 
- Upload task: the file type is now optional. It is derived from the extension of the file URI.
- Upload task: added support for `authorize` parameter. 
- Upload task: added support for `callbackUrl` parameter. 
- Added some unit tests.
- Added support for code coverage.
- Added support for [Travis CI](https://travis-ci.org) continuous integration.
- Updated the package dependencies.

#### Version 0.2.0
- Breaking change: raised the required [Node.js](https://nodejs.org) version.
- Breaking change: using ES2015 features, like classes and default parameters.
- Turned the package into a [scoped one](https://docs.npmjs.com/getting-started/scoped-packages).

#### Version 0.1.2
- Added support for [Codacy](https://www.codacy.com) code analyzer.
- Renamed the project according to its [npm](https://www.npmjs.com) package name.
- Updated the package dependencies.

#### Version 0.1.1
- Fixed some bugs.
- Updated the package dependencies.

#### Version 0.1.0
- Initial release.

/**
 * Implementation of the `FileTaskTest` class.
 * @module test/core/file_task_test
 */
const assert = require('assert');
const {FileType} = require('../../lib/core');
const {FileTask} = require('../../lib/tasks');

/**
 * Tests the features of the `FileTask` class.
 */
class FileTaskTest {

  /**
   * Runs the unit tests.
   */
  run() {
    describe('FileTask', () => {
      describe('locales', this.testGetFileTypeFromUri);
    });
  }

  /**
   * Tests the `getFileTypeFromUri` method.
   */
  testGetFileTypeFromUri() {
    it('should return an emtpy string for an unknown file extension', () => {
      assert.equal(FileTask.getFileTypeFromUri('/fooBar'), '');
      assert.equal(FileTask.getFileTypeFromUri('/foo.bar'), '');
    });

    it('should return the proper type for a known file extension', () => {
      assert.equal(FileTask.getFileTypeFromUri('/messages.csv'), FileType.CSV);
      assert.equal(FileTask.getFileTypeFromUri('/project/messages.json'), FileType.JSON);
      assert.equal(FileTask.getFileTypeFromUri('messages.properties'), FileType.JAVA_PROPERTIES);
      assert.equal(FileTask.getFileTypeFromUri('project/messages.xlf'), FileType.XLIFF);
    });
  }
}

// Run all tests.
new FileTaskTest().run();

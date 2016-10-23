/**
 * Implementation of the `FileTaskTest` class.
 */
import assert from 'assert';
import {FileType} from '../src/core';
import {FileTask} from '../src/tasks';

/**
 * Tests the features of the `FileTask` class.
 */
class FileTaskTest {

  /**
   * Runs the unit tests.
   */
  run() {
    describe('FileTask', () => {
      describe('getFileTypeFromURI()', this.testGetFileTypeFromURI);
    });
  }

  /**
   * Tests the `getFileTypeFromURI` method.
   */
  testGetFileTypeFromURI() {
    it('should return an emtpy string for an unknown file extension', () => {
      assert.equal(FileTask.getFileTypeFromURI('/fooBar'), '');
      assert.equal(FileTask.getFileTypeFromURI('/foo.bar'), '');
    });

    it('should return the proper type for a known file extension', () => {
      assert.equal(FileTask.getFileTypeFromURI('/messages.csv'), FileType.CSV);
      assert.equal(FileTask.getFileTypeFromURI('/project/messages.json'), FileType.JSON);
      assert.equal(FileTask.getFileTypeFromURI('messages.properties'), FileType.JAVA_PROPERTIES);
      assert.equal(FileTask.getFileTypeFromURI('project/messages.xlf'), FileType.XLIFF);
    });
  }
}

// Run all tests.
new FileTaskTest().run();

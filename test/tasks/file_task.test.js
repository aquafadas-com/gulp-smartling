import assert from 'assert';
import {FileType} from '../../src/file_type';
import {FileTask} from '../../src/tasks/index';

/**
 * @test {FileTask}
 */
describe('FileTask', () => {

  /**
   * @test {FileTask.getFileTypeFromURI}
   */
  describe('.getFileTypeFromURI()', () => {
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
  });
});

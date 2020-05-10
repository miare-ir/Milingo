import * as React from 'react';
import { storiesOf } from '@storybook/react';
import FileInput from '.';

const testFilesDictionary = { 0: new File([''], 'filename.jpg'), length: 1 };

const testMultipleFilesDictionary = {
  0: new File([''], 'filename1.jpg'),
  1: new File([''], 'filename2.jpg'),
  2: new File([''], 'filename3.jpg'),
  length: 3,
};

const loadingTestState = {
  0: {
    loading: true,
    progress: 70,
  },
};

const errorTestState = {
  0: {
    message: 'حجم فایل شما بیش از حد مجاز است.',
  },
};

const tryTestState = {
  0: {
    message: 'فایل بارگذاری نشد.',
    tryAgain: true,
  },
};

storiesOf('File input', module)
  .addDecorator(story => (
    <div className="button-story-container">{story()}</div>
  ))
  .add('Normal', () => (
    <div
      style={{
        width: '450px',
        maxWidth: '100%',
        backgroundColor: '#ffffff',
        padding: '40px',
      }}>
      <FileInput />
      <FileInput disabled />
      <FileInput files={testFilesDictionary} />
      <FileInput files={testFilesDictionary} disabled />
      <FileInput states={loadingTestState} files={testFilesDictionary} />
      <FileInput
        validate={() => false}
        states={errorTestState}
        files={testFilesDictionary}
        forceDisplayError
      />
      <FileInput
        validate={() => false}
        states={tryTestState}
        files={testFilesDictionary}
        forceDisplayError
      />
    </div>
  ))
  .add('Multiple', () => (
    <div
      style={{
        width: '450px',
        maxWidth: '100%',
        backgroundColor: '#ffffff',
        padding: '40px',
      }}>
      <FileInput multiple files={testMultipleFilesDictionary} />
    </div>
  ));

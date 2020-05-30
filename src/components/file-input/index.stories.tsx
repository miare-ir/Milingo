import * as React from 'react';
import { storiesOf } from '@storybook/react';
import FileInput from '.';

const testFiles = [new File([''], 'filename.jpg')];

const testMultipleFiles = [
  new File([''], 'filename1.jpg'),
  new File([''], 'filename2.jpg'),
  new File([''], 'filename3.jpg'),
];

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
      <FileInput files={testFiles} />
      <FileInput files={testFiles} disabled />
      <FileInput states={loadingTestState} files={testFiles} />
      <FileInput
        validate={() => false}
        states={errorTestState}
        files={testFiles}
        forceDisplayError
      />
      <FileInput
        validate={() => false}
        states={tryTestState}
        files={testFiles}
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
      <FileInput multiple files={testMultipleFiles} />
    </div>
  ));

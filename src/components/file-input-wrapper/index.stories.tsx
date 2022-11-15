import * as React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import FileInputWrapper from '.';
import './styles.stories.scss';

const sampleUploadedVideo = 'https://www.w3schools.com/tags/movie.mp4';

export default {
  title: 'File Input Wrapper',
  component: FileInputWrapper,
} as ComponentMeta<typeof FileInputWrapper>;

export const _FileInputWrapper: ComponentStory<typeof FileInputWrapper> = () => {
  const [video, setVideo] = React.useState<string | null>();

  return (
    <div className="file-input-wrapper-story">
      <h1>Image uploader:</h1>
      <FileInputWrapper
        wrapperTitle="عکس پروفایل"
        description="یک عکس برای پروفایل خود انتخاب کنید"
        maxFileSize={2 * 1000 * 1000}
        hint={{
          children: 'content',
          title: 'راهنمای عکاسی',
        }}
        displayClear
        forceDisplayError
      />

      <h1>Video uploader:</h1>
      <FileInputWrapper
        wrapperTitle="ویدیو احراز هویت"
        description="از خودت فیلم بگیر و خودتو معرفی کن"
        uploadFileText="بارگذاری ویدیو"
        uploaderType="video"
        displayClear
        forceDisplayError
        onFileChange={() => setVideo(sampleUploadedVideo)}
        defaultFilePath={video}
        states={{
          0: {
            loading: true,
            progress: 70,
          },
        }}
        hint={{
          children: 'content',
          title: 'راهنمای عکاسی',
        }}
      />
    </div>
  );
};

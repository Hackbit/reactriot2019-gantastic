import React from 'react';
import { Icon, Uploader } from 'rsuite';


const ImageUpload = (props) => (
  <Uploader
    {...props}
    autoUpload={false}
    multiple
    listType="picture"
  >
    <button type="button">
      <Icon
        icon="camera-retro"
        size="lg"
      />
    </button>
  </Uploader>
);

ImageUpload.defaultProps = {
  action: '//jsonplaceholder.typicode.com/posts/',
};


export default ImageUpload;

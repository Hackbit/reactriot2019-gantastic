import React from 'react';


const ImageUpload = (props) => (
  <input
    type="file"
    multiple
    onChange={props.onChange}
  />
);

ImageUpload.defaultProps = {
  action: '//jsonplaceholder.typicode.com/posts/',
};


export default ImageUpload;

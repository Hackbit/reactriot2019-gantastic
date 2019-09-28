import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { formHooks } from 'hooks';

import { Storage } from 'services';

import { Button, ImageUpload, Nav } from 'modules/core/components';


const items = [
  { name: 'Faces', label: 'Faces' },
  { name: 'History', label: 'History' },
  { name: 'Logout', label: 'Logout' },
];

const AddFaces = ({ onFacesMerge, onGetHistory }) => {
  const {
    imageUrls,
    handleChange,
  } = formHooks.useFileInputUpload(Storage.uploadImages);

  useEffect(() => {
    onGetHistory();
  });

  return (
    <div>
      <form>
        <ImageUpload
          accept="image/*"
          onChange={handleChange}
        />

        <br />

        <Button
          onClick={() => {
            onFacesMerge(imageUrls);
          }}
        >
          Do Face Tricks
        </Button>

        {imageUrls.map(url => (
          <img
            key={url}
            src={url}
            alt={url}
            style={{ maxHeight: '200px' }}
          />
        ))}
      </form>

      <Nav items={items} />
    </div>
  );
};

AddFaces.propTypes = {
  onFacesMerge: PropTypes.func.isRequired,
  onGetHistory: PropTypes.func.isRequired,
};


export default AddFaces;

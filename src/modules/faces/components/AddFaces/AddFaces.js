import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { formHooks } from 'hooks';

import { constants } from 'modules/router';

import { Storage } from 'services';

import { Button, ImageUpload, Nav, PageLayout } from 'modules/core/components';


const AddFaces = ({ onFacesMerge, onGetHistory }) => {
  const {
    imageUrls,
    handleChange,
  } = formHooks.useFileInputUpload(Storage.uploadImages);

  useEffect(() => {
    onGetHistory();
  });

  return (
    <React.Fragment>
      <PageLayout>
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
      </PageLayout>

      <Nav
        items={constants.authRoutes}
        selectedItem={constants.authRoutes[0].name}
      />
    </React.Fragment>
  );
};

AddFaces.propTypes = {
  onFacesMerge: PropTypes.func.isRequired,
  onGetHistory: PropTypes.func.isRequired,
};


export default AddFaces;

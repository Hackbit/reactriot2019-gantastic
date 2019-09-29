import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { css } from 'styled-components';

import { icons } from 'modules/core/constants';

import { formHooks } from 'hooks';

import { constants } from 'modules/router';

import { Storage } from 'services';

import {
  Button,
  ImageUpload,
  Nav,
  PageLayout,
  PreviewImageWithSlider,
} from 'modules/core/components';

import { PageSection } from './styled';


const layoutCss = css`
  justify-content: flex-start;
`;

const AddFaces = ({ onFacesMerge, onGetHistory }) => {
  const {
    imageUrls,
    handleChange,
  } = formHooks.useFileInputUpload(Storage.uploadImages);

  useEffect(() => {
    onGetHistory();
  });

  return (
    <>
      <PageLayout css={layoutCss}>
        <form>
          <PageSection>
            <ImageUpload
              accept="image/*"
              icon={icons.UPLOAD}
              label="Add Images"
              name="fileList"
              onChange={handleChange}
            />
          </PageSection>

          <PageSection>
            {imageUrls.map(url => (
              <PreviewImageWithSlider
                alt={url}
                key={url}
                onChange={() => {}}
                src={url}
                value={50}
              />
            ))}
          </PageSection>

          {imageUrls.length > 0 && (
            <PageSection>
              <Button
                isAllowed={imageUrls.length > 0}
                onClick={() => {
                  onFacesMerge(imageUrls);
                }}
              >
                Do Face Tricks
              </Button>
            </PageSection>
          )}
        </form>
      </PageLayout>

      <Nav
        items={constants.authRoutes}
        selectedItem={constants.authRoutes[0].name}
      />
    </>
  );
};

AddFaces.propTypes = {
  onFacesMerge: PropTypes.func.isRequired,
  onGetHistory: PropTypes.func.isRequired,
};


export default AddFaces;

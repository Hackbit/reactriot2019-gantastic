import React, { useEffect, useState } from 'react';
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
  PreviewResultImage,
} from 'modules/core/components';

import { PageSection } from './styled';


const layoutCss = css`
  justify-content: flex-start;
`;

const AddFaces = ({ onFacesMerge, onGetHistory }) => {
  const {
    files,
    imageUrls,
    handleChange,
  } = formHooks.useFileInputUpload(Storage.uploadImages);

  const [imageSliderValues, setImageSliderValue] = useState({});

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

          {files.length > 0 && (
            <PageSection>
              <PreviewResultImage
                alt="Result image"
                src={undefined}
              />
            </PageSection>
          )}

          <PageSection>
            {files.map((f) => {
              const filteredUrls = imageUrls.filter(url => url.includes(
                encodeURIComponent(f.name)
              ));

              if (!filteredUrls.length) {
                return (
                  <PreviewImageWithSlider
                    alt='Preview placeholder'
                    key={f.name}
                    onChange={() => {}}
                  />
                );
              }

              const url = filteredUrls[0];

              return (
                <PreviewImageWithSlider
                  alt={url}
                  key={url}
                  onChange={(imageUrl, value) => {
                    setImageSliderValue({
                      ...imageSliderValues,
                      [imageUrl]: value,
                    });
                  }}
                  src={url}
                />
              );
            })}
          </PageSection>

          {imageUrls.length > 0 && (
            <PageSection>
              <Button
                iconLeft={icons.FACE}
                isAllowed={imageUrls.length > 0}
                onClick={() => {
                  const configs = { ...imageSliderValues };

                  imageUrls.forEach((u) => {
                    if (!configs[u]) {
                      configs[u] = 0.1;
                    }
                  });

                  onFacesMerge(configs);
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

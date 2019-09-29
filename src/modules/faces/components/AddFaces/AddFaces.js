import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { css } from 'styled-components';

import { icons } from 'modules/core/constants';

import { formHooks } from 'hooks';

import { constants } from 'modules/router';

import { Storage } from 'services'

import {
  Nav,
  PageLayout,
  PreviewImageWithSlider,
  PreviewResultImage,
  IconTitle,
} from 'modules/core/components';

import { PageSection } from './styled';


const layoutCss = css`
  justify-content: flex-start;
`;

const resultLineCss = css`
  padding: 0 20px;
`;

const AddFaces = ({ onFacesMerge, onGetHistory }) => {
  const {
    files,
    handleChange,
    handleDelete,
    imageUrls,
  } = formHooks.useFileInputUpload(Storage.uploadImages, Storage.deleteImage);

  const [imageSliderValues, setImageSliderValue] = useState({});

  useEffect(() => {
    onGetHistory();
  });

  const imagePreviews = files.length > 0 && (
    <>
      <IconTitle icon={icons.SETTINGS}>
        Adjust Inputs
      </IconTitle>

      {files.map((f) => {
        const filteredUrls = imageUrls.filter(url => url.includes(encodeURIComponent(f.name)));

        if (!filteredUrls.length) {
          return (
            <PreviewImageWithSlider
              alt='Preview placeholder'
              key={f.name}
              onChange={() => {}}
              onDelete={() => {}}
            />
          );
        }

        const url = filteredUrls[0];

        return (
          <PreviewImageWithSlider
            alt={url}
            fileName={f.name}
            key={url}
            onChange={(imageUrl, value) => {
              setImageSliderValue({
                ...imageSliderValues,
                [imageUrl]: value,
              });
            }}
            onDelete={handleDelete}
            src={url}
          />
        );
      })}
    </>
  );

  return (
    <>
      <PageLayout css={layoutCss}>
        <form>
          <PageSection css={resultLineCss}>
            <PreviewResultImage
              alt="Result image"
              imageSliderValues={imageSliderValues}
              imageUrls={imageUrls}
              onButtonClick={onFacesMerge}
              onFilesChange={handleChange}
              src={undefined}
            />
          </PageSection>

          <PageSection>
            {imagePreviews}
          </PageSection>
        </form>
      </PageLayout>

      <Nav
        items={constants.authRoutes}
        selectedItem="Faces"
      />
    </>
  );
};

AddFaces.propTypes = {
  onFacesMerge: PropTypes.func.isRequired,
  onGetHistory: PropTypes.func.isRequired,
};


export default AddFaces;

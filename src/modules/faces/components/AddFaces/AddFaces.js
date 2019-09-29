import React, { useState } from 'react';
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
  Title,
} from 'modules/core/components';

import { PageSection } from './styled';


const layoutCss = css`
  justify-content: flex-start;
`;

const resultLineCss = css`
  padding: 0 20px;
`;

const AddFaces = (props) => {
  const { isGenerating, isRetrieving, onFacesMerge, onGetHistory, onReset, resultImageUrl } = props;

  const {
    files,
    handleChange,
    handleDelete,
    handleReset,
    imageUrls,
  } = formHooks.useFileInputUpload(Storage.uploadImages, Storage.deleteImage);

  const [imageSliderValues, setImageSliderValue] = useState({});

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
            isDisabled={isGenerating}
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
          <Title css={css`margin-top: 20px;`}>
            Ever wondered what a baby would look like between...
          </Title>

          <PageSection css={resultLineCss}>
            <PreviewResultImage
              alt="Result image"
              imageSliderValues={imageSliderValues}
              imageUrls={imageUrls}
              isGenerating={isGenerating}
              isRetrieving={isRetrieving}
              onButtonClick={onFacesMerge}
              onFilesChange={handleChange}
              onReset={() => {
                handleReset();
                setImageSliderValue({});
                onReset();
              }}
              src={resultImageUrl}
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
  isGenerating: PropTypes.bool.isRequired,
  isRetrieving: PropTypes.bool.isRequired,
  onFacesMerge: PropTypes.func.isRequired,
  onGetHistory: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  resultImageUrl: PropTypes.string,
};


export default AddFaces;

import { css } from 'styled-components';

import * as colors from './colors';


export const centeredStyles = css`
  margin: 0 auto;
`;

export const ghostButtonStyles = css`
  background-color: ${colors.transparent};
  border-color: ${colors.primary};
  color: ${colors.primary};
  transition: border-color 0.15s linear, background-color 0.15s linear, color 0.15s linear;
  
  &:hover {
    background-color: ${colors.transparent};
    border-color: ${colors.primaryHover};
    color: ${colors.primaryHover};
  }
`;

export const buttonStyles = css`
  align-items: center;
  appearance: none;
  background-clip: border-box;
  background-color: ${colors.primary};
  border-radius: 100px;
  border: 1px solid ${colors.primary};
  box-shadow: 0 0 2px 0 ${colors.shadow};
  color: ${colors.white};
  cursor: pointer;
  display: inline-flex;
  font-size: 18px;
  justify-content: center;
  line-height: 2.375rem;
  padding: 0 1rem;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: none;
  transition: border-color 0.15s linear, background-color 0.15s linear;
  user-select: none;
  vertical-align: middle;
  white-space: normal;

  &:hover {
    background-color: ${colors.primaryHover};
    border-color: ${colors.primaryHover};
  }
`;

export const deleteButtonStyles = css`
  ${buttonStyles}

  background-color: ${colors.transparent};
  border-width: 0;
  box-shadow: none;
  color: ${colors.danger};
  position: absolute;
  top: -12px;
  left: -8px;
  padding: 0 0 0 0;
  line-height: unset;
  transition: color 0.15s linear;

  &:hover {
    background-color: ${colors.transparent};
    border-width: 0;
    box-shadow: none;
    color: ${colors.dangerHover};
  }
`;

export const disabledButtonStyles = css`
  background-color: ${colors.disabled};
  border-color: ${colors.smoke};
  color: ${colors.smoke};
  box-shadow: none;

  &:hover {
    background-color: ${colors.disabled};
    border-color: ${colors.smoke};
    box-shadow: none;
    color: ${colors.smoke};
  }
`;

export const successButtonStyles = css`
  background-color: ${colors.success};
  border-color: ${colors.success};
  color: ${colors.white};

  &:hover {
    background-color: ${colors.successHover};
    border-color: ${colors.successHover};
    color: ${colors.white};
  }
`;

export const iconLeftStyles = css`
  margin-right: 8px;
`;

export const iconRightStyles = css`
  margin-left: 8px;
`;

export const emptyContentStyles = css`
  border: 1px dotted ${colors.shadow};
  border-radius: 10px;
`;

export const deletingContentStyles = css`
  opacity: 0.7;
`;

export const previewLineThinColStyles = css`
  flex-basis: 140px;
  width: 140px;
`;

export const previewLineWideColStyles = css`
  align-self: center;
  display: flex;
  flex-basis: calc(100% - 120px);
  justify-content: space-between;
  max-height: 44px;
  width: calc(100% - 120px);
`;

export const resultPreviewLineWideColStyles = css`
  display: flex;
  padding: 0 20px 0 0;
  flex-direction: column;
  justify-content: center;
`;

export const cardStyles = css`
  background-clip: padding-box;
  background-color: ${colors.white};
  border-radius: 0.875rem;
  border: 0.0625rem solid ${colors.smoke};
  box-shadow: 0 1px 2px 0 ${colors.smoke};
  display: block;
  padding: 20px;
  overflow: hidden;
  position: relative;
`;

export const cardTranslucentStyles = css`
  ${cardStyles}
  background-color: ${colors.transparent};
  border-color: ${colors.smokeAlpha};
  box-shadow: none;
`;

export const imageWrapperStyles = css`
  border-radius: 22px;
  height: 120px;
  width: 120px;
`;

export const biggerImageWrapperStyles = css`
  width: 140px;
  height: 140px;
`;

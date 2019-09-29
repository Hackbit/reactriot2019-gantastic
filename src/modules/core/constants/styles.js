import { css } from 'styled-components';

import * as colors from './colors';


export const ghostButtonStyles = css`
  background-color: ${colors.transparent};
  border-color: ${colors.white};
  color: ${colors.white};
  transition: border-color 0.15s linear, background-color 0.15s linear, color 0.15s linear;
  
  &:hover {
    background-color: ${colors.transparent};
    border-color: ${colors.shadow};
    color: ${colors.shadow};
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
  font-size: 1rem;
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
  
  &:hover {
    background-color: ${colors.transparent};
    border-width: 0;
    box-shadow: none;
    color: ${colors.danger};
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

export const previewLineThinColStyles = css`
  flex-basis: 120px;
  width: 120px;
`;

export const previewLineWideColStyles = css`
  align-self: center;
  display: flex;
  flex-basis: calc(100% - 120px);
  justify-content: space-between;
  max-height: 44px;
  padding: 0 0 0 20px;
  width: calc(100% - 120px);
`;

export const resultPreviewLineWideColStyles = css`
  ${previewLineWideColStyles}
  padding: 0 0 0 0;
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

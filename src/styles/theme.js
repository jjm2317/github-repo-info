import { css } from 'styled-components';

export const PaletteMapper = ({ color, theme }) => {
  const curColor = color
    ?.split('.')
    .reduce((acc, cur) => acc?.[cur], theme?.palette);

  if (curColor && typeof curColor !== 'string') {
    return curColor.main;
  }
  return curColor;
};

export const SpacingMapper = (_, props) => {
  const top = props[`${_}Top`] || props[`${_}Y`] || props[_] || 0;
  const bottom = props[`${_}Bottom`] || props[`${_}Y`] || props[_] || 0;
  const left = props[`${_}Left`] || props[`${_}X`] || props[_] || 0;
  const right = props[`${_}Right`] || props[`${_}X`] || props[_] || 0;

  return `${top}px ${right}px ${bottom}px ${left}px`;
};

const color = Object.freeze({
  black: '#252A31',
  bg_dark: '#192A3E',
  white: '#FFFFFF',
  grey: '#444444',
  lightgrey: '#CCCCCC',
  blue: '#0000FF',
  red: '#FF0000',
});

const typography = Object.freeze({
  h1: css`
    font-size: 50px;
    font-weight: 700;
    line-height: 60px;
    letter-spacing: -0.005em;
  `,
  h2: css`
    font-size: 30px;
    font-weight: 700;
    line-height: 45px;
    letter-spacing: -0.005em;
  `,
  subtitle1: css`
    font-size: 20px;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: -0.005em;
  `,
  b1: css`
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.005em;
  `,
  b2: css`
    font-size: 14px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: -0.005em;
  `,
  caption: css`
    font-size: 11px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: -0.005em;
  `,
});

const theme = {
  color,
  typography,
};

export default theme;

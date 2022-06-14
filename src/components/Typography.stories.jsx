import React from 'react';

import Typography from 'components/Typography';

export default {
  component: Typography,
};

export const Overview = () => (
  <>
    <Typography type="h1">대제목</Typography>
    <Typography type="h2">중제목</Typography>
    <Typography type="subtitle1">부제목</Typography>
    <Typography type="b1">본문1</Typography>
    <Typography type="b2">본문2</Typography>
    <Typography type="caption">캡션</Typography>
  </>
);

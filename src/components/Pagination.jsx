import React from 'react';

import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Typography from 'components/Typography';
import ARROW from 'images/pagination_arrow_left.png';
import ARROW_DISABLED from 'images/pagination_arrow_left_disabled.png';

const Pagination = ({ curPage, setCurPage, pageNum, paginationLen = 5 }) => {
  const baseVal = parseInt((curPage - 1) / paginationLen, 10) * paginationLen;
  const pageNumbers = Array.from(
    { length: Math.min(pageNum, baseVal + 5) - baseVal },
    (_, i) => baseVal + i + 1
  );

  return (
    <Container>
      <ArrowButton
        disabled={curPage <= 1}
        onClick={() => setCurPage(Math.max(1, curPage - paginationLen))}
      />
      <NumberButtonContainer>
        {pageNumbers.map((pageNumber) => {
          const isCur = pageNumber === curPage;
          return (
            <NumberButton
              key={pageNumber}
              isCur={isCur}
              onClick={() => setCurPage(pageNumber)}
            >
              <NumberText
                color={isCur ? 'white' : 'text.grey'}
                fontWeight={800}
                type="b1"
              >
                {pageNumber}
              </NumberText>
            </NumberButton>
          );
        })}
      </NumberButtonContainer>
      <ArrowButton
        isRight
        disabled={curPage >= pageNum}
        onClick={() => setCurPage(Math.min(pageNum, curPage + paginationLen))}
      />
    </Container>
  );
};
export default Pagination;

Pagination.propTypes = {
  curPage: PropTypes.number.isRequired,
  pageNum: PropTypes.number.isRequired,
  paginationLen: PropTypes.number.isRequired,
  setCurPage: PropTypes.func.isRequired,
};

const Container = styled.div`
  display: flex;
`;

const ArrowButton = styled.button`
  width: 36px;
  height: 36px;
  border-style: none;
  cursor: pointer;
  background-color: transparent;
  background-image: url(${ARROW});
  background-size: 5.5px auto;
  background-position: center center;
  background-repeat: no-repeat;
  ${({ isRight }) =>
    isRight &&
    css`
      transform: rotate(0.5turn);
    `}

  &:disabled {
    background-image: url(${ARROW_DISABLED});
    cursor: default;
  }
`;

const NumberButtonContainer = styled.div`
  margin: 0 20px;
`;

const NumberButton = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 8px;
  border-style: none;
  cursor: pointer;
  background-color: transparent;
  transition: background-color 0.3s;

  & + & {
    margin-left: 2px;
  }

  ${({ theme, isCur }) =>
    isCur
      ? css`
          background-color: ${theme.color.grey};
        `
      : css`
          &:hover {
            background-color: ${theme.color.lightgrey};
          }
        `}
`;

const NumberText = styled(Typography)`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
`;

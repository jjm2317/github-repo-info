import { useState } from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from 'components/Button';
import TextInput from 'components/TextInput';
import Typography from 'components/Typography';
import GithubPropTypes from 'model/GithubPropTypes';
import useRepositoryQuery from 'query/repository';

const Search = () => {
  const [searchValue, setSearchValue] = useState('');

  const { data: repoList } = useRepositoryQuery(searchValue);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleRegister = () => {};

  return (
    <SearchView
      repoList={repoList}
      searchValue={searchValue}
      onChange={handleChange}
      onRegister={handleRegister}
    />
  );
};

export default Search;

export const SearchView = ({ searchValue, repoList, onChange, onRegister }) => (
  <Form>
    <TextInput
      placeholder="repository 명을 입력해주세요."
      type="text"
      value={searchValue}
      onChange={onChange}
    />
    {searchValue && repoList && (
      <List>
        {repoList.map((repo) => (
          <Item key={repo.id}>
            <Typography type="b1">{repo.full_name}</Typography>
            <Button onClick={() => onRegister(repo.id)}>등록</Button>
          </Item>
        ))}
      </List>
    )}
  </Form>
);

SearchView.propTypes = {
  repoList: PropTypes.arrayOf(GithubPropTypes.repository).isRequired,
  searchValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onRegister: PropTypes.func.isRequired,
};

const Form = styled.form`
  position: relative;
  margin-top: 50px;
`;

const List = styled.ul`
  list-style: none;
  position: absolute;
  padding: 0;
  margin: 0;
  width: 100%;
  max-height: 200px;
  top: 100%;
  left: 0;
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.lightgrey};
  border-top: none;
  overflow-y: auto;
`;

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 7px;
  & + & {
    border-top: 1px solid ${({ theme }) => theme.color.lightgrey};
  }
`;

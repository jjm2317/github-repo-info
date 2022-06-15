import PropTypes from 'prop-types';
import styled from 'styled-components';

import TextInput from 'components/TextInput';
import Typography from 'components/Typography';
import Button from 'components/Button';

const Search = () => <></>;

export default Search;

export const SearchView = ({ searchValue = '', repoList, handleRegister }) => (
  <Form>
    <TextInput
      type="text"
      value={searchValue}
      placeholder="레포지토리 명을 입력해주세요."
    />
    {repoList && (
      <List>
        {repoList.map((repo) => (
          <Item key={repo.id}>
            <Typography>{repo.full_name}</Typography>
            <Button onClick={() => handleRegister(repo.id)}>등록</Button>
          </Item>
        ))}
      </List>
    )}
  </Form>
);

SearchView.propTypes = {
  searchValue: PropTypes.string,
  repoList: PropTypes.arrayOf(PropTypes.shape),
};

const Form = styled.form`
  position: relative;
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

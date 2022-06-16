// import PropTypes from 'prop-types';

import Container from 'components/Container';
import RepoList from 'pages/main/components/repos/RepoList';
import Search from 'pages/main/components/search/Search';

const MainPage = () => (
  <Container>
    <Search />
    <RepoList />
  </Container>
);

export default MainPage;

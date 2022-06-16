// import PropTypes from 'prop-types';

import Container from 'components/Container';
import Typography from 'components/Typography';
import RepoList from 'pages/main/components/repos/RepoList';
import Search from 'pages/main/components/search/Search';

const MainPage = () => (
  <Container>
    <Typography as="h1" type="h2">
      repository 검색, 등록
    </Typography>
    <Search />
    <RepoList />
  </Container>
);

export default MainPage;

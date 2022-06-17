import Container from 'components/Container';
import Typography from 'components/Typography';
import useLocalStorage from 'hooks/useLocalStorage';
import RepoList from 'pages/main/components/repos/RepoList';
import Search from 'pages/main/components/search/Search';

const MainPage = () => {
  const [repoList, setRepoList] = useLocalStorage('repos', []);

  return (
    <Container>
      <Typography as="h1" type="h2">
        repository 검색, 등록
      </Typography>
      <Search setRepoList={setRepoList} storedRepoList={repoList} />
      <RepoList repoList={repoList} setRepoList={setRepoList} />
    </Container>
  );
};

export default MainPage;

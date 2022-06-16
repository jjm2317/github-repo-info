import { Routes, Route } from 'react-router-dom';

import IssuePage from 'pages/issue/IssuePage';
import MainPage from 'pages/main/MainPage';

const App = () => (
  <Routes>
    <Route element={<MainPage />} path="/" />
    <Route element={<IssuePage />} path="/repos/:owner/:repository" />
  </Routes>
);

export default App;

import { Routes, Route } from 'react-router-dom';

import MainPage from 'pages/main/MainPage';

const App = () => (
  <Routes>
    <Route element={<MainPage />} path="/" />
  </Routes>
);

export default App;

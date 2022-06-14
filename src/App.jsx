import { Routes, Route } from 'react-router-dom';

import Main from 'Main';

const App = () => (
  <Routes>
    <Route path="/">
      <Main />
    </Route>
  </Routes>
);
export default App;

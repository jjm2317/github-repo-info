import React from 'react';

import { SearchView } from 'pages/main/components/search/Search';

export default {
  component: SearchView,
};

export const Default = (args) => <SearchView {...args} />;

Default.args = {
  searchValue: 'Tetris',
  repoList: [
    { id: 1, full_name: 'dtrupenn/Tetris' },
    { id: 2, full_name: 'dtrupenn/Tetris2' },
  ],
};

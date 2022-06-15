import React from 'react';

import { SearchView as Search } from 'pages/main/components/search/Search';

export default {
  component: Search,
};

export const Default = (args) => <Search {...args} />;

Default.args = {
  searchValue: 'Tetris',
  repoList: [
    { id: 1, full_name: 'dtrupenn/Tetris' },
    { id: 2, full_name: 'dtrupenn/Tetris2' },
  ],
};

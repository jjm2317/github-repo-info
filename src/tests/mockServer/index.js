import { setupServer } from 'msw/node';

import handlers from 'tests/mockServer/handlers';

const server = setupServer(...handlers);
export default server;

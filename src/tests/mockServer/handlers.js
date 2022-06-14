import { rest } from 'msw';

import TestResolvers from 'tests/mockServer/resolvers/TestResolvers';

const handlers = [rest.get('/test', TestResolvers.test)];

export default handlers;

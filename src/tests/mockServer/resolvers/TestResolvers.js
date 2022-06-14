const test = (req, res, ctx) =>
  res(
    ctx.json({
      text: 'test api',
    })
  );

const TestResolvers = {
  test,
};

export default TestResolvers;

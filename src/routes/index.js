const userRoutes = require('./user');
const postsRoutes = require('./user');

const registerRoutes = (app) => {
  app.use('/users', userRoutes);
  app.use('/posts', postsRoutes);
};

module.exports = registerRoutes;

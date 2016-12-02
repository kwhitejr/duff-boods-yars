import express from 'express';
import passport from 'passport';

import AuthController from './controllers/authentication';
import passportService from './config/passport';

// Middleware to require login/auth
const requireAuth = passport.authenticate('jwt', { session: false });
const requireLogin = passport.authenticate('local', { session: false });

module.exports = function (app) {
  // console.log("router is operational");
  // Initialize route groups
  const apiRoutes = express.Router();
  const authRoutes = express.Router();

  //= ========================
  // Auth Routes
  //= ========================

  // Set auth routes as subgroup/middleware to apiRoutes
  apiRoutes.use('/auth', authRoutes);

  // Registration route
  authRoutes.post('/register', AuthController.register);

  // Login route
  authRoutes.post('/login', requireLogin, AuthController.login);


  //= ========================
  // API Routes Wrapper
  //= ========================

  // Set auth routes as subgroup/middleware to apiRoutes
  app.use('/api', apiRoutes);
};

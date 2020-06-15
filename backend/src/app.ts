import express, { Application } from 'express';
import { config } from 'dotenv';
if (process.env.NODE_ENV === 'development') {
  import morgan from 'morgan';
}
import path from 'path';

// Security stuff
import cors from 'cors';
import helmet from 'helmet';
import { errors } from 'celebrate';

// Import routes
import BaseRouter from './routes';

/**
 *
 * Separates the server creation logic from the port allocation logic.
 * When I run the tests, I don't want you to allocate ports.
 * Direct tests within the application.
 *
 */
export default class App {
  private express: Application;

  constructor() {
    config({
      path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
    });

    this.express = express();

    this.middlewares();
    this.routes();

    this.validationErrors();
  }

  getApp() {
    return this.express;
  }

  middlewares() {
    // Security
    if (process.env.NODE_ENV === 'production') {
      this.express.use(helmet());
    }
    this.express.disable('x-powered-by');
    this.express.use(cors({ exposedHeaders: ['X-Total-Count', 'X-round'] }));

    // To understand body with json format
    this.express.use(express.json());

    // Upload content
    this.express.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'uploads'))
    );

    // Show routes called in console during development
    if (process.env.NODE_ENV === 'development') {
      this.express.use(morgan('dev'));
    }
  }

  routes() {
    this.express.use(BaseRouter);
  }

  validationErrors() {
    this.express.use(errors());
  }
}

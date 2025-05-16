import express from 'express';
import aulas from './aulasRoutes.js';
import usuarios from './usuariosRoutes.js';
import cors from 'cors';

const BASE_URL = 'http://localhost:3000';

const routes = (app) => {
  app.route('/').get((req, res) => res.status(200).send('Escola AVANÇO!'));
  app.use(cors({
    origin: BASE_URL, 
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Access-Control-Allow-Origin']
  }));
  app.use(express.json(), aulas, usuarios);
  app.options('*', cors());
};

export default routes;

import express from 'express';

import PointsControllers from './controllers/PointsController';
import ItemsController from './controllers/itemsController';

const routes = express.Router();
const pointsController = new PointsControllers();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);

routes.post('/points', pointsController.create);
routes.get('/points/', pointsController.index);
routes.get('/points/:id', pointsController.show);

export default routes;
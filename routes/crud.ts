import { Router } from 'express';
import { ActivitiesController } from '../src/Pronosticos/Application/Controller/Activities.ctrl';
import { UsersController } from '../src/Pronosticos/Application/Controller/User.ctrl';
import { ConfigController } from '../src/Pronosticos/Application/Controller/Config.ctrl';

const router = Router();

const activitiesCtrl = new ActivitiesController();
const usersCtrl = new UsersController();
const configCtrl = new ConfigController();

// Activities
router.post('/activities', activitiesCtrl.createActivity);
router.get('/activities/:id', activitiesCtrl.getActivity);
router.put('/activities/:id', activitiesCtrl.updateActivity);
router.delete('/activities/:id', activitiesCtrl.deleteActivity);

// Users
router.post('/users', usersCtrl.createUser);
router.get('/users/:id', usersCtrl.getUser);
router.put('/users/:id', usersCtrl.updateUser);
router.delete('/users/:id', usersCtrl.deleteUser);

// Configs
router.post('/configs', configCtrl.createConfig);
router.get('/configs/:id', configCtrl.getConfig);
router.put('/configs/:id', configCtrl.updateConfig);
router.delete('/configs/:id', configCtrl.deleteConfig);

export default router;

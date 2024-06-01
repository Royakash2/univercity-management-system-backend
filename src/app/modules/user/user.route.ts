import express from 'express';
import { UserController } from './user.controller';

const router = express.Router();
// console.log(UserController);  // Add this line to see if UserController is defined

router.post('/create-student', UserController.createStudent);
;

export const UserRoutes = router;

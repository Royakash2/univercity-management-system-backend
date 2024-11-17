import express from 'express';
import { studentControllers } from './student.controller';
import { validateRequest } from '../../middlewares/validateRequest';
import { studentValidations } from './student.validation.zod';

const router = express.Router();

router.get('/', studentControllers.getAllStudents);
router.get('/:studentId', studentControllers.getSingleStudent);
router.patch('/:studentId', validateRequest(studentValidations.updateStudentValidationSchema), studentControllers.updateStudent);
router.delete('/:studentId', studentControllers.deleteStudent);

export const StudentRoutes = router;

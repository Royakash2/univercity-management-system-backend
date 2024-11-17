import express from 'express';
import { validateRequest } from '../../middlewares/validateRequest';
import { academicDepartmentValidation } from './AcademicDepartment.validation';
import { AcademicDepartmentControllers } from './AcademicDepartment.controller';

const router = express.Router();

router.post(
  '/create-academic-department',
  // validateRequest(
  //   academicDepartmentValidation.createAcademicDepartmentValidationSchema,
  // ),
  AcademicDepartmentControllers.createAcademicDepartment,
);

router.get('/:departmentId', AcademicDepartmentControllers.getSingleAcademicDepartment);

router.get('/', AcademicDepartmentControllers.getAllAcademicDepartments);

router.patch(
  '/:departmentId',
  validateRequest(
    academicDepartmentValidation.updateAcademicDepartmentValidationSchema,
  ),
  AcademicDepartmentControllers.updateAcademicDepartment,
);

export const academicDepartmentRoutes = router;

import express from 'express';
import { validateRequest } from '../../middlewares/validateRequest';
import { courseValidations } from './course.validation';
import { courseControllers } from './course.controller';
const router = express.Router();

router.post(
  '/create-course',
  validateRequest(courseValidations.createCourseValidationSchema),
  courseControllers.createCourse,
);
router.get('/:id', courseControllers.getSingleCourse);

router.get('/', courseControllers.getAllCourses);

router.patch(
  '/:id',
  validateRequest(courseValidations.updateCourseValidationSchema),
  courseControllers.updateCourse,
);

router.put('/courseId/assign-faculties');

router.delete('/:id', courseControllers.deleteCourse);

export const CourseRoutes = router;

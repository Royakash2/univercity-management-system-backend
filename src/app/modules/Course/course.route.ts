import express from 'express';
import { validateRequest } from '../../middlewares/validateRequest';
import { courseValidations } from './course.validation';
import { courseControllers } from './course.controller';
import router from '../../routes';

router.post(
  '/create-Course',
  validateRequest(courseValidations.createCourseValidationSchema),
  courseControllers.createCourse,
);
router.get('/:id', courseControllers.createCourse);
// router.patch(
//   '/:semesterId',
//   validateRequest(
//     AcademicSemesterValidations.updateAcademicSemesterValidationSchema,
//   ),
//   AcademicSemesterControllers.updateAcademicSemester,
// );
router.delete('/:id', courseControllers.deleteCourse);

router.get('/', courseControllers.getAllCourses);

export const CourseRoutes = router;

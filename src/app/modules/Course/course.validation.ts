import { z } from 'zod';

const preRequisiteCourseValidationSchema = z.object({
  course: z.string(),
  isDeleted: z.boolean().optional(), // Boolean value
});

const createCourseValidationSchema = z.object({
  body: z.object({
    title: z.string(),
    prefix: z.string(),
    code: z.number(),
    credit: z.number(),
    preRequisiteCourse: z.array(preRequisiteCourseValidationSchema), // Array of prerequisite courses
  }),
});
export const courseValidations = {
  createCourseValidationSchema,
};

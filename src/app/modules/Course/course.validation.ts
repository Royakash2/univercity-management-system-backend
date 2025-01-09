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
    preRequisiteCourse: z.array(preRequisiteCourseValidationSchema).optional(), // Array of prerequisite courses
    isDeleted: z.boolean().optional(),
  }),
});

const updatePreRequisiteCourseValidationSchema = z.object({
  course: z.string(),
  isDeleted: z.boolean().optional(), // Boolean value
});

const updateCourseValidationSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    prefix: z.string().optional(),
    code: z.number().optional(),
    credit: z.number().optional(),
    preRequisiteCourse: z.array(updatePreRequisiteCourseValidationSchema).optional(), // Array of prerequisite courses
    isDeleted: z.boolean().optional(),
  }),
});

// const updateCourseValidationSchema = createCourseValidationSchema.partial();
export const courseValidations = {
  createCourseValidationSchema,
  updateCourseValidationSchema,
};

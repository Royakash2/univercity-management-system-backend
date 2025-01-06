import { TCourse } from './course.interface';
import { Course } from './course.model';

const createCourseIntoDB = async (payLoad:TCourse) => {
  const result = await Course.create(payLoad);
  return result;
};
const getAllCoursesFromDB = async () => {
  const result = await Course.find();
  return result;
};
const getSingleCourseFromDB = async (id: string) => {
  const result = await Course.findById(id);
  return result;
};
const deleteCourseFRomDB = async (id: string) => {
  const result = await Course.findByIdAndUpdate(
    id,
    {
      isDeleted: true,
    },
    {
      new: true,
    },
  );
  return result;
};

export const courseServices = {
  createCourseIntoDB,
  getAllCoursesFromDB,
  getSingleCourseFromDB,
  deleteCourseFRomDB,
};

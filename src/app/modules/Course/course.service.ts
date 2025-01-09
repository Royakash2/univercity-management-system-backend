
import QueryBuilder from '../../builder/QueryBuilder';
import { courseSearchableFields } from './course.constant';
import { TCourse } from './course.interface';
import { Course } from './course.model';

const createCourseIntoDB = async (payLoad: TCourse) => {
  const result = await Course.create(payLoad);
  return result;
};
const getAllCoursesFromDB = async (query: Record<string, unknown>) => {
  const courseQuery = new QueryBuilder(
    Course.find().populate('preRequisiteCourse.course'),
    query,
  )
    .search(courseSearchableFields)
    .fields()
    .filter()
    .paginate()
    .sort();

  const result = await courseQuery.modelQuery;
  return result;
};
const getSingleCourseFromDB = async (id: string) => {
  const result = await Course.findById(id).populate(
    'preRequisiteCourse.course',
  );
  return result;
};

const updateCourseIntoDb = async (id: string, payload: Partial<TCourse>) => {
  const { preRequisiteCourse, ...courseRemainingData } = payload;

  // step:1 basic course Update
  const updateBasicCourseInfo = await Course.findByIdAndUpdate(
    id,
    courseRemainingData,
    {
      new: true,
      runValidators: true,
    },
  );

  console.log(preRequisiteCourse);
  // check there if any prerequisite courses to update

  if (preRequisiteCourse && preRequisiteCourse.length > 0) {
    // filter out the delete field
    const deletedPrerequisites = preRequisiteCourse
      .filter((el) => el.course && el.isDeleted)
      .map((el) => el.course);
    const deletePrerequisiteCourses = await Course.findByIdAndUpdate(id, {
      $pull: {
        preRequisiteCourse: {
          course: { $in: deletedPrerequisites}
        }
      },
    });
  }

  return updateBasicCourseInfo;
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
  updateCourseIntoDb,
  deleteCourseFRomDB,
};

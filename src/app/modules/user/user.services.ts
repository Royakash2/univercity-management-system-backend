import { object } from 'zod';
import config from '../../config';
import { TStudent } from '../student/student.interface';
import { TUser } from './user.interface';
import { User } from './user.model';
import { Student } from '../student/schema.model';

const createStudentIntoDb = async (password: string, studentData: TStudent) => {
  // create user object
  const userData: Partial<TUser> = {};

  // default password functionality
  userData.password = password || (config.default_pass as string);

  //   set student role
  userData.role = 'student';

  // set manually generated id
  userData.id = '203000001';

  const newUser = await User.create(userData);

  //   create a student
  if (Object.keys(newUser).length) {
    studentData.id = newUser.id; // embedded id
    studentData.user = newUser._id; //reference Id
    const newStudent = await Student.create(studentData);
    return newStudent;
  }
};

export const UserServices = {
  createStudentIntoDb,
};

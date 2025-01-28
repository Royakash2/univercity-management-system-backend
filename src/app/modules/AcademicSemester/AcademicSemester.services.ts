import httpStatus from 'http-status';
import { academicSemesterNameCodeMapper } from './Academic.constant';
import { TAcademicSemester} from './AcademicSemister.interface';
import { AcademicSemester } from './academicSemester.model';
import AppError from '../../errors/appError';

const createAcademicSemesterIntoDb = async (
  playLoad: TAcademicSemester,
) => {

  if(academicSemesterNameCodeMapper[playLoad.name] !== playLoad.code){
    throw new AppError(httpStatus.NOT_FOUND,'Invalid semester code')
  }
  const result = await AcademicSemester.create(playLoad);
  return result;
};
const getAllAcademicSemestersFromDB = async () => {
  const result = await AcademicSemester.find();
  return result;
};

const getSingleAcademicSemesterFromDB = async (id: string) => {
  const result = await AcademicSemester.findById(id);
  return result;
};

const updateAcademicSemesterIntoDB = async (
  id: string,
  payload: Partial<TAcademicSemester>,
) => {
  if (
    payload.name &&
    payload.code &&
    academicSemesterNameCodeMapper[payload.name] !== payload.code
  ) {
    throw new AppError(httpStatus.NOT_FOUND,'Invalid Semester Code');
  }

  const result = await AcademicSemester.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

export const AcademicSemesterServices = {
  createAcademicSemesterIntoDb,
  getAllAcademicSemestersFromDB,
  getSingleAcademicSemesterFromDB,
  updateAcademicSemesterIntoDB,
};

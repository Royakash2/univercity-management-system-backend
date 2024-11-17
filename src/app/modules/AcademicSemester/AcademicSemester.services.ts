import httpStatus from 'http-status';
import appError from '../../errors/appError';
import { academicSemesterNameCodeMapper } from './Academic.constant';
import { TAcademicSemester, TAcademicSemesterCode } from './AcademicSemister.interface';
import { AcademicSemester } from './academicSemester.model';

const createAcademicSemesterIntoDb = async (
  playLoad: TAcademicSemester,
) => {

  if(academicSemesterNameCodeMapper[playLoad.name] !== playLoad.code){
    throw new appError(httpStatus.NOT_FOUND,'Invalid semester code')
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
    throw new appError(httpStatus.NOT_FOUND,'Invalid Semester Code');
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

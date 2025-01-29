import httpStatus from 'http-status';
import { catchAsync } from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { semesterRegistrationServices } from './semesterRegistration.service';
import { Request, Response } from 'express';

const createSemesterRegistration = catchAsync(
  async (req: Request, res: Response) => {
    const result = await  semesterRegistrationServices.createSemesterRegistrationIntoDB(req.body)
    sendResponse(res,{
      statusCode : httpStatus.OK,
      success : true,
      message :'Semester Registration is created successfully',
      data : result,
    })
  },
);
const getAllSemesterRegistrations = catchAsync(
  async (req: Request, res: Response) => {
    const result = await  semesterRegistrationServices.getAllSemesterRegistrationFromDB(req.body)
    sendResponse(res,{
      statusCode : httpStatus.OK,
      success : true,
      message :'Semester Registrations is retrieved successfully',
      data : result,
    })
  },
);
const getSingleSemesterRegistrations = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await  semesterRegistrationServices.getSingleSemesterRegistrationFromDB(id)
    sendResponse(res,{
      statusCode : httpStatus.OK,
      success : true,
      message :'Semester Registration is retrieved successfully',
      data : result,
    })

  },
);
const updateSemesterRegistration = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await  semesterRegistrationServices.updateSemesterRegistrationIntoDB(id)
    sendResponse(res,{
      statusCode : httpStatus.OK,
      success : true,
      message :'Semester Registration is update successfully',
      data : result,
    })
  },
);

export const semesterRegistrationController = {
  createSemesterRegistration,
  getAllSemesterRegistrations,
  getSingleSemesterRegistrations,
  updateSemesterRegistration,
};

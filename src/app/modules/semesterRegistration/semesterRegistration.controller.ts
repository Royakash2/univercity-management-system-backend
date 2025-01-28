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
  async (req: Request, res: Response) => {},
);
const getSingleSemesterRegistrations = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
  },
);
const updateSemesterRegistration = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
  },
);

export const semesterRegistrationController = {
  createSemesterRegistration,
  getAllSemesterRegistrations,
  getSingleSemesterRegistrations,
  updateSemesterRegistration,
};

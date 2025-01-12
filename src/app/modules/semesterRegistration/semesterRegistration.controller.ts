import { catchAsync } from '../../utils/catchAsync';

const createSemesterRegistration = catchAsync(
  async (req: Request, res: Response) => {},
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

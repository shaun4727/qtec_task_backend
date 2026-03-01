import { Request, Response } from 'express';
import { ApplicantServices } from './applicant.services';
import sendResponse from '../../app/middleware/sendResponse';

const applyForJob = async (req: Request, res: Response) => {
  const result = await ApplicantServices.applyForJob(req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Applied successfully',
    data: result,
  });
};

const getJobApplicants = async (req: Request, res: Response) => {
  const { jobId } = req.params;
  const result = await ApplicantServices.getApplicantsByJobId(jobId as string);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Applicants retrieved successfully',
    data: result,
  });
};

export const ApplicantControllers = {
  applyForJob,
  getJobApplicants,
};

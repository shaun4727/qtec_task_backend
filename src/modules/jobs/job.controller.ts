import { Request, Response } from 'express';
import { JobServices } from './job.services';
import sendResponse from '../../app/middleware/sendResponse';

const createJob = async (req: Request, res: Response) => {
  const result = await JobServices.createJobIntoDB(req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Job created successfully',
    data: result,
  });
};

const getAllJobsController = async (req: Request, res: Response) => {
  const result = await JobServices.getAllJobsFromDB();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'All Jobs fetched successfully',
    data: result,
  });
};

const getSingleJobsController = async (req: Request, res: Response) => {
  const id = req.params.id as string;

  const result = await JobServices.getSingleJobFromDB(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Single Job fetched successfully',
    data: result,
  });
};

const deleteSingleJobsController = async (req: Request, res: Response) => {
  const id = req.params.id as string;

  await JobServices.deleteJobFromDB(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Job deleted successfully',
  });
};

export const JobControllers = {
  createJob,
  getAllJobsController,
  getSingleJobsController,
  deleteSingleJobsController,
};

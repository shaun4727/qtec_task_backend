import express from 'express';
import validateMiddleware from '../../app/middleware/validateRequest';

import { JobValidation } from './job.validation';
import { JobControllers } from './job.controller';

const router = express.Router();

router.post(
  '/',
  validateMiddleware(JobValidation.jobCreateValidationSchema),
  JobControllers.createJob
);

router.get('/', JobControllers.getAllJobsController);
router.get('/:id', JobControllers.getSingleJobsController);
router.delete('/:id', JobControllers.deleteSingleJobsController);

export const JobRoutes = router;

import express from 'express';
import validateMiddleware from '../../app/middleware/validateRequest';
import { ApplicantValidation } from './applicant.validation';
import { ApplicantControllers } from './applicant.controller';

const router = express.Router();

router.post(
  '/',
  validateMiddleware(ApplicantValidation.createApplicantSchema),
  ApplicantControllers.applyForJob
);

export const ApplicantRoutes = router;

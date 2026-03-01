import { Router } from 'express';
import { JobRoutes } from '../../modules/jobs/job.route';
import { ApplicantRoutes } from '../../modules/applicant/applicant.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/jobs',
    route: JobRoutes,
  },
  {
    path: '/applications',
    route: ApplicantRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;

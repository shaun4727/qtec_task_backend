import AppError from '../../app/utils/AppError.js';
import prisma from '../../app/utils/prisma.js';
import { TApplicant } from './applicant.validation.js';

const applyForJob = async (payload: TApplicant) => {
  // Prisma handles the foreign key connection via 'jobId'
  const job = await prisma.job.findFirst({ where: { id: payload.jobId } });

  if (!job) {
    throw new AppError(401, 'Job does not exist');
  }
  const result = await prisma.applicant.create({
    data: payload,
  });
  return result;
};

const getApplicantsByJobId = async (jobId: string) => {
  return await prisma.applicant.findMany({
    where: { jobId },
    orderBy: { createdAt: 'desc' },
  });
};

export const ApplicantServices = {
  applyForJob,
  getApplicantsByJobId,
};

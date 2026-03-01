import { Job } from '@prisma/client';
import { TJobValidation } from './job.validation'; // Path to your Zod type
import prisma from '../../app/utils/prisma';

const createJobIntoDB = async (payload: TJobValidation): Promise<Job> => {
  // Prisma automatically handles the mapping of createdAt and id
  const result = await prisma.job.create({
    data: payload,
  });

  return result;
};

const getAllJobsFromDB = async () => {
  const result = await prisma.job.findMany();

  return result;
};

const getSingleJobFromDB = async (id: string) => {
  const result = await prisma.job.findFirst({ where: { id } });

  return result;
};

const deleteJobFromDB = async (id: string) => {
  await prisma.job.delete({ where: { id } });
};

export const JobServices = {
  createJobIntoDB,
  getAllJobsFromDB,
  getSingleJobFromDB,
  deleteJobFromDB,
};

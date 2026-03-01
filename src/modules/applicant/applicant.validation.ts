import { z } from 'zod';

const createApplicantSchema = z.object({
  body: z.object({
    jobId: z.string().uuid('Invalid Job ID format'),
    name: z.string().min(2, 'Name is too short'),
    email: z.string().email('Invalid email format'),
    resumeLink: z.string().url('Resume link must be a valid URL'),
    coverNote: z.string().min(20, 'Cover note should be at least 20 characters'),
  }),
});

export const ApplicantValidation = {
  createApplicantSchema,
};

export type TApplicant = z.infer<typeof createApplicantSchema>['body'];

import { z } from 'zod';

// Define Zod schemas for sub-schemas
const userNameValidationSchema = z.object({
  firstName: z.string().trim().min(1).max(20),
  middleName: z.string().trim(),
  lastName: z.string().trim().min(1),
});

const guardianValidationSchema = z.object({
  fatherName: z.string().trim().min(1),
  fatherOccupation: z.string().trim().min(1),
  fatherContactNo: z.string().trim().min(1),
  motherName: z.string().trim().min(1),
  motherOccupation: z.string().trim().min(1),
  motherContactNo: z.string().trim().min(1),
});

const localGuardianValidationSchema = z.object({
  name: z.string().trim().min(1),
  occupation: z.string().trim().min(1),
  contactNo: z.string().trim().min(1),
  address: z.string().trim().min(1),
});

// Define Zod schema for Student
const createStudentZodValidationSchema = z.object({
  body: z.object({
    password: z.string().trim().min(6).max(20),
    student: z.object({
      name: userNameValidationSchema,
      gender: z.enum(['male', 'female', 'others']),
      dateOfBirth: z.string().optional(),
      email: z.string().email(),
      contactNo: z.string().trim().min(1),
      emergencyContactNo: z.string().trim().min(1),
      bloodGroup: z
        .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
        .optional(),
      presentAddress: z.string().trim().min(1),
      permanentAddress: z.string().trim().min(1),
      guardian: guardianValidationSchema,
      localGuardian: localGuardianValidationSchema,
      admissionSemester: z.string(),
      profileImg: z.string().optional()
    }),
  }),
});

export const studentValidations = {
  createStudentZodValidationSchema,
};

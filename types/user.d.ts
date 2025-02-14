import { z } from "zod";

// You can import your stringArraySchema here if it's defined elsewhere
// Example:
// import { stringArraySchema } from './path-to-your-schema';

// Define the TypeScript type for the schema
export type FormSchemaType = {
  name: string;
  phoneNumber: tel;
  email: string;
  gender: "Male" | "Female";
  dateOfBirth: Date;
  specialty: string;
  qualifications: string[];  
  availableSlots: string[]; 
  maxPatientPerDay: number;      
};

// Define the Zod schema for validation
export const formSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  phoneNumber: z
    .string()
    .min(10, "Mobile number should be of 10 digits")
    .max(10, "Mobile number should be of 10 digits"),
  email: z.string().email("Invalid email address"),
  gender: z.enum(["male", "female"]),
  dateofBirth: z.Date(),
  specialty: z.string(),
  qualifications: z.array(z.string()), // Assumes stringArraySchema is an array of strings
  availableSlots: z.array(z.string()), // Assumes stringArraySchema is an array of strings
  maxPatient: z.number()
});

// Optionally, create a TypeScript type from the Zod schema for further usage
export type FormSchemaValidationType = z.infer<typeof formSchema>;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MedicalHistory {
  condition: string;
  diagnosisDate: Date;
  treatment: string;
}

interface PatientDetails {
  medicalHistory: MedicalHistory[];
  allergies: string[];
  currentMedications: string[];
}

// interface AvailableSlot {
//   startTime: Date;
//   endTime: Date;
//   isBooked: boolean;
// }

interface DoctorDetails {
  specialty: string;
  qualifications: string[];
  availableSlots: string[];
  maxPatientsPerDay: number;
}

export interface UserState {
  name?: string;
  email: string;
  gender: 'Male' | 'Female';
  password: string;
  dateOfBirth: Date | string;
  phoneNumber: string;
  patientDetails?: PatientDetails;
  doctorDetails?: DoctorDetails;
}

const initialState: UserState = {
  name: '',
  email: '',
  password: '',
  phoneNumber: '',
  gender: 'Male',
  dateOfBirth: '',
  patientDetails: undefined,
  doctorDetails: undefined,
};


const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserState>) => { 
      const {  name, email, phoneNumber,dateOfBirth,patientDetails, doctorDetails } = action.payload;
      state.name = name;
      state.email = email;
      state.phoneNumber = phoneNumber;
      state.dateOfBirth = dateOfBirth instanceof Date ? dateOfBirth.toISOString() : dateOfBirth;
      state.patientDetails = patientDetails;
      state.doctorDetails = doctorDetails;
    }
  }
});

export const { setUserData } = userSlice.actions;
export default userSlice.reducer;

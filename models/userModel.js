const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // Common fields for all users
  role: {
    type: String,
    enum: ['patient', 'doctor'],
    required: true,
  },
  gender: {
    type: String,
    default: ""
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    default: null
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },

  // Fields specific to patients
  patientDetails: {
    medicalHistory: [
      {
        condition: String,
        diagnosisDate: Date,
        treatment: String,
      },
    ],
    allergies: [String],
    currentMedications: [String],
  },

  // Fields specific to doctors
  doctorDetails: {
    specialty: {
      type: String,
      default: ""
    },
    qualifications: [String],
    availableSlots: [
      // {
      //   startTime: Date,
      //   endTime: Date,
      //   isBooked: {
      //     type: Boolean,
      //     default: false,
      //   },
      // },
      String
    ],
    maxPatientsPerDay: {
      type: Number,
      default: ""
    },
    hospitalId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Hospital',
    },
  }
});

// Virtual field to calculate age for patients based on dateOfBirth
userSchema.virtual('age').get(function () {
  if (this.role === 'patient' && this.patientDetails.dateOfBirth) {
    const today = new Date();
    const birthDate = new Date(this.patientDetails.dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth();
    const day = today.getDate();

    // Adjust if the birthday hasn't occurred yet this year
    if (month < birthDate.getMonth() || (month === birthDate.getMonth() && day < birthDate.getDate())) {
      age--;
    }
    return age;
  }
  return null; // For non-patient roles, age will be null
});

// You should set the virtual to be included when converting to JSON
userSchema.set('toJSON', {
  virtuals: true,
});

// Update the `updatedAt` field before saving
userSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
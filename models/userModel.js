const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // Common fields for all users
  role: {
    type: String,
    enum: ['patient', 'doctor', 'admin'],
    required: true,
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
    dateOfBirth: {
      type: Date,
    },
    gender: {
      type: String,
      enum: ['male', 'female', 'other'],
    },
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
      // required: function () {
      //   return this.role === 'doctor';
      // },
    },
    qualifications: [String],
    availableSlots: [
      {
        startTime: Date,
        endTime: Date,
        isBooked: {
          type: Boolean,
          default: false,
        },
      },
    ],
    maxPatientsPerDay: {
      type: Number,
      default: 20,
    },
    hospitalId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Hospital',
    },
  },

  // Fields specific to admins
  adminDetails: {
    hospitalId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Hospital',
    },
    permissions: [String], // e.g., ["manage_users", "manage_appointments"]
  },
});

// Update the `updatedAt` field before saving
userSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
// import { Schema, model } from 'mongoose';
// import {
//   StudentModel,
//   TGuardian,
//   TLocalGuardian,
//   TStudent,
//   TUserName,
// } from './student.interface';

// const userNameSchema = new Schema<TUserName>({
//   firstName: {
//     type: String,
//     required: [true, 'First name is required'],
//     maxlength: [20, 'first name can not be more then 20'],
//     trim: true,
//     validate: {
//       validator: function (value: string) {
//         const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);
//         return firstNameStr === value;
//       },
//       message: '{VALUE} is not capitalize format',
//     },
//   },
//   middleName: {
//     type: String,
//     trim: true,
//   },
//   lastName: {
//     type: String,
//     required: [true, 'Last name is required'],
//     trim: true,
//   },
// });

// const guardianSchema = new Schema<TGuardian>({
//   motherName: { type: String, required: [true, "Mother's name is required"] },
//   fatherName: { type: String, required: [true, "Father's name is required"] },
//   fatherOccupation: {
//     type: String,
//     required: [true, "Father's occupation is required"],
//   },
//   fatherContactNo: {
//     type: String,
//     required: [true, "Father's contact number is required"],
//   },
//   motherOccupation: {
//     type: String,
//     required: [true, "Mother's occupation is required"],
//   },
//   motherContactNo: {
//     type: String,
//     required: [true, "Mother's contact number is required"],
//   },
// });

// const localGuardianSchema = new Schema<TLocalGuardian>({
//   name: { type: String, required: [true, "Local guardian's name is required"] },
//   contactNo: {
//     type: String,
//     required: [true, "Local guardian's contact number is required"],
//   },
//   address: {
//     type: String,
//     required: [true, "Local guardian's address is required"],
//   },
// });

// const StudentSchema = new Schema<TStudent, StudentModel>(
//   {
//     id: {
//       type: String,
//       required: [true, 'Student ID is required'],
//       unique: true,
//     },
//     user: {
//       type: Schema.Types.ObjectId,
//       required: [true, 'user Id is required'],
//       unique: true,
//       ref: 'User',
//     },

//     name: {
//       type: userNameSchema,
//       required: [true, 'Student name is required'],
//     },
//     gender: {
//       type: String,
//       enum: ['male', 'female', 'other'],
//       required: [true, 'Gender is required'],
//     },
//     dateOfBirth: { type: Date },
//     email: {
//       type: String,
//       required: [true, 'Email is required'],
//       unique: true,
//     },
//     contactNo: {
//       type: String,
//       required: [true, 'Contact number is required'],
//     },
//     emergencyContactNo: {
//       type: String,
//       required: [true, 'Emergency contact number is required'],
//     },
//     BloodGroup: {
//       type: String,
//       enum: {
//         values: ['A+', 'A-', 'AB+', 'AB-', 'B+', 'B-', 'O+', 'O-'],
//         message:
//           'Blood group must be one of the following: A+, A-, AB+, AB-, B+, B-, O+, O-',
//       },
//     },
//     presentAddress: {
//       type: String,
//       required: [true, 'Present address is required'],
//     },
//     permanentAddress: {
//       type: String,
//       required: [true, 'Permanent address is required'],
//     },
//     guardian: {
//       type: guardianSchema,
//       required: [true, 'Guardian information is required'],
//     },
//     localGuardian: {
//       type: localGuardianSchema,
//       required: [true, 'Local guardian information is required'],
//     },
//     profileImage: { type: String },
//     admissionSemester: {
//       type: Schema.Types.ObjectId,
//       ref: 'AcademicSemester',
//     },
//     academicDepartment: {
//       type: Schema.Types.ObjectId,
//       ref: 'AcademicDepartment',
//     },

//     isDeleted: {
//       type: Boolean,
//       default: false,
//     },
//   },
//   {
//     toJSON: {
//       virtuals: true,
//     },
//   },
// );

// // virtual
// StudentSchema.virtual('fullName').get(function () {
//   return `${this.name.firstName} ${this.name.middleName} ${this.name.lastName}`;
// });

// // Query middleWare
// StudentSchema.pre('find', async function (next) {
//   this.find({ isDeleted: { $ne: true } });
//   next();
// });
// StudentSchema.pre('findOne', async function (next) {
//   this.find({ isDeleted: { $ne: true } });
//   next();
// });
// StudentSchema.pre('aggregate', async function (next) {
//   this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
//   next();
// });

// // creating a custom static method
// StudentSchema.statics.isUserExists = async function (id: string) {
//   const existingUser = await Student.findOne({ id });
//   return existingUser;
// };

// export const Student = model<TStudent, StudentModel>('Student', StudentSchema);



import { Schema, model } from 'mongoose';
import {
  StudentModel,
  TGuardian,
  TLocalGuardian,
  TStudent,
  TUserName,
} from './student.interface';

// Schema for User Name
const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    maxlength: [20, 'First name cannot be more than 20 characters'],
    trim: true,
    validate: {
      validator: function (value: string) {
        const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);
        return firstNameStr === value;
      },
      message: '{VALUE} is not in capitalized format',
    },
  },
  middleName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    trim: true,
  },
});

// Schema for Guardian
const guardianSchema = new Schema<TGuardian>({
  motherName: { type: String, required: [true, "Mother's name is required"] },
  fatherName: { type: String, required: [true, "Father's name is required"] },
  fatherOccupation: {
    type: String,
    required: [true, "Father's occupation is required"],
  },
  fatherContactNo: {
    type: String,
    required: [true, "Father's contact number is required"],
  },
  motherOccupation: {
    type: String,
    required: [true, "Mother's occupation is required"],
  },
  motherContactNo: {
    type: String,
    required: [true, "Mother's contact number is required"],
  },
});

// Schema for Local Guardian
const localGuardianSchema = new Schema<TLocalGuardian>({
  name: { type: String, required: [true, "Local guardian's name is required"] },
  contactNo: {
    type: String,
    required: [true, "Local guardian's contact number is required"],
  },
  address: {
    type: String,
    required: [true, "Local guardian's address is required"],
  },
});

// Main Student Schema
const StudentSchema = new Schema<TStudent, StudentModel>(
  {
    id: {
      type: String,
      required: [true, 'Student ID is required'],
      unique: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      required: [true, 'User ID is required'],
      unique: true,
      ref: 'User',
    },
    name: {
      type: userNameSchema,
      required: [true, 'Student name is required'],
    },
    gender: {
      type: String,
      enum: ['male', 'female', 'other'],
      required: [true, 'Gender is required'],
    },
    dateOfBirth: { type: Date },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    },
    contactNo: {
      type: String,
      required: [true, 'Contact number is required'],
    },
    emergencyContactNo: {
      type: String,
      required: [true, 'Emergency contact number is required'],
    },
    BloodGroup: {
      type: String,
      enum: {
        values: ['A+', 'A-', 'AB+', 'AB-', 'B+', 'B-', 'O+', 'O-'],
        message:
          'Blood group must be one of the following: A+, A-, AB+, AB-, B+, B-, O+, O-',
      },
    },
    presentAddress: {
      type: String,
      required: [true, 'Present address is required'],
    },
    permanentAddress: {
      type: String,
      required: [true, 'Permanent address is required'],
    },
    guardian: {
      type: guardianSchema,
      required: [true, 'Guardian information is required'],
    },
    localGuardian: {
      type: localGuardianSchema,
      required: [true, 'Local guardian information is required'],
    },
    profileImage: { type: String },
    admissionSemester: {
      type: Schema.Types.ObjectId,
      ref: 'AcademicSemester',
    },
    academicDepartment: {
      type: Schema.Types.ObjectId,
      ref: 'AcademicDepartment',
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// Virtual Field for Full Name
StudentSchema.virtual('fullName').get(function () {
  return `${this.name.firstName} ${this.name.middleName || ''} ${this.name.lastName}`.trim();
});

// Middleware for Soft Deletion
StudentSchema.pre('find', async function (next) {
  this.where({ isDeleted: false });
  next();
});
StudentSchema.pre('findOne', async function (next) {
  this.where({ isDeleted: false });
  next();
});
StudentSchema.pre('aggregate', async function (next) {
  this.pipeline().unshift({ $match: { isDeleted: false } });
  next();
});

// Static Method to Check User Existence
StudentSchema.statics.isUserExists = async function (id: string) {
  return await this.findOne({ id });
};

// Ensure Indexes Are Updated
StudentSchema.post('init', async () => {
  await Student.syncIndexes();
});

// Exporting the Model
export const Student = model<TStudent, StudentModel>('Student', StudentSchema);


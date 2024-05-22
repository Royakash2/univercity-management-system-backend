import Joi from 'joi';

// creating a joi validation schema
const userNameValidationSchema = Joi.object({
  firstName: Joi.string()
    .max(20)
    .trim()
    .required()
    .custom((value, helpers) => {
      const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);
      if (firstNameStr !== value) {
        return helpers.error('any.invalid', {
          message: 'First name is not in capitalize format',
        });
      }
      return value;
    }, 'Custom capitalization validation'),
  middleName: Joi.string().trim().optional(),
  lastName: Joi.string()
    .trim()
    .required()
    .pattern(/^[A-Za-z]+$/, 'alphabets'),
});

const guardianValidationSchema = Joi.object({
  motherName: Joi.string().required().messages({
    'any.required': "Mother's name is required",
  }),
  fatherName: Joi.string().required().messages({
    'any.required': "Father's name is required",
  }),
  fatherOccupation: Joi.string().required().messages({
    'any.required': "Father's occupation is required",
  }),
  fatherContactNo: Joi.string().required().messages({
    'any.required': "Father's contact number is required",
  }),
  motherOccupation: Joi.string().required().messages({
    'any.required': "Mother's occupation is required",
  }),
  motherContactNo: Joi.string().required().messages({
    'any.required': "Mother's contact number is required",
  }),
});

const localGuardianValidationSchema = Joi.object({
  name: Joi.string().required().messages({
    'any.required': "Local guardian's name is required",
  }),
  contactNo: Joi.string().required().messages({
    'any.required': "Local guardian's contact number is required",
  }),
  address: Joi.string().required().messages({
    'any.required': "Local guardian's address is required",
  }),
});

const studentValidationSchema = Joi.object({
  id: Joi.string().required().messages({
    'any.required': 'Student ID is required',
  }),
  name: userNameValidationSchema.required().messages({
    'any.required': 'Student name is required',
  }),
  gender: Joi.string().valid('male', 'female', 'other').required().messages({
    'any.required': 'Gender is required',
  }),
  dateOfBirth: Joi.string().optional(),
  email: Joi.string().email().required().messages({
    'any.required': 'Email is required',
    'string.email': 'Email is not valid',
  }),
  contactNo: Joi.string().required().messages({
    'any.required': 'Contact number is required',
  }),
  emergencyContactNo: Joi.string().required().messages({
    'any.required': 'Emergency contact number is required',
  }),
  BloodGroup: Joi.string()
    .valid('A+', 'A-', 'AB+', 'AB-', 'B+', 'B-', 'O+', 'O-')
    .messages({
      'any.only':
        'Blood group must be one of the following: A+, A-, AB+, AB-, B+, B-, O+, O-',
    }),
  presentAddress: Joi.string().required().messages({
    'any.required': 'Present address is required',
  }),
  permanentAddress: Joi.string().required().messages({
    'any.required': 'Permanent address is required',
  }),
  guardian: guardianValidationSchema.required().messages({
    'any.required': 'Guardian information is required',
  }),
  localGuardian: localGuardianValidationSchema.required().messages({
    'any.required': 'Local guardian information is required',
  }),
  isActive: Joi.string().valid('active', 'block').default('active'),
});
export default studentValidationSchema;

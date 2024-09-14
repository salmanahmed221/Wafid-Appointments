// validationSchema.js
import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  country: yup.string().required('Country is required'),
});

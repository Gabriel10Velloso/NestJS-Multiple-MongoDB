import * as mongoose from 'mongoose';
export const studentSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  standard: Number,
  father_name: String,
  mother_name: String
});



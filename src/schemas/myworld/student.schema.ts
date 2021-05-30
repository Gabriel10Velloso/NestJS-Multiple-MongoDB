import * as mongoose from 'mongoose';
export const studentSchema = new mongoose.Schema({
    FirstName:String,
    LastName: String,
    Standard: Number,
    FatherName: String,
    MotherName: String
});
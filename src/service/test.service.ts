import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Animal } from 'src/model/animal.model';
import { Student } from 'src/model/student.model';


@Injectable()
export class TestService {
  constructor(
    @InjectModel('student') private readonly studentModel: Model<Student>,
    @InjectModel('animals') private readonly animalModel: Model<Animal>) {

  }

  async postStudent(val: any): Promise<any> {
    // const { FirstName, LastName, Standard, FatherName, MotherName } = val;

    const newStudent = await new this.studentModel(val);
    return newStudent.save();
  }

  async postAnimal(val: any): Promise<any> {
    const newAnimal = await new this.animalModel(val);
    return newAnimal.save();
  }

  async getStudent() {
    return await this.studentModel.find();
  }

  async getAnimals() {
    return await this.animalModel.find();
  }
}
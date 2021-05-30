import { Body, Controller, Get, Post } from '@nestjs/common';
import { Animal } from 'src/model/animal.model';
import { Student } from 'src/model/student.model';
import { TestService } from 'src/service/test.service';

@Controller('test')
export class TestController{

  student: Student;
  animal: Animal;

    constructor(private testService:TestService){
      this.student =  {
        FirstName: 'Gabriel',
        LastName: 'Velloso',
        Standard: 0,
        FatherName: 'A',
        MotherName: 'V',
      }

      this.animal =  {
        Name: 'Lipe',
      }
      this.postTest();
      this.postTest2();
    }

    @Post('post')
    async postTest(): Promise<any> {
      const newStudent = await this.testService.postStudent(this.student);
      return newStudent;
    }

    @Post('post')
    async postTest2(): Promise<any> {
      const newAnimal = await this.testService.postAnimal(this.animal);
      return newAnimal;
    }

    @Get('get')
    async get(){
       return {
           Students: await this.testService.getStudent(),
           Animals: await this.testService.getAnimals()
       }
    }
}
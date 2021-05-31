import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TestController } from 'src/container/test.controller';
import { TestService } from 'src/service/test.service';
import { studentSchema } from './myworld/student.schema';
import { animalSchema } from './wildlife/animal.schema';



@Module({
  imports: [

    MongooseModule.forFeature([
      {
        name: 'student',
        schema: studentSchema,
        collection: 'student',

      },
    ], 'myWorldDb'),

    MongooseModule.forFeature([
      {
        name: 'animals',
        schema: animalSchema,
        collection: 'animals'
      }
    ], 'wildLifeDb'),

  ],
  controllers: [TestController],
  providers: [TestService],
})
export class SchemaModule { }
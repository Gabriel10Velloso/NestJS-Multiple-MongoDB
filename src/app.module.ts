import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';


import { MongooseModule } from '@nestjs/mongoose';
import { SchemaModule } from './schemas/scgema.module';
// some code hidden for display purpose
@Module({
  imports: [
    SchemaModule,
   // BANCO 1
    MongooseModule.forRoot(
      'mongodb://localhost:27017/MyWorld',
      {
        connectionName: 'myWorldDb'
      }
    ),
    // BANCO 2
    MongooseModule.forRoot(
      'mongodb://localhost:27017/WildLife',
      {
        connectionName: 'wildLifeDb'
      }
    )

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
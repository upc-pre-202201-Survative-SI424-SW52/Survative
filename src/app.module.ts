import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { MongooseModule} from "@nestjs/mongoose";
import { SurveysController } from './surveys/surveys.controller';
import { SurveysService } from './surveys/surveys.service';
import { SurveysModule } from './surveys/surveys.module';

@Module({
  imports: [UsersModule, MongooseModule.forRoot('mongodb://localhost/survative'), SurveysModule],
  controllers: [AppController, UsersController, SurveysController],
  providers: [AppService, UsersService, SurveysService],
})
export class AppModule {}

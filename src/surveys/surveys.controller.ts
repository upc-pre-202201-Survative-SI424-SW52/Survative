import { Controller, Get, Put, Delete, Post, Body, Param } from '@nestjs/common';

import { SurveysService } from "./surveys.service"
import { Survey} from "./interfaces/Survey"
import { CreateSurveyDto } from './dto/create-survey.dto'
@Controller('surveys')

export class SurveysController {

    constructor(private surveyService: SurveysService){}

    @Get(':surveyId')
    getSurveys(): Survey[]{
        return this.surveyService.getSurveys();
    }

    @Get(':surveyId')
    getSurvey(@Param('surveyId') surveyId: string){
        return this.surveyService.getSurvey(parseInt(surveyId));
    }

    @Post()
    createSurvey(@Body() survey:CreateSurveyDto){
        console.log(survey)
        return 'Creando encuesta';
    }

    @Put(':surveyId')
    updateSurvey(@Body() survey:CreateSurveyDto, @Param('surveyId') surveyId){
        console.log(survey)
        console.log(surveyId)
        return 'Actualizando la encuesta';
    }

    @Delete(':surveyId')
    eliminateSurvey(@Param('surveyId') surveyId){
        console.log(surveyId);
        return `eliminando la encuesta número: ${surveyId}`;
    }
}

import { Body, Injectable } from '@nestjs/common';
import { Survey} from './interfaces/Survey'
@Injectable()
export class SurveysService {

    surveys: Survey[] = [
        {
            id: 1,
            question: "Elija su presidente",
            answers: "Pedro Castillo o Keiko Fujimori",
            v_date: "6 de Junio del 2021",
            done: true,
        },

        {
            id: 2,
            question: "Elija el partido politico de su congresista",
            answers: "Perú Libre o Fuerza Popular",
            v_date: "6 de Junio del 2021",
            done: true,
        }
    ];

    getSurveys(): Survey[]{
        return this.surveys;
    }

    getSurvey(id: number): Survey{
        return this.surveys.find(survey=>survey.id === id)
    }

}

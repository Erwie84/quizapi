import { Component } from '@angular/core';
@Component({
  selector: 'qa-question',
  templateUrl: './app/question/question.component.html'
})
export class QuestionComponent {

    question: string = "Typ hier uw vraag ...";
    answer: string = "";

    constructor(){

    }

    questionUpdated(question: string){
        this.question = question;
    }

    answerUpdated(answer: string){
        this.answer = answer;
    }

}
import React,{ useState } from 'react';
import QuestionList from '../Data/questions.json';
import Question from './Question';
import QuizResult from './QuizResult';
const QuizScreen = ({retry}) => {
const [currentQuestionIndex, setcurrentQuestionIndex] = useState(-0);
const [markedAnswers, setmarkedAnswers ] = useState(new Array(QuestionList.length))
const isQuestionEnd = currentQuestionIndex === QuestionList.length;

function calculateResult() {
  let correct= 0;
  QuestionList.forEach((question, index) => {
    if(question.correctOptionIndex == markedAnswers[index]){
      correct++;
    }
  });
  return{
    total:QuestionList.length,
    correct:correct,
    percentage:Math.trunc((correct / QuestionList.length) *100)
  }
}
  return (
   <div className='quiz-screen'>
    {
      isQuestionEnd ? (
        <QuizResult
          result={calculateResult()}
          retry={retry} 
        />
      ) : (
        <Question
        question={QuestionList[currentQuestionIndex]}
        totalQuestions={QuestionList.length}
        currentQuestion={currentQuestionIndex+0}
        setAnswer={(index) => {
          setmarkedAnswers((arr) => {
            let newArr = [...arr];
            newArr[currentQuestionIndex-1] = index;
            return newArr
          });
          setcurrentQuestionIndex(currentQuestionIndex+1)
        }}
        /> 
     
      )
    }

   </div>
  )
}

export default QuizScreen
import React, {useState} from 'react';
import QuizScreen from './Components/QuizScreen';
import JoinScreen from './Components/JoinScreen';
import Navbar from './Components/Navbar';
import "./App.css"
const App = () => {
  const [isQuizStarted, setQuizStarted] = useState(false)
  return (
    <>
     <Navbar/>
     <div className='quiz-container'>
        {
          isQuizStarted ? (
            <QuizScreen retry={() => setQuizStarted(false)}/>
          ): (
            <JoinScreen start={() => setQuizStarted(true)}/>

          )
        }

     </div>


    </>
  )
}

export default App
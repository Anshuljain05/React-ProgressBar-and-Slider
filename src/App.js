import React from 'react';
import { useState } from 'react';
import './App.css';
import DiscreteSlider from './DiscreteSlider';
import ProgressBar from './ProgressBar';



const questions = [
  {
    index: 0,
    label: "I have ambitious aims of making a difference.",
    answer: 0
  },
  {
    index: 1,
    label: "My leadership journey has progressed as I anticipated.",
    answer: 0
  },
  {
    index: 2,
    label: "I have spent fewer than 4 years in full time service or ministry.",
    answer: 0
  },
  {
    index: 3,
    label: "With hard work and determination, I have been able to persevere through the ministry challenges that have come my way.",
    answer: 0
  },
  {
    index: 4,
    label: "My plans are likely to succeed.",
    answer: 0
  }
  
];

function App() {
  const [count, setCount]= useState(0);

  function question (count) {
    const question = questions.find(question => question.index === count);
    return question.label;
  }

  function onChangeApp(value, newcount) {
    const question = questions.find(question => question.index === count);
    question.answer = value;
    if(count < 4) {
      setCount(count+newcount);
    }
  }
  return (
    <div className="App">
      <div className='header'>
        <div className='title'>
          ARE YOU DISILLUSIONED?
        </div>
      </div>
      <div className='main'>
        <div className='content'>
          <div className='progress-bars'>
            <div className='progress-bar'>
              <ProgressBar count={count} />
              <p>
                IDEALISTIC
              </p>
            </div>
            <div className='progress-bar'>
              <ProgressBar count={0} />
              <p>
                DISILLUSIONED
              </p>
            </div>
            <div className='progress-bar'>
              <ProgressBar count={0} />
              <p>
                CYNICAL
              </p>
            </div>
            <div className='progress-bar'>
              <ProgressBar count={0} />
              <p>
                HOPEFUL
              </p>
            </div>
          </div>
          <div>
            {count+1}/20
          </div>
          <div className='question'>
            {question(count)}
          </div>
          <div className='answer-slider'>
            <div className='slider'>
              <DiscreteSlider onChange={onChangeApp}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

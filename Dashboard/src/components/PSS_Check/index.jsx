import React, { useState } from 'react';
import "./PSS.css";

const PSS_Check = () => {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const questions = [
    {
      id: 1,
      text: "In the last month, how often have you been upset because of something that happened unexpectedly?",
      type: "normal"
    },
    {
      id: 2,
      text: "In the last month, how often have you felt unable to control the important things in your life?",
      type: "normal"
    },
    {
      id: 3,
      text: "In the last month, how often have you felt nervous and stressed?",
      type: "normal"
    },
    {
      id: 4,
      text: "In the last month, how often have you felt confident about your ability to handle personal problems?",
      type: "reverse"
    },
    {
      id: 5,
      text: "In the last month, how often have you felt that things were going your way?",
      type: "reverse"
    },
    {
      id: 6,
      text: "In the last month, how often have you found that you could not cope with all the things you had to do?",
      type: "normal"
    },
    {
      id: 7,
      text: "In the last month, how often have you been able to control irritations in your life?",
      type: "reverse"
    },
    {
      id: 8,
      text: "In the last month, how often have you felt that you were on top of things?",
      type: "reverse"
    },
    {
      id: 9,
      text: "In the last month, how often have you been angered because of things outside of your control?",
      type: "normal"
    },
    {
      id: 10,
      text: "In the last month, how often have you felt difficulties were piling up too high to overcome?",
      type: "normal"
    }
  ];

  const options = ["Never", "Almost Never", "Sometimes", "Fairly Often", "Very Often"];

  const handleAnswer = (questionId, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const calculatePSSScore = () => {
    let total = 0;
    Object.entries(answers).forEach(([questionId, answer]) => {
      const question = questions.find(q => q.id === parseInt(questionId));
      const answerIndex = options.indexOf(answer);
      
      if (question.type === "normal") {
        total += answerIndex;
      } else {
        total += 4 - answerIndex;
      }
    });
    return total;
  };

  const getStressLevel = (score) => {
    if (score <= 13) return "Low";
    if (score <= 26) return "Moderate";
    return "High";
  };

  return (
    <div className='pss'>
      <h1>PSS-10 Stress Assessment</h1>
      <table>
        <thead>
          <tr>
            <th>Question</th>
            {options.map((option) => (
              <th key={option}>{option}</th>
            ))}
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((question) => (
            <tr key={question.id}>
              <td className="question__text">{question.text}</td>
              {options.map((option) => (
                <td key={option} className="answer__cell">
                  <div
                    className={`option__dot ${answers[question.id] === option ? 'selected' : ''}`}
                    onClick={() => handleAnswer(question.id, option)}
                  />
                </td>
              ))}
              <td className="status">
                <div className={`status__indicator ${answers[question.id] ? 'answered' : 'pending'}`}>
                  {answers[question.id] ? 'Answered' : 'Pending'}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {Object.keys(answers).length === questions.length && (
        <div className="score__container">
          <div className="score__display">
            <span>Stress Level: </span>
            <div 
              className={`score__level ${getStressLevel(calculatePSSScore()).toLowerCase()}`}
            >
              {getStressLevel(calculatePSSScore())}
            </div>
            <span className="score__value">Score: {calculatePSSScore()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default PSS_Check;
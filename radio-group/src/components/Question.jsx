import React from 'react';
import styled from 'styled-components';

export default function Question(title, questionList) {
  return (
    <QuestionWrap>
      <div className='questionTitle'>{title}</div>
      <div>
        {questionList.map((question, index) => (
          <RadioWrap key={index}>
            <input type='radio' />
            <div>{question}</div>
          </RadioWrap>
        ))}
      </div>
    </QuestionWrap>
  );
}

const QuestionWrap = styled.div``;

const RadioWrap = styled.div``;

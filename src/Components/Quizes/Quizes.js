import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import Quiz from '../Quiz/Quiz';

const Quizes = () => {
    const [questions, setQuestions] = useState([]);
    const quiz = useLoaderData();
    useEffect(() => {
        setQuestions(quiz.data.questions);
    }, [])
    const handleAns = (correctAns) => {
        return toast(`Correct Ans: ${correctAns}`);
    }
    return (
        <div>
            {
                questions?.map(_question => <Quiz key={_question.id} question_={_question.question} option={_question.options} handleAns={handleAns} correctAns={_question.correctAnswer} id={_question.id}></Quiz>)
            }
        </div>
    );
};

export default Quizes;
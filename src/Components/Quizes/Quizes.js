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
    console.log(quiz)
    const handleAns = (correctAns) => {
        console.log(correctAns)
        return toast(correctAns)
        
    }
    return (
        <div>
            {
                questions?.map(_question => <Quiz key={_question.id} question_={_question.question} option={_question.options} handleAns={handleAns} correctAns={_question.correctAns}></Quiz>)
            }
        </div>
    );
};

export default Quizes;
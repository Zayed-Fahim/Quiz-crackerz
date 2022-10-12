import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Quizes = () => {
    const [questions, setQuestions] = useState([]);
    const quiz = useLoaderData();
    useEffect(() => {
        setQuestions(quiz.data.questions);
    }, [])
    return (
        <div>
            {
                questions?.map(_question => <Quiz key={_question.id} question_={_question.question} option={_question.options}></Quiz>)
            }
        </div>
    );
};

export default Quizes;
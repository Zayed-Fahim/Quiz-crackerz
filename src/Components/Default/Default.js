import { useEffect, useState } from "react";
import Topics from "../Topics/Topics";
import './Default.css'
const Default = () => {
    const [quizTopics, setQuizTopics] = useState([])
    useEffect(() => {
        fetch("https://openapi.programming-hero.com/api/quiz")
            .then(res => res.json())
            .then(data =>setQuizTopics(data.data))
    }, [])
    return (
        <div>
            <div className="flex gap-[30px] justify-center pt-[200px]">
                {
                    quizTopics?.map(quizTopic => <Topics
                    quizTopic={quizTopic}
                    key={quizTopic.id}
                    ></Topics>)
                }
            </div>
        </div>
    );
};

export default Default;
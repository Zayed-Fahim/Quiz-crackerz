import { useEffect, useState } from "react";
import Topics from "../Topics/Topics";

const Default = () => {
    const [quizTopics, setQuizTopics] = useState([])
    useEffect(() => {
        fetch("https://openapi.programming-hero.com/api/quiz")
            .then(res => res.json())
            .then(data =>setQuizTopics(data.data))
    },[])
    return (
        <div className="grid grid-cols-4 m-[230px]">
            {
                quizTopics?.map(quizTopic => <Topics
                    quizTopic={quizTopic}
                    key={quizTopic.id}
                ></Topics>)
            }
        </div>
    );
};

export default Default;
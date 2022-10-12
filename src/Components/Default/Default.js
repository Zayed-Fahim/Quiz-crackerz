import { useEffect, useState } from "react";
import Topics from "../Topics/Topics";
import './Default.css'
const Default = () => {
    const [quizTopics, setQuizTopics] = useState([]);
    useEffect(() => {
        fetch("https://openapi.programming-hero.com/api/quiz")
            .then(res => res.json())
            .then(data => {
                console.log(data.data)
                setQuizTopics(data.data);
            })
    },[])
    console.log(quizTopics)
    return (
        <div>
            <div className="flex gap-[30px] justify-center pt-[200px]">
                {
                    quizTopics?.map(quizTopic => <Topics
                    quizTopic={quizTopic}
                    key={quizTopic.id}
                    ></Topics>
                    )
                }
            </div>
        </div>
    );
};

export default Default;
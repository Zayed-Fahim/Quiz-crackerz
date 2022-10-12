import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import './Topics.css'
import { useNavigate } from 'react-router-dom';
const Topics = ({ quizTopic }) => {
    const { id, logo, name } = quizTopic;
    const navigate = useNavigate();
    const handleQuizButton = () => {
        navigate(`/quiz/${id}`)
    };
    return (
        <div className=' bg-white p-4 rounded-xl every-topics'>
            <img className='bg-violet-100 rounded-xl' src={logo} alt="" />
            <div className='flex justify-between mt-3'>
                <p className='text-violet-500 font-bold text-[20px] mt-[5px]'>{name}</p>
                <div className='bg-violet-500 text-white w-[180px] pl-[13px] py-[5px] rounded-xl'>
                    <button className='flex gap-2 items-center justify-center' onClick={handleQuizButton}>
                        <p className='font-bold text-[20px]'>Start Practice</p>
                        <ArrowRightIcon className="h-6 w-6"/>
                    </button>
                </div>
            </div>
        </div>
        
    );
        
};

export default Topics;
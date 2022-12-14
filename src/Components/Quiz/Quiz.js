import { EyeIcon } from '@heroicons/react/24/solid';
import React from 'react';
import './Quiz.css'
import '../Button'
import { handleToast } from '../Button';
const Quiz = ({ question_, option, handleAns, correctAns, id }) => {
    return (
        <div className='container mx-auto mt-[20px] border-2 bg-white p-5 rounded-lg'>
            <div className='flex justify-between'>
                <p className='text-3xl font-semibold text-violet-600 mr-[100px]' dangerouslySetInnerHTML={{ __html: question_ }}></p>
                <button onClick={()=>handleAns(correctAns)}><EyeIcon className='h-6 w-6'/></button>
            </div>
            <div>
                <p className='grid grid-cols-2 w-[900px] gap-4 m-6'>{option.map(option_ =>
                        <button onClick={handleToast} className='w-[400px] min-h-min p-4 bg-violet-600 text-2xl text-white rounded-lg btn-option' id={id}>{option_}</button>
                    )}
                </p>
            </div>
        </div>
    );
};

export default Quiz;
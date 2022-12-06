import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
export const handleToast = () => {
    const buttons = document.querySelectorAll('.btn-option');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const btnText = button.textContent.toLowerCase();
            console.log(btnText)
            } )
        })
}
const Button = () => {
    const [id, setId] = useState([]);
    const button = useLoaderData();
    useEffect(() => {
        setId(button.data.id)
    }, [])
    console.log(button)
        return (
            <div>
                
            </div>
        );
    };
    
export default Button;



import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div className='container mx-auto p-6'> 
            <div>
                <p className='text-3xl font-bold '>1.What is the purpose of React Router?</p>
                <p className='text-2xl mt-[20px]'>React Router is an API for React applications. Most current code is written with React Router 3, although version 4 has been released. React Router uses dynamic routing.When we say dynamic routing, we mean routing that takes place as your app is rendering, not in a configuration or convention outside of a running app. That means almost everything is a component in React Router. — React TrainingReact Router, and dynamic, client-side routing, allows us to build a single-page web application with navigation without the page refreshing as the user navigates. React Router uses component structure to call components, which display the appropriate information.</p>
            </div>
            <div className='mt-[76px]'>
                <p className='text-2xl font-bold'>2.How does Context Api work?</p>
                <p className='text-2xl mt-[20px]'>React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>
            </div>
            <div className='mt-[76px]'>
                <p className='text-3xl font-bold'>3.Describe about useRef hook of React js.</p>
                <p className='text-2xl mt-[20px]'>The useRef hook is the new addition in React 16.8. Before proceeding to this article there is a prerequisite to know about the ref in react.The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. <br /> <br />
                <span className='font-bold text-xl'>Syntax: const refContainer = useRef(initialValue);</span> <br /> <br /> The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialized to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component.   
                </p>
            </div>
        </div>
    );
};

export default Blog;
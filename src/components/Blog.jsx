import React from 'react';

const Blog = () => {
    return (
        <div className='max-w-7xl mx-auto mt-16'>

            <div className='mb-4'>
                <h2 className='text-2xl font-semibold text-slate-950'>
                    1. Tell us the differences between uncontrolled and controlled components.
                </h2>
                <p className='text-gray-700'>
                    <b className='text-gray-900'>Ans:</b>
                    They differ in the way they access the form data from the HTML document. In an uncontrolled component, the DOM handles the form data by itself in the component. Whereas in a controlled component, the state is used to handle the form data within the component.
                </p>
            </div>
            <div className='mb-4'>
                <h2 className='text-2xl font-semibold text-slate-950'>
                    2. How to validate React props using PropTypes?
                </h2>
                <p className='text-gray-700'>
                    <b className='text-gray-900'>Ans:</b>
                    propTypes is used for props validation. If some of the props aren't using the correct type that we assigned, we will get a console warning. After we specify validation patterns, we will set App. defaultProps.
                </p>
            </div>
            <div className='mb-4'>
                <h2 className='text-2xl font-semibold text-slate-950'>
                    3. Tell us the difference between nodejs and express js.
                </h2>
                <p className='text-gray-700'>
                    <b className='text-gray-900'>Ans:</b>
                    Node.js is a run-time environment created to run JavaScript on the server side.

                    Express.js is a framework for Node.js, so in order to use it, you will use Node.js anyway. Express.js will help you organize your application better. It provides many features which will speed up the development for example mechanism for middlewares, more efficient REST support or robust routing.
                </p>
            </div>
            <div className='mb-4'>
                <h2 className='text-2xl font-semibold text-slate-950'>
                    4. What is a custom hook, and why will you create a custom hook?
                </h2>
                <p className='text-gray-700'>
                    <b className='text-gray-900'>Ans:</b>
                    Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications. Usually, if there is a requirement to add a feature, one can install a third-party library and solve the problem.
                </p>
            </div>
        </div>
    );
};

export default Blog;
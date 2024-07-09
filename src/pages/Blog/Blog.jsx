import React from 'react';

const Blog = () => {
    return (
        <div>
        
            <h1 className='text-4xl text-center font-bold my-8'>Welcome to our Blog page</h1>

        
               <section className='border-4 p-4 bg-base-200 mb-5'>
                    <h2 className='text-xl font-bold mb-2'>a. When should you use context API?</h2>
                    <p>The Context API in React should be used when you need to share state or data across multiple components, especially when those components are deeply nested. It provides a way to pass data through the component tree without having to pass props down manually at every level. This is particularly useful for themes, user authentication, language settings, and other global data.</p>
                </section>

                <section className='border-4 p-4 bg-base-200 mb-5'>
                    <h2 className='text-xl font-bold mb-2'>b. What is a custom hook?</h2>
                    <p> A custom hook is a JavaScript function whose name starts with use and that may call other hooks. Custom hooks allow you to extract component logic into reusable functions. This makes your code cleaner and more readable. For example, you can create a custom hook for fetching data, handling form logic, or any other reusable logic.</p>
                   
                </section>

                <section className='border-4 p-4 bg-base-200 mb-5'>
                    <h2 className='text-xl font-bold mb-2'>c. What is useRef?</h2>
                    <p>The <code>useRef</code> hook in React returns a mutable ref object whose <code>.current</code> property is initialized to the passed argument. The ref object can persist a value across renders without causing a re-render. It's commonly used to access DOM elements directly or to keep a reference to a mutable value that doesn’t trigger a re-render when changed.</p>
                </section>

                <section className='border-4 p-4 bg-base-200 mb-8'>
                    <h2 className='text-xl font-bold mb-2'>d. What is useMemo?
                    </h2>
                    <p>The useMemo hook in React is used to memoize a computed value. It only recomputes the memoized value when one of its dependencies has changed. This optimization helps to avoid expensive calculations on every render, enhancing the performance of your application. Its useful for improving performance in situations where a functions return value needs to be recalculated based on specific dependencies.</p>
                </section>
        
        </div>
    );
};

export default Blog;
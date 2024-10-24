import React from 'react'
import { Link } from 'react-router-dom';

const FindEvents = () => {
    return (
        <div className='flex flex-col lg:flex-row items-center justify-center gap-4'>
            <div className='lg:w-[50%] flex flex-col items-left justify-center p-6 gap-4'>
                <h1 className='text-[3rem] text-1 w-full'>
                    Discover a Event Near You
                </h1>
                <h3 className='text-[1rem] text-2 w-full'>With events near you you'll get a chance to collaborate and contribute , meet people of your vibe and work on things you love.</h3>
                <button className='custom-button max-w-[10rem]'>
                    <Link to={'/events'}>Find event</Link>
                </button>
            </div>
            <div className='w-[100%] lg:w-[50%] h-[50vh] bg-center bg-cover' style={{ backgroundImage: "url('https://images.unsplash.com/photo-1515168833906-d2a3b82b302a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
            </div>
        </div>
    )
}

export default FindEvents;
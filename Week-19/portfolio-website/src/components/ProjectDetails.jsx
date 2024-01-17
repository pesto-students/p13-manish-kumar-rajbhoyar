import React from 'react'
import {useParams} from 'react-router-dom';

function ProjectDetails() {
    const {projectId} = useParams();
    switch(projectId) {
    case "Todo App":
        return (
            <div className='projectDetails'>
                <img src=
                {require('../images/todo.jpg')}
                alt='todo' 
                width={500}
                height={400}
                />
                <h1 className="text-indigo-600 m-12">Project {projectId}</h1>
                <p>The To-Do List project can simply be developed using HTML, CSS, and JavaScript. This To-Do List web application is an application for keeping a record of tasks that need to be completed and is typically arranged in order of importance. It is one of the easiest solutions for task management and delivers a comfortable and smart way of handling tasks an individual wishes to accomplish.</p>
            </div>
        )
    case "Quiz App":
        return (
            <div className='projectDetails'>
                <img src=
                {require('../images/quiz.jpg')}
                alt='quiz' 
                width={500}
                height={400}
                />
                <h1 className="text-indigo-600 m-12">Project {projectId}</h1>
                <p>This project aims to create a web application that allows users to take quizzes and receive feedback on their performance. By adding certain gifs representing winning and losing the game, you can optionally award the user a score after the game and then declare them a winner if their score exceeds the threshold. An exciting way to practice web development, isn't it?</p>
            </div>
        )
    case "URL Shortener App":
        return (
            <div className='projectDetails'>
                <img src=
                {require('../images/urlShortener.jpg')}
                alt='urlShortener' 
                width={500}
                height={400}
                />
                <h1 className="text-indigo-600 m-12">Project {projectId}</h1>
                <p>The Link Shortener is a web application that allows users to shorten long URLs to a shorter, more manageable length. This application then uses the shortened URL to redirect to the original long URL, view the number of clicks and the date/time of the last click for each shortened URL and view the list of URLs shortened till date.</p>
            </div>
        )
    default:
        return (
            <div>
                <p>default</p>
            </div>
        )
    }
}

export default ProjectDetails
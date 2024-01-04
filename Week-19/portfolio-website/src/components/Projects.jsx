import React from 'react';
import { Card } from "react-bootstrap";
import { Link } from 'react-router-dom';

function Projects() {

    return (
        <div>
            <h2>Projects</h2>
        <hr />
        <div className='projects'>
        <Link to={'Todo App'}>
        <Card>
            <Card.Img
                src=
                {require('../images/todo.jpg')}
                width={500}
                height={300}
            />
            <Card.Body>
                <Card.Title>Todo App</Card.Title>
                <Card.Text>
                The feature of this application is that the user can create a list of everyday work and save them as records.
                </Card.Text>
            </Card.Body>
        </Card>
        </Link>
        </div>
        <hr />

        <div className='projects'>
        <Link to={'Quiz App'}>
        <Card>
            <Card.Img
                src=
                {require('../images/quiz.jpg')}
                width={500}
                height={200}
            />
            <Card.Body>
                <Card.Title>Quiz App</Card.Title>
                <Card.Text>
                This project aims to create a web application that allows users to take quizzes and receive feedback on their performance.
                </Card.Text>
            </Card.Body>
        </Card>
        </Link>
        </div>

        <hr />
        <div className='projects'>
        <Link to={'URL Shortener App'}>
        <Card>
            <Card.Img
                src=
                {require('../images/urlShortener.jpg')}
                width={500}
                height={200}
            />
            <Card.Body>
                <Card.Title>URL Shortener App</Card.Title>
                <Card.Text>
                The URL Shortener is a web application that allows users to shorten long URLs to a shorter, more manageable length.
                </Card.Text>
            </Card.Body>
        </Card>
        </Link>
        </div>
        </div>
    );
}

export default Projects;
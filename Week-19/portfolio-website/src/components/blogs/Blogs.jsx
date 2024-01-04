import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Card } from "react-bootstrap";
import { Link } from 'react-router-dom';

function Blogs() {

    const api_url = "http://localhost:3030/blogs";

      const [blogs, setBlogs] = useState([]);
      const [loading, setLoading] = useState(true);

      useEffect(() => {
        const fetchData = async () =>{
          setLoading(true);
          try {
            const {data: response} = await axios.get(api_url);
            setBlogs(response);
          } catch (error) {
            console.error(error.message);
          }
          setLoading(false);
        }
    
        fetchData();
      }, []);

    return (
        loading 
        ?   <div className='loader'>
                <p>Loading...</p>  
            </div>
        :   <div>
            <h2>Blogs</h2>
        <hr />
        <div className='blogs'>
        <Link to={blogs[0].title} state={{ blog: blogs[0] }} >
        <Card>
            <Card.Img
                src=
                {blogs[0].imageUrl}
                width={500}
                height={200}
                alt={blogs[0].title}
            />
            <Card.Body>
                <Card.Title>{blogs[0].title}</Card.Title>
                <Card.Text>
                {blogs[0].preview}
                </Card.Text>
            </Card.Body>
            <Card.Footer>Updated on {blogs[0].updatedOn}</Card.Footer>
        </Card>
        </Link>
        </div>
        <hr />

        <div className='blogs'>
        <Link to={blogs[1].title} state={{ blog: blogs[1] }}>
        <Card>
            <Card.Img
                src=
                {blogs[1].imageUrl}
                width={500}
                height={200}
                alt={blogs[1].title}
            />
            <Card.Body>
                <Card.Title>{blogs[1].title}</Card.Title>
                <Card.Text>
                {blogs[1].preview}
                </Card.Text>
            </Card.Body>
            <Card.Footer>Updated on {blogs[1].updatedOn}</Card.Footer>
        </Card>
        </Link>
        </div>
        <hr />

        <div className='blogs'>
        <Link to={blogs[2].title} state={{ blog: blogs[2] }}>
        <Card>
            <Card.Img
                src=
                {blogs[2].imageUrl}
                width={500}
                height={200}
                alt={blogs[2].title}
            />
            <Card.Body>
                <Card.Title>{blogs[2].title}</Card.Title>
                <Card.Text>
                {blogs[2].preview}
                </Card.Text>
            </Card.Body>
            <Card.Footer>Updated on {blogs[2].updatedOn}</Card.Footer>
        </Card>
        </Link>
        </div>
        </div>
    );
}

export default Blogs;
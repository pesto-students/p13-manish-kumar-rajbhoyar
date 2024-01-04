import React from 'react'
import { useLocation} from 'react-router-dom';

function BlogDetails() {
    let { state } = useLocation();
    console.log(state.blog.body)
        return (
            <div className='blogDetails'>
                <img src=
                {state.blog.imageUrl}
                alt={state.blog.title} 
                width={1000} 
                height={400}/>
                <h1 className="text-indigo-600 m-12">{state.blog.title}</h1>
                {state.blog.body}
            </div>
        )
}

export default BlogDetails
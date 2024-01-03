import React, { useState, useEffect } from 'react'
import BookDetail from './BookDetail';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function BookDataLoader(props) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setData(props);
            setIsLoading(false);
        },1000)
    }, [props]);

    let handleDelete = book => {
        props.onDelete(book)
    }
  
    return (
        isLoading 
        ?   <div className='skeletonLoader'>
                <Skeleton />
            </div>   
        :   <div>
                <BookDetail title={data.title} author={data.author} year={data.year} description={data.description} onDelete={handleDelete.bind(this, data)}/>
            </div>
    );
}

export default BookDataLoader
import { useMemo } from 'react';

function useBookFilter(books, searchName) {

    const filteredBooks = useMemo(() => books.filter((book) => book.title.toLowerCase().includes(searchName.toLowerCase())),[books, searchName])
    
    return filteredBooks;
}

export default useBookFilter
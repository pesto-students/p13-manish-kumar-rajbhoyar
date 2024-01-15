import { useMemo } from 'react';
import _ from 'lodash';

function useBookSorter(books, criteria) {
    const sortedBooks = useMemo(() => _.sortBy(books, criteria),[books, criteria])
    
    return sortedBooks;
}

export default useBookSorter
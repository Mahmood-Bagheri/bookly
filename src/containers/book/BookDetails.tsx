import React from 'react';
import { BookDetailsBox } from 'components/Book';
import { useParams } from 'react-router-dom';

export const BookDetailsContainer = () => {
    const { bookId } = useParams<Book.Id>();

    return (
        // <BookDetailsBox
        // // releaseYear={book}
        //     id={bookId}
        //     title="کتاب جز از کل"
        //     author="استیو تولتز"
        // />
        <div></div>
    );
};

import React from 'react';

const Viewlist = ({ books, editBook, deleteBook }) => {

    return books.map(book => (

        <tr key={book.application_id}>
            <td>{book.application_id}</td>
            <td>{book.application_name}</td>
            <td>{book.authentication_id}</td>
            <td>{book.investment_id}</td>
            <td><a target='_blank' href={`https://fclendingpartner.faircent.com?applicationId=${book.application_id}&applicationName=${book.application_name}&applicationAuthId=${book.authentication_id}&investId=${book.investment_id}`}>GO</a></td>
            <td className='edit-btn' onClick={() => editBook(book.application_id)}>
                <i className="bi bi-pencil-square"></i>
            </td>
            <td className='delete-btn' onClick={() => deleteBook(book.application_id)}>
                <i className="bi bi-trash"></i>

            </td>
        </tr>

    ))
};

export default Viewlist;
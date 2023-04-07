import '../styles/Booklistpage.css'
import { useEffect, useState } from 'react';
import {useNavigate } from 'react-router-dom'


const BookList = () => {

    let navigate=useNavigate();


    let [books, setBooks] = useState([])
    useEffect(() => {
        let fetchdata = async () => {
            let response = await fetch('http://localhost:4000/books')
            let data = await response.json()
            setBooks(data)
        }
        fetchdata()
    })

    let deletebook = async (id) => {
       await fetch(`http://localhost:4000/books/${id}`, {
            method: 'DELETE'
        })
    }
    return (
        <div className="booklist">
            {/* <h1>Booklistpage</h1> */}
            {books.map(data => (

                <div to={`/admin-portal/book-list/${data.id}`} className="bookdata">
                    <img src={data.imageLink} alt="" />

                    <div className='book_content'>
                        <div className='content'>
                            <h3>{data.title}</h3><br />
                            <h4 style={{fontStyle:'italic'}}>written by: <br /> {data.author}</h4> <br />
                            <p className='year'>published :{data.year}</p>
                            <p> pages :{data.pages}</p>
                        </div>
                        <div className='read_delete'>
                        <button className='readmore'  onClick={() =>{navigate(`/admin-portal/book-list/${data.id}`)}}>Read Book</button>
                        <button className='delete'  onClick={() => deletebook(data.id)}>Delete</button>
                        </div>
                    </div>
                </div>

            ))}
        </div>
    );
}
export default BookList;
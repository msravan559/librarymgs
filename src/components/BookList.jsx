import '../styles/Booklistpage.css'
import { useEffect,useState } from 'react';
import {Link} from 'react-router-dom'

const BookList = () => {
    let [books,setBooks]=useState([])
    useEffect(()=>{
        let fetchdata=async()=>{
            let response=await fetch('http://localhost:4000/books')
            let data=await response.json()
            setBooks(data)
        }
        fetchdata()
    })

    return ( 
        <div className="booklist">
            <h1>Booklistpage</h1>
            {books.map(data =>(
                <div className="bookdata">
                    <h1>{data.title}</h1>
                    <Link to={`/admin-portal/book-list/${data.id}`}>Read Book</Link>
                </div>
            ))}
        </div>
    );
}
export default BookList;
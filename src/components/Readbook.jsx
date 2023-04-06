import { useEffect } from "react";
import {useParams} from 'react-router-dom'
const Readbook = () => {
    let params=useParams()

    let book=0;
    useEffect(()=>{
        let fetchdata=async()=>
        {
            let response=fetch(`http://localhost:4000/books/${params.id}`)
            let data=await response.json()
            book=data;
        }
        fetchdata()
    })
    return ( 
        <div className="readbook">
            <h1>Read Book kjNVDDDDDDDDDDDDDDDDDDDDDDDDDDD </h1>
            <p>{book.id}</p>
        </div>
    );
}
export default Readbook;
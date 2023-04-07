import { useEffect,useState } from "react";
import {useParams} from 'react-router-dom'

const Readbook = () => {
    let params=useParams()
    let[books,setBooks]=useState("")

    useEffect(()=>{
        let fetchdata=async()=>
        {
            let response= await fetch(`http://localhost:4000/books/${params.id}`)
            let data=await response.json()
            setBooks(data)
        }
        fetchdata()
    })
    return ( 
        <div className="readbook">
            {/* <h1>Read Book kjNVDDDDDDDDDDDDDDDDDDDDDDDDDDD </h1> */}
            <h1>{books.title}</h1>
            <p>{books.description}</p>
        </div>
    );
}
export default Readbook;
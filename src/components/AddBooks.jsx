import '../styles/AddBooks.css'
import { useRef } from 'react';
const  AddBooks= () => {
    let title=useRef(null)
    let author=useRef(null)
    let genre=useRef(null)
    let thumbnail=useRef(null)

    let addbooks=(e)=>{
        e.preventDefault()
        let data={
            title:title.current.value,
            author:author.current.value,
            genre:genre.current.value,
            thumbnail:thumbnail.current.value
        }

        fetch('http://localhost:4000/books',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(data)
        })
        alert('data added')

    }
    return ( 
        <div className="addbooks">
            {/* <h1>Adding Books </h1> */}
            <div className="addform">
                <div className="context">
                    <h2>Add Book</h2>
                </div>
                <form action="" onSubmit={addbooks}>
                    <h3>Book Title:</h3>
                    <input ref={title} type="text" placeholder='book title'/>
                    <h3>Author name:</h3>
                    <input ref={author} type="text" placeholder='Author name' />
                    <h3>Genre</h3>
                    <input ref={genre} type="text" placeholder='Genre' />
                    <h3>Thumbnail Url</h3>
                    <input ref={thumbnail} type="text" placeholder='Thumbnail url' />
                    <br />
                    <br />
                    <button className='addbutton'>Add</button>
                </form>
            </div>
        </div>
    );
}
export default AddBooks;
import '../styles/AddBooks.css'
const  AddBooks= () => {
    return ( 
        <div className="addbooks">
            {/* <h1>Adding Books </h1> */}
            <div className="addform">
                <div className="context">
                    <h2>Add Book</h2>
                </div>
                <form action="">
                    <h3>Book Title:</h3>
                    <input type="text" placeholder='book title'/>
                    <h3>Author name:</h3>
                    <input type="text" placeholder='Author name' />
                    <h3>Genre</h3>
                    <input type="text" placeholder='Genre' />
                    <h3>Thumbnail Url</h3>
                    <input type="text" placeholder='Thumbnail url' /><br /><br />
                    <button className='addbutton'>Add</button>
                </form>
            </div>
        </div>
    );
}
export default AddBooks;
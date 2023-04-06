import '../styles/AdminNavbar.css'
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
    return ( 
        <div className="navbar">
            
            <div className="imagepart">
                <div className="image">
                    <img src="https://imgv3.fotor.com/images/side/Overlay-multiple-images-using-Fotor.jpg" alt="" />
                </div>
                <div className="email">
                    <h4 style={{color:'white'}}>msravan559@gmail.com</h4>
                </div>
            </div>
            <div className="links">
            <Link className='link1' to=''>home</Link>
            <Link className='link1' to='add-book'>Add Books</Link>
            <Link className='link1' to='add-users'>Add Users</Link>
            <Link className='link1' to='book-list'>Booklist</Link>
            <Link className='link1' to='user-list'>Userlist</Link>
            <Link className='link1' to='/'>SignOut</Link>
            </div>

        </div>
    );
}
export default AdminNavbar;
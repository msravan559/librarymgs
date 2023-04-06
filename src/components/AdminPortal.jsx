import { Routes,Route } from "react-router-dom";
import AdminHome from "./AdminHome";
import BookList from "./BookList";
import AdminNavbar from "./AdminNavbar";
import AddBooks from "./AddBooks";
import AddUsers from "./AddUsers";
import UserList from "./Userlist";
import Readbook from "./Readbook";

const AdminPortal = () => {
    return ( 
        <div className="adminportal">
            <AdminNavbar/>
            <Routes>
                <Route path=''  element={<AdminHome/>}/>
                <Route path="/book-list"  element={<BookList/>}/>
                <Route path="/add-book"  element={<AddBooks/>}/>
                <Route path="/add-users"  element={<AddUsers/>}/>
                <Route path="/user-list"  element={<UserList/>}/>
                <Route path="/book-list/:id"  element={<Readbook/>}/>
            </Routes>
        </div>
    );
}
export default AdminPortal;
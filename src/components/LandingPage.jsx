import { Link } from "react-router-dom";

const LandingPage = () => {


    return ( 
        <div className="landingPage">
            
            <h1>Login as....?</h1>
            
            <div className="users">
            <Link to="/admin-login">Admin login</Link>
            <Link to="/user-login">User login</Link> 
            </div>

        </div>
    );
}
export default LandingPage;
import '../styles/LandingPage.css'
import { Link } from "react-router-dom";

const LandingPage = () => {


    return ( 
        <div className="landingPage">
            
            {/* <h1>Login as....?</h1> */}
            
            <div className="users">
            <div className="userleftside">
            <div className="userleftsideimg">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgu2FhLdq-pZT2malL_NkRibbXgtDFfN3g4Ey0JgcOSah6sYQae_Um4ripHAfm_b45B9KBO546aNM&usqp=CAU&ec=48665698" alt="" />
            </div>
            <Link className='link' to="/admin-login">Admin login</Link>
            </div>
            <div className="userrightside">
            <div className="userrightsideimg">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgu2FhLdq-pZT2malL_NkRibbXgtDFfN3g4Ey0JgcOSah6sYQae_Um4ripHAfm_b45B9KBO546aNM&usqp=CAU&ec=48665698" alt="" />
            </div>
            <Link className='link' to="/user-login">User login</Link>
            </div> 
            </div>

        </div>
    );
}
export default LandingPage;
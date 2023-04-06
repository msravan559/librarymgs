import { useNavigate } from "react-router-dom";
import "../styles/AdminLogin.css"
import { useRef } from "react";
const AdminLogin = () => {
    
    let Navigate=useNavigate()
    let email=useRef(null)
    let password=useRef(null)


    //validate admin credentials
    let adminLogin=()=>{
      if(email.current.value==="admin@gmail.com" && password.current.value==='123456')
      {
          Navigate('/admin-portal')
      }
      else
      {
          alert('Invalid Credentials')
      }
    }
    

  

    return (
        <div className="AdminLogin">
            <div className="loginpage1">
              <div className="leftside1">
                <img src="https://t4.ftcdn.net/jpg/04/60/71/01/360_F_460710131_YkD6NsivdyYsHupNvO3Y8MPEwxTAhORh.jpg" alt="" />
              </div>
              <div className="rightside1">
                  <div className="content11">
                    <h1>Admin Login Page</h1>
                    <hr />
                  </div>
                  <div className="form1">
                    <form action="" onSubmit={adminLogin}>
                    <div className="side">
                    <h3>Name:</h3>
                    <h3>Password:</h3>
                    </div>
                    <div className="side">
                    <input ref={email} type="email" placeholder="Enter Email address"/>
                    <input ref={password} type="password" placeholder="Enter your password"/>
                    </div>
                    <button className="adminloginbutton">login</button>
                    </form>
                  </div>
              </div>
            </div>
        </div>
      );
}
export default AdminLogin;
import "../styles/AdminLogin.css"
const AdminLogin = () => {
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
                    <form action="">
                    <div className="side">
                    <h3>Name:</h3>
                    <h3>Password:</h3>
                    </div>
                    <div className="side">
                    <input type="text" placeholder="Enter UserName"/>
                   <input type="text" placeholder="Enter password"/>
                    </div>
                    <button>Submit</button>
                    </form>
                  </div>
              </div>
            </div>
        </div>
      );
}
export default AdminLogin;
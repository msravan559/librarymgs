import '../styles/AddUsers.css'
import { useRef } from 'react';
const AddUsers = () => {

    let name=useRef(null)
    let email=useRef(null)
    let contact=useRef(null)
    
    let adduser=(e)=>
    {
        e.preventDefault()
        let data={
            name:name.current.value,
            email:email.current.value,
            contact:contact.current.value
        }
    
    fetch('http://localhost:4000/users1',{
        method:'POST',
        headers:{'content-type':'application/json'},
        body:JSON.stringify(data)
    })
    
    name.current.value=null
    email.current.value=null
    contact.current.value=null
    alert('data added')
    
}
    return ( 
        <div className="addusers">
            {/* <h1>Adding Users</h1> */}
            <div className="addform">
                <div className="context">
                    <h2>Add Users</h2>
                </div>
                <form action="" onSubmit={adduser}>
                    <h3>Name:</h3>
                    <input ref={name} type="text" placeholder='Name'/>
                    <h3>Email:</h3>
                    <input ref={email} type="email" placeholder='Email' />
                    <h3>Contact</h3>
                    <input ref={contact} type="text" placeholder='Contact' /><br /><br />
                    <button className='addbutton'>Add</button>
                </form>
            </div>
        </div>
    );
}
export default AddUsers;
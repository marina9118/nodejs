import React from 'react';
import { Link,useNavigate } from 'react-router-dom';

const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate(); 
    const logout = () =>{
        localStorage.clear();
        navigate('/');
    }
    return(
        <div>
            <img alt='logo' src='https://belapay.com/wp-content/uploads/2021/04/166-1665242_fakery-logo-transparent-dummy-logo-png-clipart.jpg' className='logo'/>
            {auth ?
            
            <ul className='nav-ul'>
               <li><Link to="/">Products</Link></li>
                <li><Link to="/add">Add Products</Link></li>
                <li><Link to="/update">Update Products</Link></li>
                
                <li><Link to="/profile">Profile</Link></li>
                <li><Link onClick={logout} to="/signup">Logout ({JSON.parse(auth).name})</Link></li>
            </ul>
            :
            <ul className='nav-ul'>
                 <li><Link to="/signup">Signup</Link></li>
                    <li><Link to="/login">Login</Link> </li>
            </ul>
                   
                }
        </div>
    )
}

export default Nav;
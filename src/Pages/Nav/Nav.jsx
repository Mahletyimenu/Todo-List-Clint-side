import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
    return (
        <div className='nav'>
            <Link className="todo" to='/'>
                TD DO LIST
            </Link>
            <div className="todos">
                <Link className="todo2" to='/addtask'>
                    Add New Task
                </Link >
                <Link className="todo2" to='/'>
                    See List
                </Link>

            </div>
            
        </div>
    );
}

export default Nav;

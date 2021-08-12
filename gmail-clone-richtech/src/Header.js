import React from 'react'
import "./App.css";
import "./Header.css";
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { auth } from './firebase';

function Header() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const signOut = () => {
        auth.signOut().then(() =>{
          dispatch(logout());  
        });
    };

    return (
        <div className="header">
            <div className ="header__left">
                <IconButton>
                    <MenuIcon/> 
                </IconButton>
                <img src="https://firebasestorage.googleapis.com/v0/b/clone-richtech.appspot.com/o/Rmail-transparent.png?alt=media&token=39637d68-7d60-4bf7-a5a6-885cb3fcf0c3" 
                alt=""/> 
            </div>


            <div className ="header__middle">
            <SearchIcon />
            <input placeholder="Search Rmail" type="text" />
            <ArrowDropDownIcon className="header__inputCaret" />
            </div>

            <div className ="header__right">
                <IconButton>
                    <AppsIcon />   
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <Avatar src={user?.photoUrl}/>
                <IconButton>
                <ExitToAppIcon onClick={signOut}/>
                </IconButton>
                
            </div>
        </div>
    )
}

export default Header

import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';
import { auth } from '../features/firebase';

export default function Header() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout())
    })
  }

  return (
    <div className='header'>
      <div className="header__left">
        <IconButton>
            <MenuIcon/>
        </IconButton>
        <img src="https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-3-1.png" alt="" />
      </div>
      <div className="header__middle">
        <SearchIcon/>
        <input type="text" placeholder='Search in mail' />
        <TuneIcon/>

      </div>
      <div className="header__right">
        <div className="header__right--buttons">
            <IconButton>
                <HelpOutlineIcon/>
            </IconButton>
            <IconButton>
                <SettingsIcon/>
            </IconButton>
            <IconButton>
                <AppsIcon/>
            </IconButton>
        </div>
        <Avatar
        className='header__avatar'
        onClick={signOut}
        src={user?.photoUrl}/>
      </div>
    </div>
  )
}

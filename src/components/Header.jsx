import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';

export default function Header() {
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
        <input type="text" />
        <TuneIcon/>

      </div>
      <div className="header__right">
        <IconButton>
            <HelpOutlineIcon/>
        </IconButton>
        <IconButton>
            <SettingsIcon/>
        </IconButton>
        <IconButton>
            <AppsIcon/>
        </IconButton>
        <Avatar/>
      </div>
    </div>
  )
}

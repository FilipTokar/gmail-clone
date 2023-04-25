import { Checkbox, IconButton } from '@mui/material'
import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import EmailRow from './UI/EmailRow';

export default function EmailList() {
  return (
    <div className='email__list'>
        <div className="email-list__setting">
            <div className="email-list__setting--left">
                <Checkbox/>
                <IconButton>
                    <ArrowDropDownIcon/>
                </IconButton>
                <IconButton>
                    <RefreshIcon/>
                </IconButton>
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
            </div>
            <div className="email-list__setting--right">
                <IconButton>
                   <ChevronLeftIcon/> 
                </IconButton>
                <IconButton>
                <ChevronRightIcon/>
                </IconButton>
                
            </div>
        </div>
        <div className="email__list--rows">
            <EmailRow
            title='twitch.tv'
            subject="New games coming out."
            description='Hey gamer dsadas'
            time='10:00'/>
            <EmailRow
            title='twitch.tv'
            subject="New games coming out."
            description='Hey gamer'
            time='10:00'/>
        </div>
      
    </div>
  )
}

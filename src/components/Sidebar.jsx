import { Button } from '@mui/material'
import React from 'react'
import CreateIcon from '@mui/icons-material/Create';
import InboxIcon from '@mui/icons-material/Inbox';
import SidebarOption from './UI/SidebarOption';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import SendIcon from '@mui/icons-material/Send';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useDispatch } from 'react-redux';
import { openSendMessage } from '../features/mailSlice';



export default function Sidebar() {
  const dispatch = useDispatch()

  return (
    <div className='sidebar'>
      <Button 
      className='sidebar__new-message' 
      startIcon={<CreateIcon fontSize='large'/>}
      onClick={() => {dispatch(openSendMessage())}}
      >
        New message
      </Button>
      <SidebarOption Icon={InboxIcon} title="Inbox" number={54} selected={true}/>
      <SidebarOption Icon={StarIcon} title="Starred" number={54}/>
      <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={54}/>
      <SidebarOption Icon={LabelImportantIcon} title="Important" number={54}/>
      <SidebarOption Icon={SendIcon} title="Sent" number={54}/>
      <SidebarOption Icon={NoteAddIcon} title="Concepts" number={54}/>
      <SidebarOption Icon={ExpandMoreIcon} title="More" number={54}/>
    </div>
  )
}

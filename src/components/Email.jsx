import { IconButton } from '@mui/material'
import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArchiveIcon from '@mui/icons-material/Archive';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import DeleteIcon from '@mui/icons-material/Delete';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import DriveFileMoveIcon from '@mui/icons-material/DriveFileMove';
import LabelIcon from '@mui/icons-material/Label';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useNavigate } from 'react-router-dom';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import { useSelector } from 'react-redux';
import { selectOpenMail } from '../features/mailSlice';

export default function Email() {
  const navigate = useNavigate()
  const selectedEmail = useSelector(selectOpenMail)

  return (
    <div className='email'>
      <div className="email__tools">
        <div className="email__tools-right">
          <IconButton onClick={() => navigate("/")}>
            <ArrowBackIcon/>
          </IconButton>
          <IconButton>
            <ArchiveIcon/>
          </IconButton>
          <IconButton>
            <ReportGmailerrorredIcon/>
          </IconButton>
          <IconButton>
            <DeleteIcon/>
          </IconButton>
          <IconButton>
            <MailOutlineIcon/>
          </IconButton>
          <IconButton>
            <AccessTimeIcon/>
          </IconButton>
          <IconButton>
            <TaskAltIcon/>
          </IconButton>
          <IconButton>
            <DriveFileMoveIcon/>
          </IconButton>
          <IconButton>
            <LabelIcon/>
          </IconButton>
          <IconButton>
            <MoreVertIcon/>
          </IconButton>
        </div>
        <div className="email__tools-left">
          <IconButton>
            <ChevronLeftIcon/>
          </IconButton>
          <IconButton>
            <ChevronRightIcon/>
          </IconButton>
        </div>
      </div>
      <div className="email__body">
        <div className="email__header">
          <h2>{selectedEmail?.subject}</h2>
          <LabelImportantIcon/>
          <p>{selectedEmail?.title}</p>
          <p className='email__header-time'>{selectedEmail?.time}</p>
        </div>
        <div className="email__message">
          {selectedEmail?.description}
        </div>
      </div>
    </div>
  )
}

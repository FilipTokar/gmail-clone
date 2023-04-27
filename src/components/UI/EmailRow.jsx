import { Checkbox, IconButton } from '@mui/material'
import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectMail } from '../../features/mailSlice';

export default function EmailRow({id, title, subject, description, time}) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const openEmail = () => {
    dispatch(
      selectMail({
        id,
        title,
        subject,
        description,
        time,
      })
    )
    navigate('/mail')
  }

  return (
    <div className='email-row' onClick={openEmail}>
      <div className="email-row__options">
      <Checkbox/>
      <IconButton>
        <StarIcon/>
      </IconButton>
      <IconButton>
        <LabelImportantIcon/>
      </IconButton>
      </div>
      <h3 className="email-row__title">
        {title}
      </h3>
      <div className="email-row__message">
            <p className="email-row__message--para">
                {subject}{" - "}
            <span className="email-row__description">
                {description}
            </span>
            </p>
      </div> 
      <p className="email-row__time">
        {time}
      </p>
    </div>
  )
}

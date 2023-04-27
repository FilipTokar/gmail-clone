import { Checkbox, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import EmailRow from './UI/EmailRow';
import { db } from '../features/firebase';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';



export default function EmailList() {
    const [emails, setEmails] = useState([])
    
    
    useEffect(() => {
        // reference to the collection of emails, q = query for descending order or emails by timestamp
        const colRef = collection(db, 'emails')
        const q = query(colRef, orderBy("timestamp", "desc"))
        onSnapshot(q, (snapshot) => {
            let emailsArr = []
            snapshot.docs.forEach((doc) => {
                emailsArr.push(
                    {id: doc.id,
                    to: doc.data().to,
                    subject: doc.data().subject,
                    message: doc.data().message,
                    timestamp: doc.data().timestamp,
                    }
                    )
            })
            
            console.log(emailsArr)
            setEmails(emailsArr)
            console.log()
        })
        
    }, [])

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
            {
                emails.map(({id, to, subject, message, timestamp}) => (
                <EmailRow
                id={id}
                title={to}
                subject={subject}
                description={message}
                time={new Date(timestamp?.seconds * 1000).toUTCString()}
                />
                ))
            }
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

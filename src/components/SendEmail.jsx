import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import {useForm} from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { closeSendMessage } from '../features/mailSlice';

export default function SendEmail() {
    const {register, handleSubmit, watch, formState: {errors} } = useForm()

    const dispatch = useDispatch()

    const onSubmit = (formData) => {
        console.log(formData)
    }

  return (
    <div className='send-mail'>
        <div className="send-mail__header">
            <h3>New message</h3>
            <CloseIcon onClick={() => {dispatch(closeSendMessage())}}
            className='send-mail__close'
            />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name='to' placeholder='To' type="text" 
             {...register("to", {required: true})}
             />
            {errors.to && <p className='send-email__error'>This field is required</p>}

            <input name='subject' placeholder='Subject' type="text"
            {...register("subject", {required: true})} 
             />
            {errors.to && <p className='send-email__error'>This field is required</p>}

            <input name='message' placeholder='Message' className='send-mail__message' type="text"
            {...register("message", {required: true})} />
            {errors.to && <p className='send-email__error'>This field is required</p>}

            <div className="send-mail__options">
                <Button 
                className='send-email__btn'
                type='submit'
                >
                Send
                </Button>
            </div>
        </form>
    </div>
  )
}

import React from 'react'
import '../styles/Post.css';
import Avatar from '@mui/material/Avatar';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import InputOption from './InputOption';

function Post({ name, description, message, photoUrl }) {
  return (
    <div className='post'>
      <div className='post__header'>
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className='post__info'>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className='post__body'>
        <p>{message}</p>
      </div>

      <div className='post__buttons'>
        <InputOption Icon={ThumbUpOffAltIcon} title='Like' color='gray' />
        <InputOption Icon={ChatBubbleOutlineIcon} title='Comment' color='gray' />
        <InputOption Icon={ShareIcon} title='Share' color='gray' />
        <InputOption Icon={SendIcon} title='Send' color='gray' />
      </div>

    </div>
  )
}

export default Post

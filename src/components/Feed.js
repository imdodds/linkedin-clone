import React, { useEffect, useState } from 'react'
import '../styles/Feed.css';
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import InputOption from './InputOption';
import Post from './Post';
import { db } from '../firebase';
import firebase from 'firebase/compat/app';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import FlipMove from 'react-flip-move';


function Feed() {

  const user = useSelector(selectUser);

  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (event) => {
    event.preventDefault();

    db.collection('posts').add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || '',
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput('');
  };

  return (
    <div className='feed'>
      <div className='feed__inputContainer'>
        <div className='feed__input'>
          <CreateIcon />
          <form>
            <input value={input} onChange={(event) => setInput(event.target.value)} type='text' />
            <button onClick={sendPost} type='submit'>Send</button>
          </form>
        </div>
        <div className='feed__inputOptions'>
          <InputOption Icon={ImageIcon} title='Photo' color="#70b5f9" />
          <InputOption Icon={SubscriptionsIcon} title='Video' color="#e7a33e" />
          <InputOption Icon={EventNoteIcon} title='Event' color="#c0cbcd" />
          <InputOption Icon={CalendarViewDayIcon} title='Write Article' color="#7fc15e" />
        </div>
      </div>

      {/* Posts */}
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoURL } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoURL={photoURL}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed

'use client'
import Link from 'next/link'
import './Profile.scss'
import MyList from '../mylist/MyList'
import Chat from '../chat/Chat'
import apiRequest from '@/lib/apiRequest'
import { useRouter } from 'next/navigation'
import { AuthContext } from '@/context/AuthContext'
import { useContext, useEffect, useState } from 'react'

const Profile = () => {
  const {updateUser, currentUser} = useContext(AuthContext)!;
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
    if(!currentUser) {
      router.push("/sign-in");
    }
  }, [currentUser, router]);

  if(!isClient) {
    return null;
  }

  const handleSignOut = async() => {
    try{
      await apiRequest.post("/auth/logout");
      updateUser(null);
      router.push("/sign-in");
    } catch(error) {

    }
  }
  return (
    currentUser && (<div className='profilePage'>
        <div className='details'>
          <div className="wrapper">
            <div className="title">
              <h1>User Information</h1>
              <Link href="/profile/profile-update">
                <button>Update Profile</button>
              </Link>
            </div>

            <div className="info">
              <span>Avatar: <img src={currentUser?.avatar || "./noavatar.jpg"} alt="" /></span>
              <span>Username: <b>{currentUser?.username}</b></span>
              <span>Email: <b>{currentUser?.email}</b></span>
              <button onClick={handleSignOut}>Sign Out</button>
            </div>

            <div className="title">
              <h1>My List</h1>
              <Link href="/new-post">
                <button>Creat New Post</button>
              </Link>
            </div>
            <MyList>
              <div className='title'>
                <h1>Saved List</h1>
              </div>
            </MyList>
          </div>
        </div>
        <div className='chatContainer'>
          <div className="wrapper">
            <Chat/>
          </div>
        </div>
    </div>)
  )
}

export default Profile
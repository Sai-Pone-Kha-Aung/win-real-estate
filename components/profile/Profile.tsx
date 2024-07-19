'use client'
import Link from 'next/link'
import './Profile.scss'
import Chat from '../chat/Chat'
import apiRequest from '@/lib/apiRequest'
import { useRouter } from 'next/navigation'
import { AuthContext } from '@/context/AuthContext'
import { Suspense, useContext, useEffect, useState } from 'react'
import { PostData } from '@/types'
import { getDefaultPostData } from '@/constants/data'
import Card from '../card/Card'

const Profile = () => {
  const {updateUser, currentUser} = useContext(AuthContext)!;
  const [isClient, setIsClient] = useState(false);
  const [posts, setPosts] = useState<PostData[]>([getDefaultPostData()]);
  const [savedPosts, setSavedPosts] = useState<PostData[]>([getDefaultPostData()]);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
    if(!currentUser) {
      router.push("/sign-in");
    }
  }, [currentUser, router]);


  useEffect(() => {
    if (!isClient) {
      return;
    }
    const getProfilePost = async () => {
      try {
        const res = await apiRequest.get("/users/profilePosts");
        setPosts(res.data.userPosts);
        setSavedPosts(res.data.savedPosts);
      } catch (error) {
        console.log("Failed to fetch data", error);
      }
    };
    getProfilePost();
  }, [isClient]);

  if(!isClient) {
    return null;
  }

  console.log(posts);
  console.log(savedPosts);

  const handleSignOut = async() => {
    try{
      await apiRequest.post("/auth/logout");
      updateUser(null);
      router.push("/sign-in");
    } catch(error) {
      console.log("failed to sign out", error);
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
            <Suspense fallback={<p>Loading...</p>}>
              {posts.map((item) => (
                <Card key={item.id} item={item} />
              ))}
            </Suspense>
            <div className='title'>
              <h1>Saved List</h1>
            </div>
            <Suspense fallback={<p>Loading...</p>}>
              {savedPosts.map((item) => (
                <Card key={item.id} item={item} />
              ))}
            </Suspense>
          </div>
        </div>
        <div className='chatContainer'>
          <div className="wrapper">
            <Chat />
          </div>
        </div>
    </div>)
  )
}

export default Profile
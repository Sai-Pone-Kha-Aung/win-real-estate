import Link from 'next/link'
import './Profile.scss'
import MyList from '../mylist/MyList'
import Chat from '../chat/Chat'
const Profile = () => {
  return (
    <div className='profilePage'>
        <div className='details'>
          <div className="wrapper">
            <div className="title">
              <h1>User Information</h1>
              <Link href="/profile/update">
                <button>Update Profile</button>
              </Link>
            </div>

            <div className="info">
              <span>Avatar: <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" /></span>
              <span>Username: <b>John Doe</b></span>
              <span>Email: <b>johndoe@gmail.com</b></span>
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
    </div>
  )
}

export default Profile
'use client'
import React, { useContext, useState } from 'react'
import "./page.scss"
import apiRequest from '@/lib/apiRequest'
import { AuthContext } from '@/context/AuthContext'
import { useRouter } from 'next/navigation'
import UploadWidget from '@/components/uploadWidget/UploadWidget'

const page = () => {
  const {currentUser, updateUser } = useContext(AuthContext)!;
  const [error, setError] = useState("");
  const [avartar, setAvatar] = useState<string[]>([]);
  const router = useRouter();
  const handleSumbit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const { username, email, password } = Object.fromEntries(formData);

    try {
      const res = await apiRequest.put(`/users/${currentUser?.id}`, {
        username,
        email,
        password,
        avatar: avartar[0],
      });
      updateUser(res.data);
      router.push("/profile");
    } catch (error) {
      console.log(error)
      setError(error.response.data.message);
    }

  }
  return (
    <div className='profileUpdatePage'>
      <div className="formContainer">
        <form onSubmit={handleSumbit}>
          <h1>Update Profile</h1>
          <div className='item'>
            <label htmlFor='username'>Username</label>
            <input
              id="username"
              name="username"
              type="text"
              defaultValue={currentUser?.username}
            />
          </div>
          <div className='item'>
            <label htmlFor='email'>Email</label>
            <input
              id="email"
              name="email"
              type="email"
              defaultValue={currentUser?.email}
            />
          </div>
          <div className='item'>
            <label htmlFor='password'>Password</label>
            <input
              id="password"
              name="password"
              type="password"
            />
          </div>
          <button>Update</button>
          {error && <span>{error}</span>}
        </form>
      </div>
      <div className="sideContainer">
        <img src={avartar[0] || currentUser?.avatar || "/noavatar.jpg"} alt="avatar"  className='avatar' />
        <UploadWidget
          uwConfig={{
            cloudName: "daykndeow",
            uploadPreset: "win_estate",
            multiple: false,
            maxImageFileSize: 2000000,
            folder: "avatars",
          }}
          setState={setAvatar}
          setPublicId={(id: string) => updateUser({ ...currentUser!, avatar: id })}
        />
      </div>
    </div>
  )
}

export default page
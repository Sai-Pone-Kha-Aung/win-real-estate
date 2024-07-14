'use client'
import React, { useContext, useState } from 'react'
import "./SignIn.scss"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import apiRequest from '@/lib/apiRequest'
import { AuthContext } from '@/context/AuthContext'

const SignIn = () => {
  const [error, setError] = useState("");
  const [isloading, setIsLoading] = useState(false);
  const {updateUser} = useContext(AuthContext)!;
  console.log(updateUser)

  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    const formData = new FormData(e.currentTarget);

    const username = formData.get('username');
    const password = formData.get('password');

    try{
      const res = await apiRequest.post("/auth/login", { 
        username, 
        password 
      });

      updateUser(res.data);

      router.push("/");
    } catch(error) {
      setError(error.response.data.message);
    } finally{
      setIsLoading(false);
    }
  }
  return (
    <div className='signInPage'>
        <div className="formContainer">
            <form onSubmit={handleSubmit}>
                <h1>Welcome back</h1>
                    <input 
                        name="username" 
                        required
                        type="text" 
                        placeholder="Username" 
                        minLength={3}
                        maxLength={20}
                        />
                    <input 
                        name="password" 
                        required
                        type="password" 
                        placeholder="Password" 
                        />
                    <button disabled={isloading}>Sign In</button>
                    {error && <span>{error}</span>}
                    <Link href="/sign-up">
                        {"Don't"} you have an account?
                    </Link>
            </form>
        </div>
        <div className="imageContainer">
          <img src="./bg.png" alt=""/>
        </div>
    </div>
  )
}

export default SignIn
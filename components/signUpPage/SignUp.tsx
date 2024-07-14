'use client'
import Link from 'next/link'
import "./signUp.scss"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import apiRequest from '@/lib/apiRequest'
import { AxiosError } from 'axios'

const SignUp = () => {
  const [error, setError] = useState("");
  const [isloading, setIsLoading] = useState(false);

  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    const formData = new FormData(e.currentTarget);

    const username = formData.get('username');
    const email = formData.get('email');
    const password = formData.get('password');

    try{
      const res = await apiRequest.post("/auth/register", { 
        username, 
        email, 
        password 
      });

      router.push("/sign-in");
    } catch(error) {
      setError(error.response.data.message);
    } finally{
      setIsLoading(false);
    }
  }

  return (
    <div className='signUpPage'>
        <div className="formContainer">
            <form onSubmit={handleSubmit}>
                <h1>Create an Account</h1>
                    <input name="username" type="text" placeholder="Username" />
                    <input name="email" type="email" placeholder="Email" />
                    <input name="password" type="password" placeholder="Password" />
                    <button disabled={isloading}>Create Account</button>
                    {error && <span>{error}</span>}
                    <Link href="/sign-in">
                        Already have an account? Sign In
                    </Link>
            </form>
        </div>
        <div className="imageContainer">
          <img src="./bg.png" alt=""/>
        </div>
    </div>
  )
}

export default SignUp



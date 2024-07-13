import React from 'react'
import "./SignIn.scss"
import Link from 'next/link'

const SignIn = () => {
  return (
    <div className='signInPage'>
        <div className="formContainer">
            <form>
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
                        type="text" 
                        placeholder="Password" 
                        />
                    <button>Sign In</button>
                    <Link href="/sign-up">
                        Don't have an account? Sign Up
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
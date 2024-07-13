import Link from 'next/link'
import "./signUp.scss"

const SignUp = () => {
  return (
    <div className='signUpPage'>
        <div className="formContainer">
            <form>
                <h1>Create an Account</h1>
                    <input name="username" type="text" placeholder="Username" />
                    <input name="email" type="email" placeholder="Email" />
                    <input name="password" type="password" placeholder="Password" />
                    <button>Create Account</button>
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
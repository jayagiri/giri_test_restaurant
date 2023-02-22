import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div>
            <div className='py-[100px] px-[500px] '>

                <form className=''>
                    <div className='flex flex-col'>
                        <div className='mb-2'>
                            <label>
                                Username:
                                <input type="text" name="name" className='ml-2 shadow-md  w-48 border-solid border-2 border-green-600 rounded  ' />
                            </label>
                        </div>
                        <div>
                            <label>
                                Password:
                                <input type="text" name="name" className='ml-3  shadow-md w-48 border-solid border-2 border-green-600 rounded' />
                            </label>
                        </div>
                        <div className='mt-2 py-5 px-[90px]'>
                            <button className='bg-green-500 m-2  w-full py-2  text-sm text-center text-white transition-colors  ounded-full hover:bg-green-500 ease px-16 md:w-auto rounded ' type="submit" value="Submit"  > Log In </button>
                        </div>
                    </div>
                </form>
                <div> Don't have account  ? <Link className='ml-2 underline text-green-500 ' to="/register">Register Now</Link></div>

            </div>
        </div>



    )
}

export default Login

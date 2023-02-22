import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div>
            <div className=' '>
                <div className='py-[100px] px-[500px] '>
                    <form className=''>
                        <div className='flex flex-col'>
                            <div className='mb-2'>
                                <label>
                                    First Name:
                                    <input type="text" name="firstName" className='ml-[58px] shadow-md  w-48 border-solid border-2 border-green-600 rounded  ' />
                                </label>
                            </div>
                            <div>
                                <label>
                                    Last Name:
                                    <input type="text" name="lastName" className='mb-2 ml-[60px] shadow-md w-48 border-solid border-2 border-green-600 rounded' />
                                </label>
                            </div>
                            <div>
                                <label>
                                    Email:
                                    <input type="text" name="email" className='mb-2  ml-24 shadow-md w-48 border-solid border-2 border-green-600 rounded' />
                                </label>
                            </div>
                            <div>
                                <label>
                                    Password:
                                    <input type="text" name="password" className='ml-[65px]  shadow-md w-48 border-solid border-2 border-green-600 rounded' />
                                </label>
                            </div>
                            <div className='mt-2'>
                                <label>
                                    Confirm Password:
                                    <input type="text" name="password" className='ml-1 shadow-md w-48 border-solid border-2 border-green-600 rounded' />
                                </label>
                            </div>
                            <div className='mt-2 py-5 px-[140px] '>
                                <button className='bg-green-500 m-2  w-full py-2 text-sm text-center text-white transition-colors  ounded-full hover:bg-green-500 ease px-16 md:w-auto rounded ' type="submit" value="Submit"  > Submit </button>
                            </div>
                        </div>
                    </form>
                    <div> Already have account ?<Link className='ml-2 underline text-green-500 ' to="/login">Log In</Link></div>
                </div>
            </div>
        </div>
    )
}   

export default Register

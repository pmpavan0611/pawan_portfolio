import React, { useEffect, } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { userAbout } from "../redux/slice/userSlice";

const About = () => {


    const {
        userData: { data },
    } = useSelector((state) => state.user);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userAbout(""));
    }, [dispatch]);

    return (
        <>
            <div className='container'>
                <div className='text-center mt-4'>
                    <span className='bg-warning text-center'>About Me </span>
                </div>
                <div className='row  text-center'>
                    <h2 className='fw-bolder my-4'>Know Me More</h2>
                </div>
                {data && data?.map((user, i) => {
                    return (
                        <div key={i}>
                            <div className='row'>
                                <div className='col-6'>
                                    <p>Hi,{user?.aboutUs}
                                    </p>
                                </div>
                                <div className='col-6'>
                                    <p>22 Years of Experiance</p>
                                </div>
                            </div>

                            <div className='row '>
                                <div className='col-3   '>
                                    <p>Name: {user?.full_name}</p>
                                </div>
                                <div className='col-3   '>
                                    <p>Email:{user?.email}</p>
                                </div>
                                <div className='col-3   '>
                                    <p>Mobile: {user?.mobile}</p>
                                </div>
                                <div className='col-3   '>
                                    <p>Date of birth: 11 November, 1987</p>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </>
    )
}

export default About
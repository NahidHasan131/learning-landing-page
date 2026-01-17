import React from 'react';
import bannerImg from '../../assets/education.png';
import { GrUserExpert } from "react-icons/gr";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";

const Banner = () => {
    return (
        <div>
            <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 items-center gap-8 space-y-6 md:space-y-0">
                <div className='flex items-center justify-center'>
                    <img src={bannerImg} alt="banner image" className='w-87.5 max-w-112.5 object-cover drop-shadow-2xl'/>
                </div>
                <div className='flex flex-col justify-center'>
                    <div className="text-center md:text-left space-y-12">
                        <h1 className="text-3xl md:text-4xl font-bold leading-snug">The World's Leading Online learning Platform </h1>
                        <div className='flex flex-col gap-6'>
                            <div className='flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl'>
                                <FaBookReader className='text-2xl '/>
                                <p>10,000+ courses</p>
                            </div>
                            <div className='flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl'>
                                <GrUserExpert className='text-2xl '/>
                                <p>Expert Instruction</p>
                            </div>
                            <div className='flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl'>
                                <MdOutlineAccessTime className='text-2xl '/>
                                <p>Lifetime Access</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
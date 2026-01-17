import React from 'react';
import bannerImg from '../../assets/banner.png';

const CommunityBanner = () => {
    return (
        <div>
            <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 items-center gap-8 space-y-6 md:space-y-0">
                <div className='flex flex-col justify-center'>
                    <div className="text-center md:text-left space-y-4 lg:max-w-112.5 ">
                        <h1 className="text-4xl font-bold leading-snug!">Join Our Community to Start your Journey</h1>
                        <p className='text-dark2'>Connect with fellow students, share your learning journey, and gain access to exclusive resources and support.</p>
                        <a href="#" className="primary-btn mt-6! inline-block">Join Now</a>
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <img src={bannerImg} alt="banner image" className='w-87.5 max-w-112.5 object-cover drop-shadow-2xl'/>
                </div>
            </div>
         </div>
    );
};

export default CommunityBanner;
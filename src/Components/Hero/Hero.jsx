import { IoIosArrowForward } from 'react-icons/io';
import Navbar from '../Navbar/Navbar';
import Blob from '../../assets/blob.svg'
import HeroImg from '../../assets/hero.png'

const Hero = () => {
    return (
        <div className='bg-light overflow-hidden relative'>
            <Navbar></Navbar>
            <div className="container grid grid-cols-1 md:grid-cols-2 min-h-162.5">
                <div className='flex flex-col justify-center py-14 md:py-0 relative z-20'>
                    <div className='text-center md:text-left space-y-10 lg:max-w-100'>
                        <h1 className='text-3xl lg:text-5xl font-bold leading-snug'>Let's learn to build a <span className='text-secondary'>Website</span> for your business
                        </h1>
                        <div className='flex justify-center md:justify-start'>
                            <button className='primary-btn flex items-center gap-2 group'>Get Started <IoIosArrowForward className='text-xl group-hover:translate-x-2 group-hover:rotate-45 duration-300'></IoIosArrowForward>
                            </button>
                        </div>
                    </div>
                </div>
                
                <div className='flex justify-center items-center'>
                    <img src={HeroImg} alt="" className='w-100 xl:w-150 drop-shadow relative z-10'/>
                    <img src={Blob} alt="" className='absolute -bottom-32 w-200 md:w-375 z-1 hidden md:block'/>
                </div>
            </div>
        </div>
    );
};

export default Hero;
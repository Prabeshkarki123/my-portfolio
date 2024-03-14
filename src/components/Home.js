
import myPic from './pictures/myPic.jpg';
import './homeImage.css';
import waveHand from './pictures/waving-hand.png';
import { FacebookFilled, LinkedinFilled, GithubOutlined } from "@ant-design/icons";

import Firefly from "./Firefly";


function Home() {
    return (
        <div class="py-[60px] flex flex-col justify-center items-center bg-cover bg-center bg-gray-800">

            <div className=" flex justify-center items-center relative overflow-hidden">


                <div className="ml-4 h-full w-1/2 lg:w-1/3">
                    <p className="text-2xl lg:text-4xl text-white font-bold mb-5">Front-End React Developer</p>
                    <div className="flex">
                        <img src={waveHand} alt='wave-hand' className="w-14 lg:w-20 h-10 lg:h-16 rotating-handAnimate" />
                        <div >
                            <p className="text-[20px] lg:text-[25px] text-orange-400">Hi! </p>
                            <p className="text-[13px] lg:text-[15px] text-orange-400">I am Prabesh Karki. A passionate Front-End React Developer based on Jhapa, Nepal.</p>
                        </div>
                    </div>
                    {/* <div className="mt-4 lg:mt-8 text-[23px] lg:text-[28px] flex justify-center items-center ">
                        <FacebookFilled className="mr-12 text-white" />
                        <LinkedinFilled className="mr-12 text-white" />
                        <GithubOutlined className="text-white" />
                    </div> */}
                </div>

                <div className='flex flex-col justify-center items-center'>
                    <div className='relative overflow-hidden rounded-full'>
                        <Firefly className='' />
                        <div className="relative flex justify-center items-center bg-gray-800 h-[150px] lg:h-[285px] w-[150px] lg:w-[285px] m-2 lg:m-5 overflow-hidden rounded-full">
                            <div className=" absolute h-full w-1/3 bg-gradient-to-b from-yellow-400 to-blue-400 rotate-div-animate" />
                            <img src={myPic} alt='myPic' className="rounded-full absolute h-[140px] lg:h-[270px] w-[140px] lg:w-[270px]" />
                        </div>
                    </div>
                    <button className=" rounded-md bg-orange-400 text-white text-[14px] lg:text-[20px] font-bold px-3 py-2 about-pic-animate shadow-lg shadow-gray-600 transition-all duration-300 ease-in-out">Hire me</button>
                </div>
                {/* h-44 lg:h-[270px] w-44 lg:w-[270px] */}
            </div>


            <div className=" flex flex-col mt-10 lg:mt-3 flex justify-center items-left">
                {/* <button className=" w-[80px] rounded-md bg-orange-400 text-white text-[14px] lg:text-[20px] font-bold px-3 py-2 about-pic-animate shadow-lg shadow-gray-600 transition-all duration-300 ease-in-out">Hire me</button> */}
                <div className="mt-4 lg:mt-8 text-[23px] lg:text-[28px] flex justify-center items-center ">
                    <FacebookFilled className="mr-12 text-white" />
                    <LinkedinFilled className="mr-12 text-white" />
                    <GithubOutlined className="text-white" />
                </div>
            </div>

        </div>
    )

}
export default Home;
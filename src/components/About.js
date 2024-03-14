import React from "react";
import aboutPic from './pictures/aboutPic.png';
import './homeImage.css';
import { Card } from "antd";
import { NotificationFilled } from "@ant-design/icons";
import { SkilliconsArr } from "./SkilliconsArr";
function About() {
    return (
        <div className="flex flex-col justify-center items-center bg-gray-800 p-2">

            <div className=" m-0 w-full lg:w-2/3">
                <p className="font-bold text-white text-[20px] lg:text-[25px] mb-5">ABOUT ME</p>
                {/* <hr className="text-lg"/> */}

                <div className="flex justify-end my-2">
                    <button className="rounded-md bg-blue-400 text-white text-[13px] lg:text-[15px] font-bold px-2 mx-2 py-1 mb-1 hover:shadow-lg">Download CV</button>
                </div>
                <div className="grid lg:flex justify-center items-center w-full">
                    <div className="w-2/3 md:w-2/3 lg:w-2/5 overflow-hidden">
                        <img src={aboutPic} alt='web Dev Pic' className="about-pic-animate" />
                    </div>
                    <div className=" md:ml-8 text-sm w-full lg:w-2/5">
                        <p className="font-bold text-white text-[20px] lg:text-[25px] mb-2 lg:mb-4">Hello! I'm Prabesh Karki</p>
                        <p className="text-[13px] lg:text-[15px] text-white mb-1 lg:mb-2">A passionate <span className="text-orange-400 font-bold">Frontend React Developer</span> with a flair for creating immersive and user-friendly web experiences.</p>
                        <p className="text-[13px] lg:text-[15px] text-white">My journey into the world of coding began with a fascination for turning ideas into interactive and visually appealing digital realities.</p>
                    </div>
                </div>

                <div className="mt-10 lg:mt-5">
                    <div className="flex justify-center">
                        <p className="font-bold text-white text-[15px] lg:text-[20px]">Skills Stack </p>
                    </div>
                    <div className=" flex flex-wrap justify-between mt-3 mx-4">
                        {/* <ul className=""> */}
                        {SkilliconsArr.map((ele) => {
                            return (
                                <div className="mr-5 lg:mr-8 mb-2 flex flex-col items-center">
                                    <img src={ele.logo} alt="skill" className="w-[20px] lg:w-[30px] h-[20px] lg:h-[28px]" />
                                    <p className="ml-2 mb-2 text-[13px] lg:text-[15px] text-orange-400">{ele.sName}</p>
                                    {/* <p className="ml-5 text-[13px] lg:text-[15px] text-white">|</p> */}
                                </div>
                            )
                        })}
                        {/* </ul> */}
                    </div>

                </div>
                <div className="mt-2 lg:mt-4 grid lg:flex justify-center p-2">

                    <div className="p-5 md:p-8 rounded-lg w-full lg:1/2 mx-1 lg:mx-2 my-2 bg-gray-700">
                        <p className="text-[14px] lg:text-[16px] text-gray-100 font-bold mb-2 md:mb-3">Who Am I?</p>
                        <hr className="text-white"/>
                        <p className="text-[13px] lg:text-[14px] text-gray-100 mt-2 md:mt-3"> I am a creative
                            thinker and problem solver, always seeking innovative ways to bring web UI designs to life.
                            With a keen eye for detail, I strive to deliver products that not only meet but exceed user
                            expectations.</p>
                    </div>

                    <div className="p-5 md:p-8 rounded-lg w-full lg:1/2 mx-1 lg:mx-2 my-2 bg-gray-700">
                        <p className="text-[14px] lg:text-[16px] text-gray-100 font-bold mb-2 md:mb-3"> What can I do?</p>
                        <hr className="text-white"/>
                        <p className="text-[13px] lg:text-[14px] text-gray-100 mt-2 md:mt-3"> As a Frontend
                            React Developer, I specialize in building dynamic and responsive web applications.
                            I am well-versed in the latest web technologies and trends, with a focus on
                            delivering intuitive and captivating user experiences.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default About;
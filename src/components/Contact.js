import React from "react";
import girl from './pictures/girl.png';
import webTab from './pictures/webTab.png';
import PhoneIcon from './pictures/phoneIcon.png'
import LocationIcon from './pictures/LocationIcon.png'
import MailIcon from './pictures/MailIcon.jpg'

function Contact() {
    return (
        <div className="flex flex-col justify-center items-center bg-gray-800 p-2 mt-10">

            <div className=" m-0 w-full lg:w-2/3">
                <p className="font-bold text-white text-[20px] lg:text-[25px]">CONTACT ME</p>
                {/* <hr className="text-lg" /> */}

                <div className="px-5">
                    <p className="text-[13px] lg:text-[15px] text-white mb-3 lg:mb-6 mt-6 lg:mt-10">Thank you for visiting my portfolio!
                        Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love
                        to hear from you. Feel free to reach out through any of the following channels:</p>
                </div>

                <div className="flex justify-between items-center">
                    <div className="w-2/5 lg:w-2/5 aspect-square overflow-hidden p-5">
                        <img src={girl} alt='web Dev Pic' className="" />
                    </div>

                    <div className="relative w-3/5 lg:w-3/5">
                        <img src={webTab} alt='web Dev Pic' className="relative w-full"/>
                        
                        <div className="absolute top-[40px] left-[25px] text-sm w-full lg:w-full md:pl-2 md:pt-1 lg:pl-8 lg:pt-5">
                            <div className="flex justify-left items-center overflow-hidden ">
                                <div className="w-1/6 lg:p-1 aspect-sqaure">
                                    <img src={LocationIcon} alt='web Dev Pic' className="about-pic-animate" />
                                </div>
                                <p className="text-[10px] md:text-[13px] lg:text-[15px] text-orange-400 mb-1 lg:mb-2 w-5/6">Birtamode, Jhapa, Nepal</p>
                            </div>
                            <div className="flex justify-left items-center overflow-hidden">
                                <div className="w-1/6 p-2 lg:p-4 aspect-sqaure">
                                    <img src={MailIcon} alt='web Dev Pic' className="about-pic-animate" />
                                </div>
                                <p className="text-[10px] md:text-[13px] lg:text-[15px] text-orange-400 mb-1 lg:mb-2 w-5/6">prabeshkarki2731@gmail.com</p>
                            </div>
                            <div className="flex justify-left items-center overflow-hidden">
                                <div className="w-1/6 p-2 lg:p-4 aspect-sqaure">
                                    <img src={PhoneIcon} alt='web Dev Pic' className="about-pic-animate" />
                                </div>
                                <p className="text-[10px] md:text-[13px] lg:text-[15px] text-orange-400 mb-1 lg:mb-2 w-5/6">+977 9816994459</p>
                            </div>
                        </div>

                    </div>

                    {/* <div className="absolute text-sm w-1/2 lg:w-2/5 border">
                        <div className="flex justify-left items-center overflow-hidden p-2">
                            <div className="w-1/4 aspect-sqaure p-1">
                                <img src={LocationIcon} alt='web Dev Pic' className="about-pic-animate" />
                            </div>
                            <p className="text-[13px] lg:text-[15px] text-orange-400 mb-1 lg:mb-2 w-3/4">Birtamode, Jhapa, Nepal</p>
                        </div>
                        <div className="flex justify-left items-center overflow-hidden p-2">
                            <div className="w-1/4 aspect-sqaure p-3 lg:p-5">
                                <img src={MailIcon} alt='web Dev Pic' className="about-pic-animate" />
                            </div>
                            <p className="text-[13px] lg:text-[15px] text-orange-400 mb-1 lg:mb-2 w-3/4">prabeshkarki2731@gmail.com</p>
                        </div>
                        <div className="flex justify-left items-center overflow-hidden p-2">
                            <div className="w-1/4 aspect-sqaure p-3 lg:p-5">
                                <img src={PhoneIcon} alt='web Dev Pic' className="about-pic-animate" />
                            </div>
                            <p className="text-[13px] lg:text-[15px] text-orange-400 mb-1 lg:mb-2 w-3/4">+977 9816994459</p>
                        </div>
                    </div> */}
                </div>

                {/* <div className=" flex justify-center items-center mt-3">
                    <div className="w-2/3 border">
                        <p className="font-bold text-gray-600 text-[20px] lg:text-[25px] mb-2 lg:mb-4">Get in touch</p>
                        <form>
                            <div className="flex flex-col items-left">
                                <div className="flex p-2 ">
                                    Full Name: <input type="text" className="border border-gray-300 rounded-lg ml-3"/>
                                </div>
                                <div className="flex p-2">
                                    Organization/Company: <input type="text" className="border border-gray-300 rounded-lg ml-3"/>
                                </div>
                                <div className="flex p-2">
                                    Email: <input type="email" className="border border-gray-300 rounded-lg ml-3"/>
                                </div>
                                <div className="flex p-2">
                                    Contact No.: <input type="number" className="border border-gray-300 rounded-lg ml-3"/>
                                </div>
                                <div className="flex p-2">
                                    Address: <input type="text" className="border border-gray-300 rounded-lg ml-3"/>
                                </div>
                                <div className="flex p-2">
                                    message:<input type="text-field" className="border border-gray-300 rounded-lg ml-3"/>
                                </div>
                            </div>
                        </form>
                    </div>

                </div> */}

                <div className="mt-2 lg:mt-4 flex justify-center p-2">

                </div>
            </div>
        </div>
    );
}
export default Contact;
import React from "react";
import { GithubOutlined } from "@ant-design/icons";
import './project.css';


//dpcart pics import
import dpHome from './projectsPic/dpCartHome.png';
import dpHomeLiving from './projectsPic/dpHomeLiving.png';
import dpElectronics from './projectsPic/dpCartElectronics.png';
import dpCart from './projectsPic/dpCart.png';
import dpLogin from './projectsPic/dpLogin.png';




function Projects() {
    const myProjects = [
        {
            id: 1,
            pic_arr: [dpHome, dpHomeLiving, dpElectronics, dpCart, dpLogin],
            githubLink: 'jfjdkfjkdf',
            name: 'Itabhatta Shop',
            project_type: 'E-Commerce Web Frontend',
            tech_used: 'ReactJS, Taiwind CSS, Ant-Design',
            description: 'This is the ecommerce web frontend project with functionality to allow users to shop online using the internet. It has user login page from where user can signup or signin to their account.'
        },
        {
            id: 2,
            pic_arr: [],
            githubLink: 'jfjdkfjkdf',
            name: 'kinmel.com',
            project_type: 'e-commerce',
            tech_used: 'reactJS, tailwind CSS, ant-design',
            description: 'this is the super fanstatic ecommerce project with jdskksjkks ncjsnknskcns kcskjfkdkjf'
        },
        {
            id: 3,
            pic_arr: [],
            githubLink: 'jfjdkfjkdf',
            name: 'kinmel.com',
            project_type: 'e-commerce',
            tech_used: 'reactJS, tailwind CSS, ant-design',
            description: 'this is the super fanstatic ecommerce project with jdskksjkksnc jsnknskcn skcskjfkdkjf'
        }
    ];

    // const slideLeft = () => {
    //     let slider = document.getElementById('slider');
    //     slider.scrollLeft = slider.scrollLeft - 300;
    // }

    // const slideRight = () => {
    //     let slider = document.getElementById('slider');
    //     slider.scrollLeft = slider.scrollLeft + 300;
    // }

    return (
        <div className="bg-gray-800 p-2 flex flex-col justify-center items-center">
            <div className=" m-0 w-full lg:w-2/3">
                <p className="font-bold text-white text-[20px] lg:text-[25px] mb-1">MY PROJECTS</p>
                <div className="text-gray-800 flex justify-end mb-4">
                    <span className="p-1 font-bold text-orange-400 text-[15px] lg:text-[20px] border border-orange-400">{myProjects.length} Projects</span>
                </div>

                <div className="flex flex-col items-center justify-center">
                    {myProjects.map((ele) => {
                        return (
                            <div className="p-1 lg:flex justify-center items-center w-full mb-8 rounded-xl bg-gray-700">
                                <div className=" p-1 overflow-x-scroll flex w-full lg:w-3/5 overflow-hidden">
                                    {ele.pic_arr.map((element, index) => {
                                        return(
                                            <div className={`m-1 order-${(ele.id % 2 === 0) ? 2 : 0} relative h-[200px] lg:h-[250px] overflow-y-scroll`} key={index} style={{ minWidth: '100%' }} >
                                                <img src={element} alt='Project' className="w-full h-auto" />
                                            </div>
                                    )})}
                                </div>

                                <div className={`order-${(ele.id % 2 === 0) ? 1 : 0} p-2 m-1 flex flex-col text-sm w-full lg:w-2/5`}>
                                    <p className="font-extrabold text-orange-400 text-[18px] lg:text-[23px] mb-2 lg:mb-4 flex justify-center items-center">{ele.name}</p>
                                    <p className="text-[13px] lg:text-[14px] text-blue-300 font-bold mb-1 lg:mb-2">Project type: <span className="text-white">{ele.project_type}</span> </p>
                                    <p className="text-[13px] lg:text-[14px] text-blue-300 font-bold mb-1 lg:mb-2">Technology used: <span className="text-white">{ele.tech_used}</span> </p>
                                    <p className="text-[13px] lg:text-[14px] text-white">{ele.description}</p>
                                    <div className="mt-2 lg:mt-3 text-[20px] lg:text-[24px] flex justify-center items-center ">
                                        <GithubOutlined className="mr-12 text-white" />
                                        <button className="text-white text-[12px] font-bold px-2 py-1 bg-blue-400 rounded-md">Try it</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>










            {/* <div className="relative flex items-center">
            <button onClick={slideLeft}><LeftCircleFilled className="text-5xl text-red-500 mx-2 opacity-70 hover:opacity-100"/></button>
                <div id='slider' className="w-full h-100 overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide border border-blue-500">
                    {myProjects.map((ele)=>{
                            return(
                            <div className="shadow-md w-1/2 shadow-red-200 rounded-lg ease-in-out duration-300 inline-block m-2 hover:scale-110 border border-red-500">
                                <div className="flex justify-center my-0">
                                    <img src={ele} alt={ele.videoLink} className="cursor-pointer hover:scale:110 w-[90px] lg:w-[120px] aspect-square"/>
                                </div>
                                <div className="flex justify-center my-0">
                                    <p>Github Link: {ele.githubLink}</p>
                                    <p>Project Name: {ele.name}</p>
                                    <p>Project Type: {ele.project_type}</p>
                                    <p>Description: {ele.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            <button onClick={slideRight}><RightCircleFilled className="text-5xl text-red-500 mx-2 opacity-70 hover:opacity-100"/></button>
            </div> */}



        </div>

    )
}
export default Projects;
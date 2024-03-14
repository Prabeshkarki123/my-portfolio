import { React, useEffect, useState } from "react";
import {CloseOutlined} from '@ant-design/icons';

import myLogo from './pictures/myLogo.png';
import togglebtn from './icons/toggle.png';

function Header() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [toggleClicked, setToggleClicked] = useState(false);

  const handleCloseDropdown = () => {
    setOpenDropdown((prevOpenDropdown) => !prevOpenDropdown);
    setToggleClicked((prevToggleClicked) => !prevToggleClicked);
  }

  const handleLinkClick = () => {
    setToggleClicked(true);
    setOpenDropdown((prevOpenDrop) => !prevOpenDrop);
  }

  // useEffect(()=>{
  //   if(openDropdown){
  //     window.addEventListener('click',()=>handleCloseDropdown())
  //   }
  // },[openDropdown])

  return (
    <div className="relative flex justify-between items-center px-1 lg:px-4 py-2 text-sm lg:text-md text-black bg-gray-900">

      {/* logo part */}
      <div className="w-2/6 flex lg:px-5 items-end">
        <div className=" flex justify-center items-center">
          <img src={myLogo} alt='logo' className="w-[45px] lg:w-[60px]" />
        </div>
        <div className="p-0 flex flex-col">
          <p className="text-[11px] lg:text-[14px] text-white font-extrabold">WEB</p>
          <p className="text-[11px] lg:text-[14px] text-white font-extrabold">DEVELOPER</p>
        </div>
      </div>

      {/* other parts of nav */}
      <div className="w-3/6">
        <ul className=" w-full hidden md:flex justify-between items-center text-white">
          <li className="mr-4">
            Home
          </li>
          <li className="mr-4">
            About
          </li>
          <li className="mr-4">
            Projects
          </li>
          <li className="mr-4">
            Contact
          </li>
        </ul>
      </div>

      <div className="md:hidden flex flex-col">
        {toggleClicked?
          <button onClick={handleCloseDropdown}><CloseOutlined className="text-[25px] text-white"/></button>
          :<button onClick={handleLinkClick}><img src={togglebtn} alt='logo' className="w-[35px]" /></button>
        }

        {openDropdown && (
          <div id='dropDown' onClick={handleCloseDropdown} className="md:hidden absolute rounded-lg bg-gray-700 shadow shadow-lg shadow-white top-[50px] right-[3px] z-50">
            <ul className=" w-full text-white text-[15px] px-3">
              <li className="mr-4 my-3 w-full p-1 bg-blue-400 rounded-md flex justify-center">
                Home
              </li>
              <li className="mr-4 my-3 w-full p-1 bg-blue-400 rounded-md flex justify-center">
                About
              </li>
              <li className="mr-4 my-3 w-full p-1 bg-blue-400 rounded-md flex justify-center">
                Projects
              </li>
              <li className="mr-4 my-3 w-full p-1 bg-blue-400 rounded-md flex justify-center">
                Contact
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* <div className="md:hidden mr-3">
        <button><img src={togglebtn} alt='logo' className="w-[35px]"/></button> 
        <Dropdown menu={{items}}
                    className="w-4xl"
                    placement="bottom"
                    arrow={{
                        pointAtCenter: false,
                    }}
                    >
                    <button className="md:hidden py-0 px-3 text-4xl"><DownCircleFilled /></button>
                </Dropdown> 
      </div> */}

      {/* <div className=" w-1/3 mr-4 grid lg:flex justify-end">
                    <button className="rounded-md bg-blue-400 text-white px-2 mx-2 py-1 mb-1 ">Download CV</button>
                    <button className="rounded-md bg-blue-400 text-white px-2 mx-2 py-1 mb-1 ">Hire me</button>
            </div> */}
    </div>

  )
}
export default Header;
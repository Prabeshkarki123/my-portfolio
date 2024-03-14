import React from "react";
import {FacebookFilled, InstagramOutlined, GoogleOutlined, TwitterCircleFilled} from '@ant-design/icons';

function Footer(){
    
    return(
        <div className="h-50 lg:h-78  py-6 text-sm lg:text-md text-black bg-black bg-opacity-5">
            <div className="w-50 flex justify-center space-x-8 px-2 text-xl lg:text-2xl">
                <FacebookFilled className="text-blue-600"/>
                <InstagramOutlined className="text-pink-700"/>
                <TwitterCircleFilled className="text-blue-500"/>
                <GoogleOutlined className="text-red-500"/>
            </div>
            <div className="flex justify-center mt-2">
                <p className=""> &copy; Prabesh Karki  2023</p>
            </div>
        </div>
    )
}
export default Footer;
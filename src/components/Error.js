import React from "react";

const Error = () =>{
    return (<div className="flex flex-col gap-6 bg-bgDark2 h-screen justify-center items-center">
         <img src="https://img.icons8.com/fluency/256/sad-cloud.png" alt="" className="w-84"/>
         <p className="text-3xl text-white">oops! couldn't connect</p>
    </div>);
}

export default Error;
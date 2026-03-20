import React, { useState } from "react";
import "./home.css";
import  Sidebar from "../../components/Sidebar/sidebar" 
import Feed from "../../components/Feed/Feed";
const home = ({isSidebar}) => {
  const [category,setCategory]=useState(0);
  return(
    <>
  <Sidebar isSidebar={isSidebar} category={category} setCategory={setCategory}/>
  <div className={`container ${isSidebar ? "" : "large-container"}`}>
 <Feed category={category} />
  </div>
    </>

  )
}

export default home;


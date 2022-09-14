import React from "react"
import {FaBars} from "react-icons/fa"
// import Comment from "./comments/Comment"
import TabComponents from "./tabs/TabComponents"
const Main = ({handleToggleSidebar}) => {
  return (
   <main>
     <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
       <FaBars/>
     </div>
     <header></header>
     <TabComponents/>
     {/* <Comment/> */}
   </main> 
  )
}
export default Main
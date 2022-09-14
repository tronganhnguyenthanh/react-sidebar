import React from "react"
import {Tabs} from "flowbite-react"
import Comment from "../comments/form/Comment"
import ListComment from "../comments/list/ListComment"
import {ToastContainer} from "react-toastify"
const TabComponents = () => {
  return (
    <>
     <ToastContainer/>
     <Tabs.Group 
       style="underline" 
       aria-label="Default tabs"
      >
       <Tabs.Item title="Bình luận">
         <Comment/>
       </Tabs.Item>
       <Tabs.Item title="Danh sách bình luận">
         <ListComment/>
       </Tabs.Item>
     </Tabs.Group>
    </>
   )
}

export default TabComponents
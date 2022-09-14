import React, {useState} from "react"
import {Button, Label, Textarea, TextInput} from "flowbite-react"
import {ToastContainer, toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import axios from "axios"
const init_data = {
  name:"",
  message:""
}
const Comment = () => {
  const [cancel, setCancel] = useState(true)
  const [data, setData] = useState(init_data)
  const handleCancel = () => {
    setCancel(!cancel)
  }
  const handleOnChange = (e) => {
   let new_data = {...data}
   new_data[e.target.name] = e.target.value
   setData(new_data)
  }
  const handleComment = () => {
    if(data.name === ""){
     toast.error("Please enter your name", {position:"top-center"})
     return false
    }
    if(data.message === ""){
     toast.error("Please enter your message", {position:"top-center"})
     return false
    }else{
      axios.post("http://localhost:8080/api/comment/add", data).then((res) => {
        if(res?.data?.success){
         toast.success(res?.data?.message, {position:"top-center"})
         setData(init_data)
        }else{
          toast.error("Comment added failed", {position:"top-center"})
        }
         return true
       })
    }
  }
  return (
   <form className="flex flex-col gap-4">
    
     <Button onClick={handleCancel}>Đăng bình luận</Button>
     {cancel  &&
      <div>
       <div className="mb-2 block">
         <Label value="Name"/>
       </div>
       <TextInput 
         type="text" 
         placeholder="Your name" 
         name="name"
         value={data?.name}
         onChange={handleOnChange}
       />
       <div className="mb-2 block">
         <Label value="Message"/>
       </div>
       <Textarea 
         rows={4}
         placeholder="Leave a comment" 
         name="message"
         value={data?.message}
         onChange={handleOnChange}
       />
       <div className="flex justify-end">
         <Button color="light" onClick={handleCancel}>Hủy</Button>
         <Button style={{marginLeft:"3px"}} onClick={handleComment}>Bình luận</Button>
       </div>
      </div> 
     }
   </form>
  )
}

export default Comment
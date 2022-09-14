import React, {useEffect, useState} from "react"
import axios from "axios"
import moment from "moment"
import {Button} from "flowbite-react"
import {toast, ToastContainer} from "react-toastify"
const ListComment = () => {
  const [comment, setComment] = useState([])
  useEffect(() => {
    handleGetCommentList()
   },[])
  const handleGetCommentList = () => {
    axios.get("http://localhost:8080/api/comment/list").then((res) => {
     setComment(res.data)
    })
  }
  const handleDelete = (_id) => {
    axios.delete(`http://localhost:8080/api/comment/delete/${_id}`).then((res) => {
      toast.success(res.data.message, {position:"top-center"})
      handleGetCommentList()
    })
  }
  return(
   <>
    
    {comment?comment.map((i, index) => {
       return(
        <div key={i._id}>
          <hr/>
          <a style={{color:"#5488c7", textDecoration:"underline"}} href="#">
            {i.name}
          </a>
          <span className="ml-2">{moment(i.date).format("DD/MM/YYYY")}</span>
          <p className="ml-2">{i.message}</p>
          <div className="flex justify-end p-2">
            <Button color="failure" onClick={() => handleDelete(i._id)}>Delete</Button>
          </div>
        </div>
       )
     })
     :(<div>
      khoong cos binh luan nao
     </div>)
     } 
   </>
  )
}
export default ListComment
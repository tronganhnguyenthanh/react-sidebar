import React, {Fragment, useState} from "react"
import {Button, Progress} from "flowbite-react"
import {AiOutlinePlus, AiOutlineMinus} from "react-icons/ai"
import axios from "axios"
const ProgressComponent = () => {
  const [increase, setIncrease] = useState(0)
  const [color, setColor] = useState("purple")
  const handleIncrease = () => {
     let data = {
      increase:increase + 1
     }
     axios.post("http://localhost:8080/api/progress/add", data).then((res) => {
      setIncrease(res?.data)
      if (increase >= 100) {
       setIncrease(100)
       setColor(color)
     }else{
       setIncrease(data?.increase)
     }
    })
  }
  const handleDecrease = () => {
     let data = {
      increase:increase - 1
     }
     axios.post("http://localhost:8080/api/progress/add", data).then((res) => {
       setIncrease(res?.data)
       if (increase <= 0) {
        setIncrease(0)
        setColor(color)
      }else{
        setIncrease(data?.increase)
      }
     })
   }
   return (
     <Fragment>      
        <Progress
          progress={increase}
          color={color}
          labelPosition="outside"
          labelProgress={true}
          // onChange={handleOnChange}
       />
       <div className="flex flex-wrap gap-2">
          <Button
            style={{margin:"5px"}}
            onClick={handleIncrease}
           >
            <AiOutlinePlus color="black" />
          </Button>
          <Button
            style={{margin:"5px"}}
            color="dark"
            onClick={handleDecrease}
          >
             <AiOutlineMinus color="white" />
           </Button>
         </div>
         <h1 className="text-center text-2xl">{increase} %</h1>
     </Fragment>
    )
}

export default ProgressComponent
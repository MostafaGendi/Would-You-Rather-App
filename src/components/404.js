import React from 'react'
import { RiEmotionSadLine } from "react-icons/ri";


function Erorr(){
  return (
    <div className="error">
      <span>4<RiEmotionSadLine />4</span>
      <span className="err_txt">This Poll does not exist</span>
    </div>
  )
}
export default Erorr

import React from 'react'

const  Navigation= ({filterItem,newData}) => {
  return (
    <>
       <nav className="navbar">
          <div className="btn-group">           
        
               {newData.map((curr)=>{
                  
                  return(
                    <button className="btn-group__item" onClick={()=>filterItem(curr)} >
                     {curr}
                    </button>
                  )
               })}
                
              
          </div>
          </nav>   
    
    </>
  )
}

export default Navigation


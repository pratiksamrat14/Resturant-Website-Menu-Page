import React,{useState} from 'react'
import MenuCard from "./MenuCard"
import "./style.css"
import Menu from "./MenuApi"
import Navigation from "./Navigation"

const modifiedData=[
    ... new Set(Menu.map((curr)=>{
         return(curr.category)
    })),"All"
]

const Resturant = () => {
     const [menuData,setMenuData]=useState(Menu);
     const [newData,setNewData]=useState(modifiedData);
     const filterItem=(Data)=>{
        if(Data==="All")
        {
            setMenuData(Menu)
            return 
        }

         const modiData=Menu.filter((curr)=>{
             return(curr.category===Data)
         })
         setMenuData(modiData)
     }
    
    return (
        <>
            <Navigation filterItem={filterItem} newData={newData}></Navigation>
            <MenuCard menuData={menuData}/>
        </>
    )
}

export default Resturant

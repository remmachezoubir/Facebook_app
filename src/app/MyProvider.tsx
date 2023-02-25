"use client"
import React , {useContext , createContext} from 'react'

interface contType{
    HandlePage :(page:any , e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>void,
    userPage:any,
    topLogo:boolean
}
 const Mycontext =createContext<contType>({
    userPage:"home",
    HandlePage:()=>{} ,
    topLogo:true
})
export default function MyProvider({children}) {
    
    const [userPage , setUserPage]=React.useState("home")
    const [topLogo , settopLogo]=React.useState(true) 
    
      const HandlePage=(page:any , e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        //todo learn something about the events
        setUserPage(page)
        if(page === "home"){
          settopLogo(true)
          return
        }
        settopLogo(false)
      }
  return (
    <Mycontext.Provider value={{ userPage, HandlePage ,topLogo}}>
        {children}
    </Mycontext.Provider>
    )
}
export const setStateContext=()=>useContext(Mycontext)

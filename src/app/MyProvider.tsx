"use client"
import React , {useContext , createContext , ReactNode} from 'react'

interface Pageprops{
  children : ReactNode;
}
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
const MyProvider:React.FC<Pageprops>=({children})=> {
    
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
export default MyProvider
export const useStateContext=()=>useContext(Mycontext)

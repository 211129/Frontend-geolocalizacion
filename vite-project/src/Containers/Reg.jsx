import Navbar from "../Components/Navbar"
import Header from "../Components/Header"
import SectionReg from "../Components/SectionReg"


function Reg({children}){
    return(
        <>
       
       <Header></Header>
        {children}
     
      <SectionReg></SectionReg>
        </>

    )
}

export default Reg;
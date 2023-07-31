import  SectionLog from "../Components/SectionLog"
import Navbar from "../Components/Navbar";
import Header from "../Components/Header"


function LoyoutLog({children}){

  return(
    <>
      <Header></Header>
        {children}
      <SectionLog></SectionLog>
    </>
  )
}

export default LoyoutLog;
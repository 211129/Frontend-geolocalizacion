import Reg from "../Containers/Reg";
import Footer from "../Components/Footer"


function Register({children}){

  return(  
    <>
     <Reg></Reg>
       {children}
     <Footer></Footer>
     
    </>
  )
}

export default Register;
import Footer from "../Components/Footer";
import LoyoutLog from "../Containers/LoyoutLog";

function Login({children}){

  return(
    <>
      <LoyoutLog></LoyoutLog>
        {children}
      <Footer></Footer> 
    </>
  )
}

export default Login;
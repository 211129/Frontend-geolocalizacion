import Loyout1 from "../Containers/Loyout1"
import Footer from "../Components/Footer"

function Home({children}){

  return(
  
    <>
      <Loyout1></Loyout1>
       {children}
      <Footer></Footer>
    </>
 
  )
    
}

export default Home;
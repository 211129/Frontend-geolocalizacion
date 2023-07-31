import Header from "../Components/Header";
import Footer from "../Components/Footer";
import SectionMapa from "../Components/SectionMapa";

function Mapa({children}){
    return(
        <>
         <Header></Header>
         <SectionMapa></SectionMapa>
           {children}
         <Footer></Footer>
        </>
    )
}

export default Mapa;
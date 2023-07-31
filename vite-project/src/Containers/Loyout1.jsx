import Header from "../Components/Header"
import Section from "../Components/Section"



function Loyout({children}){


    return(
        <>
         <Header></Header>
           {children}
         <Section></Section>
        </>
    )
}

export default Loyout;
import { Link } from 'react-router-dom';
import '../assets/Styles/Section.css';

function Section(){


    return(

    <div>
     < section id="home">
         <div className="inner-width">
            <div className="content">
                <div className='buttons'>
                 <Link to="#" > </Link>
                 <Link to="#"></Link>
                 <marquee behavior="scroll" direction="left">¡Localiza tu auto en estos momentos!</marquee>
                </div>
            </div>
         </div>
       </section>
      </div>


    )
}

export default Section;


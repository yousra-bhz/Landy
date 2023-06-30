
import '../App.css';
import image1 from '../assets/developer.svg';

function Compo1 (){
    
    return(
        <div className='page1 animation1' id='about'>
        <div className="container">
           <div className='right'>
            <h1>
            Landing page template for developers & startups
            </h1>

            <p>Beautifully designed templates using React.js, ant design and styled-components! Save weeks of time and build your landing page in minutes.</p>
             

             <div className='buttons'>
                <button className='btn-one'>Explore</button>
                <button className='btn-two'>Learn more</button>
             </div>
           </div>

           <div className='left'>
            <img src={image1} alt='work' />
           </div>
        </div>
        </div>
    )
}

export default Compo1;
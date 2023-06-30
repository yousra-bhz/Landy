
import '../App.css';
import image1 from '../assets/waving.svg';

function Compo5(){


    
    return(
        <div className='page5'>
        <div className="container">
           <div className='right'>
            <h1>
            Ready made sections
            </h1>

            <p>Landy comes with a set of ready to use sections to help you easily create a landing page for your own brand, with all the content your startup desires. In order to replace any dummy elements (text, image, etc..) all you need to do is go to content folder and input your real content.</p>
           </div>

           <div className='left'>
            <img src={image1} alt='work'/>
           </div>
        </div>
        </div>
    )
}

export default Compo5;
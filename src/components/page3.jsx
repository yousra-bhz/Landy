
import '../App.css';
import image1 from '../assets/graphs.svg';
import image2 from '../assets/notes.svg';

function Compo3(){



    
    return(
        <div className='page3' id='product'>
        <div className="container">
           <div className='right'>
            <h1>
            Light, fast & responsive
            </h1>

            <p>This template is ready to use, so you don't need to change anything at a component level, unless you want to customize the default styling.</p>
             

             <div className='cards'>
                <div className='card'>
                   <img src={image2} alt='ombre' />
                   <h5>
                   WHY ANTD?
                   </h5>
                   <p>
                   Ant Design is a React UI library that has a lot of easy-to-use components for building elegant UI.
                   </p>
                    </div>

                    <div className='card'>
                   <img src={image2} alt='ombre' />
                   <h5>
                   WHY STYLED-COMPONENTS?
                   </h5>
                   <p>
                   Styled Components gives you total control over your components.
                   </p>
                    </div>
              
             </div>
           </div>

           <div className='left'>
            <img src={image1} alt='work' />
           </div>
        </div>
        </div>
    )
}

export default Compo3;
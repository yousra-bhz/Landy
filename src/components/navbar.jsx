import { useState } from 'react';
import '../App.css';
import image1 from '../assets/menu-line.svg';
import image2 from '../assets/close-fill.svg';

function Navbar (){
       const[mot , setMot] = useState("none");
    return(
        <div>
   <header className='navbar'>
    <h1>Landy</h1>
    <ul>
        <li>
            <a href='#about'>
             About
            </a>
        </li>

        <li>
            <a href='#mission'>
             Mission
            </a>
        </li>

        <li>
            <a href='#Product'>
             Product
            </a>
        </li>

        <li>
            <a href='#contact'>
             Contact
            </a>
        </li>
    </ul>
    <button  className='show-btn' onClick={() => {
        setMot("block");
    }}><img src={image1} alt='show' /></button>

    
   </header>

   <div className='responsive' style={{display: mot}}>
   <button className='res-btn' onClick={()=> {
            setMot("none");
        }}><img src={image2} alt='hide' /></button>
        
        <ul>
            <li>
                <a href='#about'>
                 About
                </a>
            </li>

            <li>
                <a href='#mission'>
                  Mission
                </a>
            </li>

            <li>
                <a href='#product'>
                       Product
                </a>
            </li>

            <li>
                <a href='#contact'>
                     Contact
                </a>
            </li>
        </ul>
       
    </div>
        </div>
    )
}

export default Navbar;
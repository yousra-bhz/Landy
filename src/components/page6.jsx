
import '../App.css';

function Compo6(){

    
    return(
        <div className='page6' id='contact'>
        <div className="container" >
           <div className='right'>
            <h1>
            Contact form
            </h1>

            <p>The following form demonstrates form validation in action. Contact form component reduces the amount of time it is being re-rendered by the user as it embraces uncontrolled form validation to reduce any unnecessary performance penalty.</p>
           </div>

           <div className='left'>
            <label>Name</label>
            <input type='email' placeholder='Your Name'></input>
            <label>Email</label>
            <input type='text' placeholder='Your Email'></input>
            <label>Message</label>
            <input type='text' placeholder='Your Message'></input>
            <button>Submit</button>





           </div>
        </div>
        </div>
    )
}

export default Compo6;
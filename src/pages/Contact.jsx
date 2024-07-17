import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import "./Contact"
function Contact() {
    const navigate = useNavigate()
    function handelForm(e){
        e.preventDefault()
        emailjs.sendForm("service_inlpiov","template_cpz177r", e.target, "O82qi5oKiihEX7ewy")
        .then(Swal.fire({
            position: "middle-center",
            icon: "success",
            title: "Thank you for Contact with us",
            showConfirmButton: false,
            timer: 3000
          }))
        .then(navigate("/"))
        .catch(err=>console.log(err.text))
    }
    return ( 
        <>
        <div className='main-section d-flex justify-content-center align-items-center'>
        <div className="d-flex justify-content-center align-items-center  w-50  mx-auto bg-dark border border-danger my-3 text-danger fw-bold" style={{height:"70vh"}}>
            <form className="w-75" onSubmit={handelForm}>  
                <div className="form-group my-2 py-2">
                <input type="hidden" name="contact_number" value="697483"/>
                <label>Name</label>
                <input placeholder='Enter your name' type="text" name="user_name"  className="form-control my-1"/>
                </div>
                <div className="form-group my-2">
                <label>Email</label>
                <input placeholder='Enter your email' type="email" name="user_email" className="form-control my-1"/>
                </div>
                <div className="form-group my-2">
                <label>Message</label>
                <textarea placeholder='Enter your message' name="message" className="form-control my-1"></textarea>
                </div>
                <input type="submit" value="Send Email" className="btn btn-danger mt-2 mb-4"/>
            </form>
        </div>
        </div>
        </>
     );
}

export default Contact;
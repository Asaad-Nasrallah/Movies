/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

function Error() {
    const navigate = useNavigate()
    useEffect(()=>{
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Page Not Found!",
          }).then(navigate("/"));
    },[])
    return ( 
    <></>
     );
}

export default Error;
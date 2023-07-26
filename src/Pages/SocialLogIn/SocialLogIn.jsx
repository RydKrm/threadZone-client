import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";


const SocialLogIn = () => {
    const { googleSignIn, facebookSignIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser)
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'login Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .then(() => {
                navigate(from, { replace: true })
            })
    }

    const handleFacebookSignIn = () => {
        facebookSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser)
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Login Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .then(() => {
                navigate(from, { replace: true })
            })
    }
    return (
        <div>
            {/* add google login field */}

            <div className="w-full text-center my-8">
                <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline"><FaGoogle></FaGoogle></button>
                <button onClick={handleFacebookSignIn} className="btn btn-circle btn-outline ms-3"><FaFacebookF /></button>
            </div>


        </div>
    );
};

export default SocialLogIn;
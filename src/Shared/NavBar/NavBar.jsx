import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";
const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate()
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
        navigate('/')
    }

    const [categoryList,setCategoryList] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:5000/getAllCategory')
        .then(res=>{
            setCategoryList(res.data);
           // console.log("all categoty ",res.data)
        })
        .catch(err=> console.log(err));
    },[])
    
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li>
                                <a>Category</a>
                                <ul className="p-2">

                                    

                                {  categoryList.map((cat)=> 
                                <li key={cat._id} className="my-2 w-32 px-2">  <Link className="bg-gray-100" 
                                 
                                to={`/category/${cat.category}`}>{cat.category}</Link></li>
                                )
                                }

                                </ul>
                                
                            </li>
                            <li><Link to='/shopList'>Shop list</Link></li>
                            <li><Link to='/shopCart'>Shopping Cart</Link></li>
                            <li><Link to='/product'>Product list</Link></li>
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-2xl font-bold">𝒯𝒽𝓇𝑒𝒶𝒹𝒵𝑜𝓃𝑒 𝐸𝓂𝒶𝓇𝓉</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li tabIndex={0}>
                            <details>
                                <summary>Category</summary>
                                <ul className="p-2 z-50">
                                 {  categoryList.map((cat)=> 
                                <li key={cat._id} className="my-2 w-32 px-2">  <Link className="bg-gray-100" 
                                 
                                to={`/category/${cat.category}`}>{cat.category}</Link></li>
                                )
                                }
                                </ul>
                            </details>
                        </li>
                        <li><Link to='/shopList'>Shop list</Link></li>
                        <li><Link to='/shopCart'>Shopping Cart</Link></li>
                        <li><Link to='/product'>Product list</Link></li>
                    </ul>
                </div>

                <div className="navbar-end">
                    {
                        user ? <>
                            <div style={{
                                width: "25px",
                                height: "25px",
                                borderRadius: "50%", // This will create a circular shape
                                overflow: "hidden" // To clip the image within the circular container
                            }}>
                                <img
                                    src={user.photoURL}
                                    alt="User"
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                            </div>
                            <li><Link to='/dashboard'>Dashboard</Link></li>
                            <button onClick={handleLogOut} className="btn btn-ghost btn-sm">LogOut</button>
                        </> : <>
                            <li><Link to="/login">Login</Link></li>
                        </>
                    }
                </div>
            </div>

        </div>
    );
};

export default NavBar;


{/*  */ }
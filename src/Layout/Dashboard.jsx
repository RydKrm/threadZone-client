import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { GrUserManager } from 'react-icons/gr';

const Dashboard = () => {
    const { user } = useContext(AuthContext)
    console.log(user?.photoURL, user?.displayName)
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <div className='menu p-4 w-80 h-full text-base-content'>
                        <div className="bg-base-200 mb-5 rounded-md">
                            <div className='flex items-center gap-4 '>
                                <img className=' ps-5  w-25 h-[40px]' src={user?.photoURL} alt="" />
                                <div className='pt-5 pb-5 pl-5'>
                                    <h2 className='text-xl'>Hello...</h2>
                                    <h2 className='text-2xl font-bold'>{user?.displayName}</h2>
                                </div>
                            </div>
                        </div>
                        <ul className="bg-base-200 rounded-md p-5 pl-10">
                            <li className="">
                                <span className="text-red-600">Manage Account</span>
                            </li>
                            <li><Link to=''>Profile Information</Link></li>
                            <li><Link to='/dashboard/address'>Manage Address</Link></li>
                            <li><Link to=''>Change Password</Link></li>
                            <li className="mt-5">
                                <span className="text-red-600">My Order History</span>
                            </li>
                            <li><Link to=''>My Returns</Link></li>
                            <li><Link to=''>My Cancellations</Link></li>
                            <li><Link to=''>My Review</Link></li>
                            <li className="mt-5">

                                <span className="text-red-600">Payment Method</span>
                            </li>
                            <li><Link to=''>Voucher</Link></li>
                            <li className="mt-5">

                                <Link className="text-red-600">My WishList</Link>
                            </li>


                        </ul>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;
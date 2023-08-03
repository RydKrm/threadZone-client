import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import useAdmin from '../Component/hook/useAdmin';
import useSeller from '../Component/hook/useSeller';
import { FaHome } from 'react-icons/fa';

const Dashboard = () => {
    const { user } = useContext(AuthContext)

    const [isAdmin, isAdminLoading] = useAdmin();
    const [isSeller, isSellerLoading] = useSeller();
    // console.log(user?.photoURL, user?.displayName)

    if (isAdminLoading || isSellerLoading) {
        return <div>Loading...</div>;
    }
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
                        <div className="bg-base-200 mb-5 h-[15%] rounded-md">
                            <div className='flex items-center gap-4 '>
                                <img className=' ps-5  w-25 h-[40px]' src={user?.photoURL} alt="" />
                                <div className='pt-5 pb-5 pl-5'>
                                    <h2 className='text-xl'>Hello...</h2>
                                    <h2 className='text-2xl font-bold'>{user?.displayName}</h2>
                                </div>
                            </div>
                        </div>
                        <ul className="bg-base-200 rounded-md h-[80%] p-5 pl-10">
                            {
                                isAdmin ? (
                                    <>
                                        <li><Link to='/'><FaHome />Home</Link></li>
                                        <li><Link to='/dashboard/manageUsers'>Manage Users</Link></li>
                                        <li><Link to='/dashboard'>Category Status</Link></li>
                                        <li><Link to='/dashboard'>Shop Add Request</Link></li>
                                        <li><Link to='/dashboard'>Product Add Request </Link></li>
                                        <li><Link to='/dashboard'>View All Product</Link></li>
                                        <li><Link to='/dashboard'>View All Shop</Link></li>

                                    </>
                                ) : (isSeller ? (
                                    <>
                                        <li><Link to='/'><FaHome />Home</Link></li>
                                        <li><Link to='/dashboard'>Complete Order List</Link></li>
                                        <li><Link to='/dashboard'>Return product List</Link></li>
                                        <li><Link to='/dashboard'>Add Product</Link></li>
                                        <li><Link to='/dashboard'>Set Status</Link></li>
                                        <li><Link to='/dashboard'>Change Product Info</Link></li>
                                        <li><Link to='/dashboard'>Change Shop Info</Link></li>
                                    </>
                                ) : (
                                    <>
                                        <li className="">
                                            <span className="text-red-600">Manage Account</span>
                                        </li>
                                        <li><Link to=''>Profile Information</Link></li>
                                        <li><Link to='/dashboard/address'>Manage Address</Link></li>
                                        <li><Link to=''>Change Password</Link></li>
                                      <li><Link to='/dashboard/returnList'>My Returns</Link></li>
                            <li><Link to='/dashboard/orderList'>My Orders</Link></li>
                            <li><Link to='/dashboard/previousOrderList'>My Previous Orders</Link></li>
                            <li><Link to='/dashboard/reviewList'>My Review</Link></li>
                            <li><Link to='/dashboard/addProduct'>Add Product</Link></li>
                            <li><Link to='/dashboard/addShop'>Create Shop</Link></li>
                            <li><Link to='/dashboard/editCategory'>Admin Edit Category</Link></li>
                                        <li className="mt-5">

                                            <span className="text-red-600">Payment Method</span>
                                        </li>
                                        <li><Link to=''>Voucher</Link></li>
                                        <li className="mt-5">

                                            <Link className="text-red-600">My WishList</Link>
                                        </li>
                                        <li><Link to='/'>Home</Link></li>
                                    </>
                                ))}

                        </ul>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;
import React from 'react';

const Orders = () => {
    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4">Your Orders</h2>
            <div className="space-y-4">
                {/* Order #12345 */}
                <div className="p-4 bg-gray-50 rounded-lg border">
                    <div className="flex justify-between items-center">
                        <div>
                            <h3 className="text-lg font-semibold">Order #12345</h3>
                            <p className="text-gray-600">Ordered on: August 20, 2024</p>
                            <p className="text-gray-600">Shipping Date: August 22, 2024</p>
                            <p className="text-gray-600">Delivered on: August 25, 2024</p>
                        </div>
                        <div className="text-right">
                            <p className="text-gray-800 font-semibold">Total: Rs.150.00</p>
                            <p className="text-sm text-gray-600">Status: <span className="text-green-500">Delivered</span></p>
                        </div>
                    </div>
                    <div className="mt-4">
                        <p className="text-gray-600">Products:</p>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <img src="speaker.jpg" alt="speaker" className="w-16 h-16 object-cover rounded-md" />
                                <div className="ml-4">
                                    <p className="font-semibold">Product A</p>
                                    <p className="text-gray-600">Rs.50.00</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <img src="shoes.jpg" alt="shoes" className="w-16 h-16 object-cover rounded-md" />
                                <div className="ml-4">
                                    <p className="font-semibold">Product B</p>
                                    <p className="text-gray-600">Rs.60.00</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <img src="watches.jpg" alt="watches" className="w-16 h-16 object-cover rounded-md" />
                                <div className="ml-4">
                                    <p className="font-semibold">Product C</p>
                                    <p className="text-gray-600">Rs.40.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Order #12346 */}
                <div className="p-4 bg-gray-50 rounded-lg border">
                    <div className="flex justify-between items-center">
                        <div>
                            <h3 className="text-lg font-semibold">Order #12346</h3>
                            <p className="text-gray-600">Ordered on: August 22, 2024</p>
                            <p className="text-gray-600">Shipping Date: August 24, 2024</p>
                            <p className="text-gray-600">Delivered on: August 27, 2024</p>
                        </div>
                        <div className="text-right">
                            <p className="text-gray-800 font-semibold">Total: Rs.200.00</p>
                            <p className="text-sm text-gray-600">Status: <span className="text-green-500">Delivered</span></p>
                        </div>
                    </div>
                    <div className="mt-4">
                        <p className="text-gray-600">Products:</p>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <img src="mobile.jpg" alt="mobile" className="w-16 h-16 object-cover rounded-md" />
                                <div className="ml-4">
                                    <p className="font-semibold">Product D</p>
                                    <p className="text-gray-600">Rs.100.00</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <img src="books.jpg" alt="books" className="w-16 h-16 object-cover rounded-md" />
                                <div className="ml-4">
                                    <p className="font-semibold">Product E</p>
                                    <p className="text-gray-600">Rs.100.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orders;

//--------------------------------------------------

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Orders = () => {
//     const [orders, setOrders] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     const saveOrder = async () => {
//         try {
//             const token = localStorage.getItem('token');
//             const response = await axios.post('http://localhost:3000/profile/orders', {}, {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                     'Content-Type': 'application/json',
//                 },
//             });
//             console.log('Order saved successfully', response.data);
//             return true; // Indicate success
//         } catch (err) {
//             // Log the full error response
//             console.error('Error saving order:', err.response ? err.response.data : err.message);
//             return false; // Indicate failure
//         }
//     };
    

//     useEffect(() => {
//         const fetchOrders = async () => {
//             try {
//                 const isSaved = await saveOrder(); // Wait for the order to be saved

//                 if (!isSaved) {
//                     throw new Error('Order could not be saved');
//                 }
            
//                 const token = localStorage.getItem('token'); // Adjust this according to your token storage logic

//                 const response = await axios.get('http://localhost:3000/profile/orders', {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                         'Content-Type': 'application/json',

//                     },
//                 });

//                 console.log('API Response:', response.data); // Log the response data
                
//                 // Check if the response data is an array or contains an orders array
//                 setOrders(Array.isArray(response.data) ? response.data : response.data.orders || []);
//             } catch (err) {
//                 console.error('Error fetching orders:', err);
//                 setError(err.response ? err.response.data : 'Something went wrong');
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchOrders();
//     }, []);

//     if (loading) {
//         return <div>Loading...</div>; // Loading state
//     }

//     if (error) {
//         return <div>Error: {error}</div>; // Error state
//     }

//     return (
//         <div>
//             <h2 className="text-2xl font-semibold mb-4">Your Orders</h2>
//             <div className="space-y-4">
//                 {orders.length === 0 ? (
//                     <p>No orders found.</p> // Message if no orders
//                 ) : (
//                     orders.map(order => (
//                         <div key={order.order_id} className="p-4 bg-gray-50 rounded-lg border">
//                             <div className="flex justify-between items-center">
//                                 <div>
//                                     <h3 className="text-lg font-semibold">Order #{order.order_id}</h3>
//                                     <p className="text-gray-600">Ordered on: {new Date(order.order_date).toLocaleDateString()}</p>
//                                     <p className="text-gray-600">Shipping Date: {new Date(order.shipping_date).toLocaleDateString()}</p>
//                                     <p className="text-gray-600">Delivered on: {new Date(order.delivered_date).toLocaleDateString()}</p>
//                                 </div>
//                                 <div className="text-right">
//                                     <p className="text-gray-800 font-semibold">Total: Rs.{order.total_amount}</p>
//                                     <p className="text-sm text-gray-600">Status: <span className={`text-${order.status === 'Delivered' ? 'green' : 'red'}-500`}>{order.status}</span></p>
//                                 </div>
//                             </div>
//                             <div className="mt-4">
//                                 <p className="text-gray-600">Products:</p>
//                                 <div className="space-y-4">
//                                     {order.products && order.products.length > 0 ? (
//                                         order.products.map(product => (
//                                             <div key={product.product_id} className="flex items-center">
//                                                 <img src={product.image_url} alt={product.name} className="w-16 h-16 object-cover rounded-md" />
//                                                 <div className="ml-4">
//                                                     <p className="font-semibold">{product.name}</p>
//                                                     <p className="text-gray-600">Rs.{product.price}</p>
//                                                 </div>
//                                             </div>
//                                         ))
//                                     ) : (
//                                         <p>No products found in this order.</p>
//                                     )}
//                                 </div>
//                             </div>
//                         </div>
//                     ))
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Orders;
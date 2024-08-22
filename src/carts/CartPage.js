// import { Button } from '@material-tailwind/react';
// import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { clearCart, setToCart } from './cartSlice';
// import { useAddOrderMutation } from '../orders/orderApi';
// import { toast } from 'react-toastify';
// import CustomDialog from './CustomDialog';


// const CartPage = () => {
//   const [addOrder, { isLoading }] = useAddOrderMutation();
//   const [open, setOpen] = useState(false);
//   const handleOpen = () => setOpen(!open);



//   const { carts } = useSelector((state) => state.cartSlice);
//   const dispatch = useDispatch();
//   const total = carts.reduce((a, b) => a + b.qty * b.product_price, 0);




//   const handleSubmit = async () => {
//     try {
//       await addOrder({
//         totalAmount: total,
//         products: carts.map((cart) => ({ product: cart._id, qty: cart.qty }))

//       }).unwrap();
//       dispatch(clearCart());
//       toast.success('successfully added');
//     } catch (err) {
//       console.log(err);
//       toast.error('something went wrong');
//     }
//   }

//   return (
//     <div className='p-5'>
//       {carts.length === 0 ? <h1>list is empty add some</h1> :
//         <div>

//           <div >
//             {carts.map((cart) => {
//               return <div className='grid grid-cols-4 gap-12' key={cart._id}>
//                 <img className='w-full h-36' src={`${cart.product_image}`} alt="" />
//                 <div>
//                   <select defaultValue={cart.qty} name="qty" id="" onChange={(e) => {

//                     dispatch(setToCart({ ...cart, qty: Number(e.target.value) }));
//                   }}>
//                     {[...Array(cart.countInStock).keys()].map((c) => {
//                       return <option key={c + 1} value={c + 1}>{c + 1}</option>
//                     })}
//                   </select>
//                 </div>
//                 <h1>Rs.{cart.product_price}</h1>
//               </div>
//             })}

//           </div>

//           <div className='flex justify-between'>
//             <h1>Total</h1>
//             <p>{total}</p>
//           </div>
//           <Button loading={isLoading} onClick={handleOpen} className='mt-10'>Place An Order</Button>
//           <CustomDialog open={open} handleOpen={handleOpen} handleConfirm={handleSubmit} />
//         </div>}

//     </div>
//   )
// }

// export default CartPage
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, setToCart } from './cartSlice';
import { useAddOrderMutation } from '../orders/orderApi';
import { toast } from 'react-toastify';
import CustomDialog from './CustomDialog';

const CartPage = () => {
  const [addOrder, { isLoading }] = useAddOrderMutation();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const { carts } = useSelector((state) => state.cartSlice);
  const dispatch = useDispatch();
  const total = carts.reduce((a, b) => a + b.qty * b.product_price, 0);

  const handleSubmit = async () => {
    try {
      await addOrder({
        totalAmount: total,
        products: carts.map((cart) => ({ product: cart._id, qty: cart.qty }))
      }).unwrap();
      dispatch(clearCart());
      toast.success('Successfully added');
    } catch (err) {
      console.log(err);
      toast.error('Something went wrong');
    }
  };

  return (
    <div className='p-5'>
      {carts.length === 0 ? (
        <h1 className='text-center text-xl font-semibold'>Your cart is empty. Add some items!</h1>
      ) : (
        <div>
          <div className='space-y-6'>
            {carts.map((cart) => (
              <div className='grid grid-cols-4 gap-6 items-center border-b pb-4' key={cart._id}>
                <img className='w-full h-36 object-cover' src={`${cart.product_image}`} alt={cart.product_name} />
                <div>
                  <select
                    defaultValue={cart.qty}
                    name="qty"
                    className='p-2 border rounded-md'
                    onChange={(e) => {
                      dispatch(setToCart({ ...cart, qty: Number(e.target.value) }));
                    }}
                  >
                    {[...Array(cart.countInStock).keys()].map((c) => (
                      <option key={c + 1} value={c + 1}>{c + 1}</option>
                    ))}
                  </select>
                </div>
                <h1 className='text-lg font-semibold'>Rs. {cart.product_price}</h1>
              </div>
            ))}
          </div>

          <div className='flex justify-between mt-6 border-t pt-4'>
            <h1 className='text-xl font-semibold'>Total</h1>
            <p className='text-xl font-semibold'>Rs. {total}</p>
          </div>
          <button
            onClick={handleOpen}
            disabled={isLoading}
            className={`mt-10 px-4 py-2 text-white rounded-md ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-black hover:bg-green-600'}`}
          >
            {isLoading ? 'Processing...' : 'Place An Order'}
          </button>
          <CustomDialog open={open} handleOpen={handleOpen} handleConfirm={handleSubmit} />
        </div>
      )}
    </div>
  );
};

export default CartPage;

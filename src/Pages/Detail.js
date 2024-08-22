// import React from 'react'
// import { useNavigate, useParams } from 'react-router'
// import { Button, Card, Option, Select, Typography } from '@material-tailwind/react';
// import { useFormik } from 'formik';
// import { useDispatch, useSelector } from 'react-redux';
// import { setToCart } from '../carts/cartSlice';
// import { useGetProductByIdQuery } from '../Api/productApi';

// const Detail = () => {
//   const { id } = useParams();
//   const { data, isLoading, error } = useGetProductByIdQuery(id);



//   if (isLoading) {
//     return <h1>Loading....</h1>
//   }


//   return (
//     <>
//       <div className='grid grid-cols-3 p-4 items-center gap-10'>

//         <div className="image">
//           <img className='w-full' src={`${data.product_image}`} alt="" />
//         </div>
//         <div className="info space-y-3">
//           <h1>{data.product_name}</h1>
//           <p>{data.product_detail}</p>
//           <p>Rs.{data.product_price}</p>
//         </div>

//         {data && <AddCart product={data} />}




//       </div>

//     </>
//   )
// }

// export default Detail








// export const AddCart = ({ product }) => {
//   const dispatch = useDispatch();
//   const nav = useNavigate();
//   const { carts } = useSelector((state) => state.cartSlice);

//   const isExist = carts.find((cart) => cart._id === product._id);

//   const formik = useFormik({
//     initialValues: {
//       qty: isExist?.qty || 1
//     }
//   });




//   const handleSubmit = () => {
//     dispatch(setToCart({ ...product, qty: Number(formik.values.qty) }));
//     nav('/carts');
//   }

//   return (
//     <Card className="h-full w-full overflow-scroll">
//       <table className="w-full min-w-max table-auto text-left">
//         <thead>
//           <tr>

//             <th

//               className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
//             >
//               <Typography
//                 variant="small"
//                 color="blue-gray"
//                 className="font-normal leading-none opacity-70"
//               >
//                 Product Name
//               </Typography>
//             </th>
//             <th

//               className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
//             >
//               <Typography
//                 variant="small"
//                 color="blue-gray"
//                 className="font-normal leading-none opacity-70"
//               >
//                 {product.product_name}
//               </Typography>
//             </th>

//           </tr>

//           <tr>

//             <th

//               className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
//             >
//               <Typography
//                 variant="small"
//                 color="blue-gray"
//                 className="font-normal leading-none opacity-70"
//               >
//                 Qty
//               </Typography>
//             </th>
//             <th

//               className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
//             >
//               <div>

//                 <select defaultValue={formik.values.qty} name="qty" id="" onChange={(e) => formik.setFieldValue('qty', e.target.value)}>
//                   {[...Array(product.countInStock).keys()].map((c) => {
//                     return <option key={c + 1} value={c + 1}>{c + 1}</option>
//                   })}
//                 </select>
//               </div>
//             </th>

//           </tr>

//         </thead>



//       </table>
//       <div className='flex justify-center pt-7'>
//         <Button onClick={handleSubmit}>Add To Cart</Button>
//       </div>
//     </Card>
//   )
// }
import React from 'react';
import { useNavigate, useParams } from 'react-router';
import { Button, Card, Typography } from '@material-tailwind/react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { setToCart } from '../carts/cartSlice';
import { useGetProductByIdQuery } from '../Api/productApi';

const Detail = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetProductByIdQuery(id);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { carts } = useSelector((state) => state.cartSlice);

  // Default form values
  const initialQty = data ? (carts.find((cart) => cart._id === data._id)?.qty || 1) : 1;

  // Formik hook call at top level
  const formik = useFormik({
    initialValues: {
      qty: initialQty
    }
  });

  // Handle form submission
  const handleSubmit = () => {
    if (data) {
      dispatch(setToCart({ ...data, qty: Number(formik.values.qty) }));
      nav('/carts');
    }
  }

  // Display loading state
  if (isLoading) {
    return <h1>Loading....</h1>
  }

  if (!data) {
    return <h1>Error: Product not found</h1>
  }

  return (
    <div className='grid grid-cols-3 p-4 items-center gap-10'>
      {/* Product Image */}
      <div className="col-span-1">
        <img className='w-full' src={`${data.product_image}`} alt={data.product_name} />
      </div>

      {/* Product Info */}
      <div className="col-span-1 space-y-3">
        <Typography variant="h1" className="text-2xl font-semibold">{data.product_name}</Typography>
        <Typography variant="p" className="text-lg">{data.product_detail}</Typography>
        <Typography variant="p" className="text-lg font-bold">Rs.{data.product_price}</Typography>
      </div>

      {/* Add to Cart */}
      <div className="col-span-1">
        <Card className="h-full w-full p-4 overflow-hidden">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                    Product Name
                  </Typography>
                </th>
                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                    {data.product_name}
                  </Typography>
                </th>
              </tr>

              <tr>
                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                    Qty
                  </Typography>
                </th>
                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <select
                    className="block w-full border border-gray-300 rounded-md p-2"
                    defaultValue={formik.values.qty}
                    name="qty"
                    onChange={(e) => formik.setFieldValue('qty', e.target.value)}
                  >
                    {[...Array(data.countInStock).keys()].map((c) => (
                      <option key={c + 1} value={c + 1}>{c + 1}</option>
                    ))}
                  </select>
                </th>
              </tr>
            </thead>
          </table>
          <div className='flex justify-center pt-7'>
            <Button onClick={handleSubmit} className="bg-black text-white hover:bg-blue-600">Add To Cart</Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Detail;

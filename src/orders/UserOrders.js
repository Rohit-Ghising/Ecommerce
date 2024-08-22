// import React from 'react'
// import { useGetOrderByUserQuery, useGetOrdersQuery } from './orderApi';
// import { Button, Card, Typography } from "@material-tailwind/react";
// import { useNavigate } from 'react-router-dom/dist';


// const TABLE_HEAD = ["ProductId", "Total", "CreatedAt", ''];


// const UserOrders = ({ user }) => {
//   const nav = useNavigate();
//   const { isLoading, error, data } = useGetOrdersQuery(user);
//   if (isLoading) {
//     return <h1>Loading....</h1>
//   }

//   return (
//     <div className='col-span-2'>
//       <Card className="h-full w-full overflow-scroll">
//         <table className="w-full min-w-max table-auto text-left">
//           <thead>
//             <tr>
//               {TABLE_HEAD.map((head) => (
//                 <th
//                   key={head}
//                   className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
//                 >
//                   <Typography
//                     variant="small"
//                     color="blue-gray"
//                     className="font-normal leading-none opacity-70"
//                   >
//                     {head}
//                   </Typography>
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {data?.data.map(({ totalAmount, createdAt, _id, }, index) => {
//               const isLast = index === data.length - 1;
//               const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
//               return (
//                 <tr key={_id}>
//                   <td className={classes}>
//                     <Typography
//                       variant="small"
//                       color="blue-gray"
//                       className="font-normal"
//                     >
//                       {_id}
//                     </Typography>
//                   </td>
//                   <td className={classes}>
//                     <Typography
//                       variant="small"
//                       color="blue-gray"
//                       className="font-normal"
//                     >
//                       {totalAmount}
//                     </Typography>
//                   </td>
//                   <td className={classes}>
//                     <Typography
//                       variant="small"
//                       color="blue-gray"
//                       className="font-normal"
//                     >
//                       {createdAt}
//                     </Typography>
//                   </td>

//                   <td className={classes}>
//                     <Typography
//                       variant="small"
//                       color="blue-gray"
//                       className="font-normal"
//                     >
//                       <Button
//                         onClick={() => nav(`/orders/${_id}`)}
//                         size='sm' color='green'>Detail</Button>
//                     </Typography>
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </Card>


//     </div>
//   )
// }

// export default UserOrders
import React from 'react';
import { useGetOrdersQuery } from './orderApi';
import { useNavigate } from 'react-router-dom';

const TABLE_HEAD = ["ProductId", "Total", "CreatedAt", ''];

const UserOrders = ({ user }) => {
  const nav = useNavigate();
  const { isLoading, error, data } = useGetOrdersQuery(user);

  if (isLoading) {
    return <h1 className="text-center text-xl">Loading....</h1>;
  }

  if (error) {
    return <h1 className="text-center text-xl text-red-500">Error loading data.</h1>;
  }

  return (
    <div className='col-span-2'>
      <div className="overflow-x-auto">
        <div className="min-w-full bg-white shadow-md rounded-lg">
          <table className="w-full table-auto text-left border-collapse">
            <thead>
              <tr className="bg-gray-100 border-b">
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="px-4 py-2 border-r text-gray-600 font-medium"
                  >
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data?.data.map(({ totalAmount, createdAt, _id }, index) => {
                const isLast = index === data.length - 1;
                const rowClass = isLast ? "px-4 py-2" : "px-4 py-2 border-b";
                return (
                  <tr key={_id} className="hover:bg-gray-50">
                    <td className={rowClass}>
                      <span className="text-gray-800">{_id}</span>
                    </td>
                    <td className={rowClass}>
                      <span className="text-gray-800">{totalAmount}</span>
                    </td>
                    <td className={rowClass}>
                      <span className="text-gray-800">{createdAt}</span>
                    </td>
                    <td className={rowClass}>
                      <button
                        onClick={() => nav(`/orders/${_id}`)}
                        className="text-white bg-green-500 hover:bg-green-600 px-3 py-1 rounded"
                      >
                        Detail
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserOrders;

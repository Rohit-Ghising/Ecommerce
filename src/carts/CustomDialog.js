// import React from "react";
// import {
//   Button,
//   Dialog,
//   DialogHeader,
//   DialogBody,
//   DialogFooter,
// } from "@material-tailwind/react";
// const CustomDialog = ({ open, handleOpen, handleConfirm }) => {

//   return (
//     <>

//       <Dialog open={open} handler={handleOpen}>
//         <DialogHeader>Are You sure ?</DialogHeader>
//         <DialogBody>
//           You want to place order
//         </DialogBody>
//         <DialogFooter>
//           <Button
//             variant="text"
//             color="red"
//             onClick={handleOpen}
//             className="mr-1"
//           >
//             <span>Cancel</span>
//           </Button>
//           <Button variant="gradient" color="green" onClick={() => {
//             handleConfirm();
//             handleOpen();
//           }}>
//             <span>Confirm</span>
//           </Button>
//         </DialogFooter>
//       </Dialog>

//     </>
//   )
// }

// export default CustomDialog
import React from 'react';
import ReactDOM from 'react-dom';
import { XIcon } from '@heroicons/react/outline'; // Using Heroicons for close icon

const CustomDialog = ({ open, handleOpen, handleConfirm }) => {
  if (!open) return null;

  return ReactDOM.createPortal(
    <div className='fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50'>
      <div className='bg-white p-6 rounded-lg shadow-lg w-80 max-w-sm'>
        <button
          onClick={handleOpen}
          className='absolute top-3 right-3 p-1 text-gray-600 hover:text-gray-900'
        >
          <XIcon className='h-6 w-6' />
        </button>
        <h2 className='text-lg font-semibold mb-4'>Confirm Your Order</h2>
        <p className='mb-6'>Are you sure you want to place this order? This action cannot be undone.</p>
        <div className='flex justify-end space-x-4'>
          <button
            onClick={handleConfirm}
            className='bg-black text-white px-4 py-2 rounded-md hover:bg-green-600'
          >
            Confirm
          </button>
          <button
            onClick={handleOpen}
            className='bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400'
          >
            Cancel
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default CustomDialog;

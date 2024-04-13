'use client';

import { enqueueSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react';

const manageUser = () => {

  const [tableItems, setTableItems] = useState([]);

  const userDetails = async() => {
    const res = await fetch("http://localhost:5000/user/getall")
    console.log(res.status);
    const data = await res.json();
    console.log(data);
    setTableItems(data);
  }


  useEffect(() => {
   userDetails()
  },[])

  {/* for delete user*/}

   const deleteUser = async(id) => {
    console.log(id);
    const res = await fetch("http://localhost:5000/user/delete/" + id , {
      method:"DELETE",
    });
    console.log(res.status);
    if(res.status === 200){
      enqueueSnackbar("user delete successfully", {variant:"success"})
      userDetails();
    }else{
      enqueueSnackbar("something went wrong", {variant:"warning"})
    }

   }

 

  const displayUser = () => {
    return(  <table className="w-full table-auto text-sm text-left">
    <thead className="bg-gray-50 text-gray-600 font-medium border-b">
      <tr>
        <th className="py-3 px-6">Username</th>
        <th className="py-3 px-6">Email</th>
        <th className="py-3 px-6">CreatedAt</th>

        <th className="py-3 pl-2">Action</th>
      </tr>
    </thead>
    <tbody className="text-white divide-y">
      {tableItems.map((item, idx) => (
        <tr key={idx} >
          <td className="px-6 py-4 whitespace-nowrap">{item.username}</td>
          <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
          <td className="px-6 py-4 whitespace-nowrap">{item.createdAt}</td>

          <td className="text-right px-6 whitespace-nowrap">
            <button onClick={e => deleteUser(item._id)}
              
              className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>

    )
  }
 
 
 
  return (
    <div>
      <div className="max-w-screen-lg mx-auto px-4 md:px-8">
        <div className="items-start justify-center md:flex">
          <div className="max-w-lg mt-10">
            <h3 className="text-white text-xl font-bold sm:text-2xl ">
              Users List
            </h3>
            {/* <p className="text-white mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p> */}
          </div>
          {/* <div className="mt-3 md:mt-0">
            <a
              
              className="inline-block px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
            >
              Add member
            </a>
          </div> */}
        </div>
        <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">

          {/*table*/}
          {
            displayUser()
          }
         
        </div>
      </div>

    </div>
  );
};

export default manageUser;

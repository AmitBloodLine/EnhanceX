'use client';
import React from 'react';

const manageUser = () => {
  const tableItems = [
    {
      name: "Liam James",
      email: "liamjames@example.com",
    },
    {
      name: "Olivia Emma",
      email: "oliviaemma@example.com",
    },
    {
      name: "William Benjamin",
      email: "william.benjamin@example.com",
    },
    {
      name: "Henry Theodore",
      email: "henrytheodore@example.com",
    },
    {
      name: "Amelia Elijah",
      email: "amelia.elijah@example.com",
    },
  ];

  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-white text-xl font-bold sm:text-2xl">
            Team members
          </h3>
          <p className="text-white mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="mt-3 md:mt-0">
          <a
            href="javascript:void(0)"
            className="inline-block px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
          >
            Add member
          </a>
        </div>
      </div>
      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">Username</th>
              <th className="py-3 px-6">Email</th>

              <th className="py-3 px-6"></th>
            </tr>
          </thead>
          <tbody className="text-white divide-y">
            {tableItems.map((item, idx) => (
              <tr key={idx}>
                <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>

                <td className="text-right px-6 whitespace-nowrap">
                  <button
                    href="javascript:void()"
                    className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  </div>

    </div>
  );
};

export default manageUser;

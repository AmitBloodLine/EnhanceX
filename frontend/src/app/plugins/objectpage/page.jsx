import React from 'react'

const page = () => {
  return (
    <div>
        <div className='bg-auto bg-center h-96 object-cover'
        style={
            {backgroundImage: `url('https://media.hackerearth.com/blog/wp-content/uploads/2018/08/shutterstock_668209624-1.jpg')`,
            backgroundSize: 'cover',
            
            }}
        >
            
        </div>
        <div className='grid grid-cols-12'>
          <div className='col-span-4'>
            <h3>Plugin Title</h3>
            <p>Plugin Description</p>
          </div>
          <div className='col-span-8'>
            {/* code block */}
            code block here
          </div>
        </div>
    </div>
  )
}

export default page

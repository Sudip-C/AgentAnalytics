
export default function ProductCrad({data}) {

   const { avatar,title,price,description} = data


  return (
      <div className="h-full  rounded-lg shadow hover:shadow-lg">
        <img className='rounded-t-lg w-full h-48 object-cover' src={avatar} alt={title} />
        <div className='p-4 text-left rounded-b-lg  flex flex-col  justify-between'>
          <h1 className='font-bold text-lg '>{title}</h1>
          <p className='text-gray-700'>₹ {price}</p>
          <h3 className='font-medium text-gray-600 '>{description.slice(0,35)}...</h3>          
        </div>
      </div>
  )
}

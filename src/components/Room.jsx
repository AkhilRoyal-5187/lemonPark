import { BsArrowsFullscreen, BsPeople } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Room = ({ room }) => {

  const { id, name, image, size, maxPerson, description, price } = room ?? {};

  return (
    <div className='bg-white shadow-2xl min-h-[500px] group'>

      <div className='overflow-hidden'>
        <img src={image} alt="img" className='group-hover:scale-110 transition-all duration-300 w-full' />
      </div>

      <div className='bg-white shadow-lg max-w-[300px] mx-auto h-[60px] -translate-y-1/2 flex justify-center items-center uppercase font-tertiary tracking-[1px] font-semibold text-base'>

        <div className='flex justify-between w-[80%]'>

          <div className='flex items-center gap-x-2'>
            <div className='text-yellow-500'>
              <BsArrowsFullscreen className='text-[15px]' />
            </div>
            <div className='flex gap-x-1'>
              <div>Size</div>
              <div>{size}m²</div>
            </div>
          </div>

          <div className='flex items-center gap-x-2'>
            <div className='text-yellow-500'>
              <BsPeople className='text-[18px]' />
            </div>
            <div className='flex gap-x-1'>
              <div>Max people</div>
              <div>{maxPerson}</div>
            </div>
          </div>

        </div>

      </div>

      {/* name and description */}
      <div className='text-center'>
        <Link to={`/room/${id}`}>
          <h3 className="h3 text-yellow-600">{name}</h3>
        </Link>

        <p className='max-w-[300px] mx-auto mb-3 lg:mb-6 text-gray-600'>{description.slice(0, 56)}..</p>
      </div>

      {/* button */}
      <Link
        to={`/room/${id}`}
        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded max-w-[240px] mx-auto block duration-300"
      >
        Book now from ${price}
      </Link>

    </div>
  );

};

export default Room;

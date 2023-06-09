import farm from '../assests/categories/barn.png'
import room from '../assests/categories/interior-design.png'
import amazingViews from '../assests/categories/lake.png'
import historicalHomes from '../assests/categories/house.png'
import windmills from '../assests/categories/windmill.png'
import amazingPools from '../assests/categories/pool.png'
import omg from '../assests/categories/ufo.png'
import tropical from '../assests/categories/island.png'
import beachFront from '../assests/categories/vacations.png'
import lakeFront from '../assests/categories/lake.png'
import cabins from '../assests/categories/cabin.png'
import treeHouse from '../assests/categories/treehouse.png'
import nationalPark from '../assests/categories/national-park.png'
import camping from '../assests/categories/tent.png'
import tinyHomes from '../assests/categories/tiny-house.png'
import filter from '../assests/categories/filter.png'

const Categories = () => {
  return (
    <div className='flex my-4 px-10 h-[90px] sticky top-1 bg-white z-40'>
      <div className='flex justify-between  h-[90px] my-auto w-[95%] overflow-y-scroll scrollbar-none'>

        <div className=' py-3 mr-8 hover:border-b-4 '>
            <img src={farm} alt="farm" className='h-6 mx-auto mt-2'/>
            <p className='text-center text-sm my-2'>Farms</p>
        </div>
        <div className='py-3 mr-8 hover:border-b-4'>
            <img src={room} alt='room' className='h-6 mx-auto mt-2'/>
            <p className='text-center text-sm my-2'>Room</p>
        </div>
        <div className='py-3 mr-8 hover:border-b-4'>
            <img src={amazingViews} alt='amazing views' className='h-6  mx-auto mt-2' />
            <p className='text-center text-sm my-2 whitespace-nowrap'>Amazing Views</p>
        </div>
        <div className='py-3 mr-8 hover:border-b-4 '>
            <img src={historicalHomes} alt="historical homes" className='h-6 mx-auto mt-2'/>
            <p className='text-center text-sm my-2 whitespace-nowrap'>Historical Homes</p>
        </div>
        <div className='py-3 mr-8 hover:border-b-4 '>
            <img src={windmills} alt="windmills" className='h-6 mx-auto mt-2'/>
            <p className='text-center text-sm my-2'>Windmills</p>
        </div>
        <div className='py-3 mr-8 hover:border-b-4 '>
            <img src={amazingPools} alt="amazing pools" className='h-6 mx-auto mt-2'/>
            <p className='text-center text-sm my-2 whitespace-nowrap'>Amazing Pools</p>
        </div>
        <div className='py-3 mr-8 hover:border-b-4 '>
            <img src={omg} alt="omg" className='h-6 mx-auto mt-2'/>
            <p className='text-center text-sm my-2'>OMG!</p>
        </div>
        <div className='py-3 mr-8 hover:border-b-4 '>
            <img src={tropical} alt="tropical" className='h-6 mx-auto mt-2'/>
            <p className='text-center text-sm my-2'>Tropical</p>
        </div>
        <div className='py-3 mr-8 hover:border-b-4 '>
            <img src={beachFront} alt="beach front" className='h-6 mx-auto mt-2'/>
            <p className='text-center text-sm my-2'>BeachFront</p>
        </div>
        <div className='py-3 mr-8 hover:border-b-4 '>
            <img src={lakeFront} alt="lake front" className='h-6 mx-auto mt-2'/>
            <p className='text-center text-sm my-2'>LakeFront</p>
        </div>
        <div className='py-3 mr-8 hover:border-b-4 '>
            <img src={cabins} alt="cabins" className='h-6 mx-auto mt-2'/>
            <p className='text-center text-sm my-2'>Cabins</p>
        </div>
        <div className='py-3 mr-8 hover:border-b-4 '>
            <img src={treeHouse} alt="Treehouse" className='h-6 mx-auto mt-2'/>
            <p className='text-center text-sm my-2'>Treehouse</p>
        </div>
        <div className='py-3 mr-8 hover:border-b-4 '>
            <img src={nationalPark} alt="National Parks" className='h-6 mx-auto mt-2'/>
            <p className='text-center text-sm my-2 whitespace-nowrap'>National Park</p>
        </div>
        <div className='py-3 mr-8 hover:border-b-4 '>
            <img src={camping} alt="camping" className='h-6 mx-auto mt-2'/>
            <p className='text-center text-sm my-2'>Camping</p>
        </div>
        <div className='py-3 mr-8 hover:border-b-4 '>
            <img src={tinyHomes} alt="Tiny Homes" className='h-6 mx-auto mt-2'/>
            <p className='text-center text-sm my-2 whitespace-nowrap '>Tiny Homes</p>
        </div>
      </div>
      <div className=' my-auto mx-3 border flex justify-between h-12 rounded-xl px-2'>
        <img src={filter} alt='filter-logo' className='my-auto h-5 pr-2' />
        <p className='my-auto text-sm '>Filters</p>
      </div>
    </div>
  );
};

export default Categories;

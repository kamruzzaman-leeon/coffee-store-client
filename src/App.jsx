import { useLoaderData } from 'react-router-dom';
import CoffeeCard from './component/CoffeeCard';

const App = () => {
  const coffees =useLoaderData()
  return (
    <div className='container mx-auto p-5 md:p-10'>
      <h1 className="text-6xl text-center text-purple-500">Hot Cold Coffee:{coffees.length}</h1>
      <div className='grid md:grid-cols-2 gap-4'>
      
      {
        coffees.map(coffee=><CoffeeCard coffee ={coffee} key={coffee._id}></CoffeeCard>)
      }
      </div>
    </div>
  );
};

export default App;
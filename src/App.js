
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Pages/Routes/Routes/Routes';


function App() {
  return (
    <div className='mx-w-[1440] mx-auto'>
      <RouterProvider router={router}></RouterProvider>
     
     
    </div>
  );
}

export default App;

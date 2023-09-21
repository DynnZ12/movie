import { Suspense } from 'react';
import './App.css';
import Footer from './Footer';
import Loader from './utils/Loader';
import Laman from './Laman';

function App() {
 
  return (    
    <div className='utama'>
      <div className='atas'>
        <Suspense fallback={<Loader />}>
           <Laman />
        </Suspense>
      </div>
    
  
    <div className="footer">
      <Footer />
      </div>
      </div>
  );
}

export default App;

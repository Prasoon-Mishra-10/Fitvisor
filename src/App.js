import './App.css';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Nutrionists from './pages/Nutrionists';
import Fitlight from './pages/Fitlight';
import Membership from './pages/Membership';
import rectangle from '../src/images/Rectangle 37.png'
import blob from '../src/images/blob-haikei-removebg-preview.png'
import Home from './components/Home';
import Demo from './pages/Demo';
import Room from './pages/Room';
import Content from './pages/Content';
import ModalProvider from '../src/Providers/ModalProvider'

function App() {
  return (
    <div className='background'>

      <ModalProvider />

      <img src={blob} alt="" className='absolute z-[-1] md:opacity-100 md:flex hidden opacity-60' />
      <img src={rectangle} alt="" className='absolute z-[-1] md:hidden top-0 w-full' />

      <ToastContainer
        position="top-left"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="dark"
      />

      {/* <Header /> */}

      <Routes>

        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/nutrionist" element={<Nutrionists />}></Route>
        <Route path="/fitlight" element={<Fitlight />}></Route>
        <Route path="/membership" element={<Membership />}></Route>
        <Route path="/demo" element={<Demo />}></Route>
        <Route path="/demo/room/:roomId" element={<Room />}></Route>
        <Route path="/content" element={<Content />}></Route>

      </Routes>

    </div>
  );
}

export default App;

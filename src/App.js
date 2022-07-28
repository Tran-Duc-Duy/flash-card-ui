import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import AddCard from './components/AddCard';
import CardList from './components/CardList';
import UpdateCard from './components/UpdateCard';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="h-72 min-h-full mx-8">
          <Routes>
            <Route index element={<CardList />} />
            <Route path="/" element={<CardList />} ></Route>
            <Route path="/card-list" element={<CardList />} />
            <Route path="/add-card" element={<AddCard />} />
            <Route path="/edit-card/:id" element={<UpdateCard />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

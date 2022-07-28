import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import AddCard from './components/AddCard';
import CardList from './components/CardList';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<CardList />} />
          <Route path="/" element={<CardList />} ></Route>
          <Route path="/card-list" element={<CardList />} />
          <Route path="/add-card" element={<AddCard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

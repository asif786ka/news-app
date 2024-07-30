import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewsList from './components/NewsList';
import NewsDetails from './components/NewsDetails';
import SearchNews from './components/SearchNews';
import SportsNews from './components/SportsNews';
import DailyNews from './components/DailyNews';
import Menu from './components/Menu';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Menu />
        <div className="content">
          <Routes>
            <Route path="/" element={<NewsList />} />
            <Route path="/sports-news" element={<SportsNews />} />
            <Route path="/daily-news" element={<DailyNews />} />
            <Route path="/search-news" element={<SearchNews />} />
            <Route path="/news/:index" element={<NewsDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

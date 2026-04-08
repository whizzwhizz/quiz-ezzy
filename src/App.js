import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import CategorySelection from './Pages/CategorySelection';
import QuizArena from './Pages/QuizArena';
import AnimatedBackground from './Components/AnimatedBackground';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleStart = () => setCurrentPage('categories');
  
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setCurrentPage('quiz');
  };

  const handleGoHome = () => {
    setSelectedCategory(null);
    setCurrentPage('home');
  };

  return (
    <AnimatedBackground>
      <Navbar goHome={handleGoHome} />
      
      {currentPage === 'home' && <Home startQuiz={handleStart} />}
      {currentPage === 'categories' && <CategorySelection onSelectCategory={handleCategorySelect} />}
      {currentPage === 'quiz' && <QuizArena category={selectedCategory} goHome={handleGoHome} />}
    </AnimatedBackground>
  );
}

export default App;
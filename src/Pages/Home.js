import React from 'react';
import TopicBox from '../components/TopicBox';
import Content from '../components/Content';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import movieImage from '../images/h5.jpeg';
import movieImage2 from '../images/h6.jpeg';
import movieImage3 from '../images/h7.jpeg';

//Learn React Router for navigation
//Learn Parent-Child component communication
//Learn Props and State management
//Learn Dynamic Component Rendering
//Learn State and Props in React


export default function Home() {
  const [movie1Count, setMovie1Count] = useState(0);
  const [movie2Count, setMovie2Count] = useState(0);
  const [movie3Count, setMovie3Count] = useState(0);

  const incrementMovie1 = () => setMovie1Count(movie1Count + 1);
  const decrementMovie1 = () => setMovie1Count(movie1Count > 0 ? movie1Count - 1 : 0);

  const incrementMovie2 = () => setMovie2Count(movie2Count + 1);
  const decrementMovie2 = () => setMovie2Count(movie2Count > 0 ? movie2Count - 1 : 0);

  const incrementMovie3 = () => setMovie3Count(movie3Count + 1);
  const decrementMovie3 = () => setMovie3Count(movie3Count > 0 ? movie3Count - 1 : 0);

  return (
    <div>
      <div className="nav-links">
        <span className="nav-title">🎬 ReactFlix | Explore the world of React with our curated Movies!</span>
        <div className="nav-buttons">
          <Link to="/About">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      
      <div className="content-container">
        <div className="movie-section">
          <TopicBox movie1="Globert of Fire" />
          <img src={movieImage} alt="Movie" className="right-align-image" />
          <p className="harry-potter-description">The Harry Potter movie series, based on the novels by J.K. Rowling, is a globally beloved fantasy saga that follows the journey of a young wizard, Harry Potter, as he discovers his magical heritage and attends Hogwarts School of Witchcraft and Wizardry. Throughout the eight films, Harry and his friends Hermione Granger and Ron Weasley face thrilling adventures, dark secrets, and powerful enemies, most notably the dark wizard Lord Voldemort. The series masterfully blends themes of friendship, bravery, and the battle between good and evil. With its rich storytelling, magical world-building, and unforgettable characters, Harry Potter has become a cultural phenomenon that continues to enchant audiences of all ages.</p>
      <p className="movie-rating">Rating of the Movie is 3.9</p>
      <div className="movie-watched-count">
        <p>Watched Count: {movie1Count}</p>
        <button onClick={incrementMovie1}>+</button>
        <button onClick={decrementMovie1}>-</button>
      </div>
      </div>
      
      <div className="movie-section">
        <TopicBox movie1="Half blood prince" />
        <img src={movieImage2} alt="Movie 2" className="right-align-image" />
        <p className="harry-potter-description">The Harry Potter movie series, based on the novels by J.K. Rowling, is a globally beloved fantasy saga that follows the journey of a young wizard, Harry Potter, as he discovers his magical heritage and attends Hogwarts School of Witchcraft and Wizardry. Throughout the eight films, Harry and his friends Hermione Granger and Ron Weasley face thrilling adventures, dark secrets, and powerful enemies, most notably the dark wizard Lord Voldemort. The series masterfully blends themes of friendship, bravery, and the battle between good and evil. With its rich storytelling, magical world-building, and unforgettable characters, Harry Potter has become a cultural phenomenon that continues to enchant audiences of all ages.</p>
      <p className="movie-rating">Rating of the Movie is 4.5</p>
      
      <div className="movie-watched-count">
        <p>Watched Count: {movie2Count}</p>
        <button onClick={incrementMovie2}>+</button>
        <button onClick={decrementMovie2}>-</button>
      </div>
      </div>
      
      <div className="movie-section">
        <TopicBox movie1="Prisoner of azkaban" />
        <img src={movieImage3} alt="Movie 3" className="right-align-image" />
        <p className="harry-potter-description">The Harry Potter movie series, based on the novels by J.K. Rowling, is a globally beloved fantasy saga that follows the journey of a young wizard, Harry Potter, as he discovers his magical heritage and attends Hogwarts School of Witchcraft and Wizardry. Throughout the eight films, Harry and his friends Hermione Granger and Ron Weasley face thrilling adventures, dark secrets, and powerful enemies, most notably the dark wizard Lord Voldemort. The series masterfully blends themes of friendship, bravery, and the battle between good and evil. With its rich storytelling, magical world-building, and unforgettable characters, Harry Potter has become a cultural phenomenon that continues to enchant audiences of all ages.</p>
      <p className="movie-rating">Rating of the Movie is 3.5</p>
      <div className="movie-watched-count">
        <p>Watched Count: {movie3Count}</p>
        <button onClick={incrementMovie3}>+</button>
        <button onClick={decrementMovie3}>-</button>
      </div>
      </div>
      </div>
      
    </div>
  );
}

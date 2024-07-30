import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSearchNewsQuery } from '../redux/slices/newsApi';
import './NewsList.css';

const SearchNews: React.FC = () => {
  const [query, setQuery] = useState('');
  const { data: articles, error, isLoading } = useSearchNewsQuery(query, {
    skip: !query,
  });

  return (
    <div className="search-news">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for news..."
      />
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.toString()}</p>}
      <div className="news-cards">
        {articles?.map((article, index) => (
          <div key={index} className="news-card">
            {article.urlToImage && (
              <img
                src={article.urlToImage}
                alt={article.title}
                className="news-image"
              />
            )}
            <div className="news-info">
              <h2 className="news-title">
                <Link to={`/news/${index}`}>{article.title}</Link>
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchNews;

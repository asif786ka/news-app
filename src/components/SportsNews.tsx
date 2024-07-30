import React from 'react';
import { Link } from 'react-router-dom';
import { useGetSportsNewsQuery } from '../redux/slices/newsApi';
import './SportsNews.css';

const SportsNews: React.FC = () => {
  const { data: articles, error, isLoading } = useGetSportsNewsQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  return (
    <div className="news-list">
      <h1>Sports News</h1>
      <div className="news-cards">
        {articles?.map((article, index) => (
          <div key={index} className="news-card">
            {article.image && (
              <img
                src={article.image}
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

export default SportsNews;

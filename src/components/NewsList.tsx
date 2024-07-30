import React from 'react';
import { Link } from 'react-router-dom';
import { useGetTopHeadlinesQuery } from '../redux/slices/newsApi';
import './NewsList.css';

const NewsList: React.FC = () => {
  const { data: articles, error, isLoading } = useGetTopHeadlinesQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.toString()}</p>;

  return (
    <div className="news-list">
      <h1>Top Headlines</h1>
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

export default NewsList;

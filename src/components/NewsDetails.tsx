import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetTopHeadlinesQuery, useSearchNewsQuery, useGetSportsNewsQuery, useGetDailyNewsQuery } from '../redux/slices/newsApi';
import './NewsDetails.css';

const NewsDetails: React.FC = () => {
  const { index } = useParams<{ index: string }>();

  if (!index) {
    return <p>Invalid article index.</p>;
  }

  const newsIndex = parseInt(index, 10);

  const { data: topHeadlines } = useGetTopHeadlinesQuery();
  const { data: searchNews } = useSearchNewsQuery('', { skip: true });
  const { data: sportsNews } = useGetSportsNewsQuery();
  const { data: dailyNews } = useGetDailyNewsQuery();

  const article = topHeadlines?.[newsIndex] || searchNews?.[newsIndex] || sportsNews?.[newsIndex] || dailyNews?.[newsIndex];

  if (!article) {
    return <p>Article not found.</p>;
  }

  const { title, description, url, urlToImage } = article;

  return (
    <div className="news-details">
      <h1>{title}</h1>
      {urlToImage && <img src={urlToImage} alt={title} />}
      <p>{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">Read more</a>
    </div>
  );
};

export default NewsDetails;

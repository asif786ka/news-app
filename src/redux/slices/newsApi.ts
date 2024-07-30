import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

//const API_KEY = '56ecc62728f3431e962ce79b7c0be505'; // Replace with your News API key
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export interface NewsArticle {
  source: {
    id: string | null;
    name: string;
  };
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string;
}

interface NewsResponse {
  articles: NewsArticle[];
}

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://newsapi.org/v2/' }),
  endpoints: (builder) => ({
    getTopHeadlines: builder.query<NewsArticle[], void>({
      query: () => `top-headlines?country=us&apiKey=${API_KEY}`,
      transformResponse: (response: NewsResponse) => response.articles,
    }),
    searchNews: builder.query<NewsArticle[], string>({
      query: (query) => `everything?q=${query}&apiKey=${API_KEY}`,
      transformResponse: (response: NewsResponse) => response.articles,
    }),
    getSportsNews: builder.query<NewsArticle[], void>({
      query: () => `top-headlines?category=sports&country=us&apiKey=${API_KEY}`,
      transformResponse: (response: NewsResponse) => response.articles,
    }),
    getDailyNews: builder.query<NewsArticle[], void>({
      query: () => `top-headlines?category=general&country=us&apiKey=${API_KEY}`,
      transformResponse: (response: NewsResponse) => response.articles,
    }),
  }),
});

export const {
  useGetTopHeadlinesQuery,
  useSearchNewsQuery,
  useGetSportsNewsQuery,
  useGetDailyNewsQuery,
} = newsApi;
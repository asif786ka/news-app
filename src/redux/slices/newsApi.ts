import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = '56ecc62728f3431e962ce79b7c0be505'; // Replace with your News API key

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
  }),
});

export const { useGetTopHeadlinesQuery } = newsApi;

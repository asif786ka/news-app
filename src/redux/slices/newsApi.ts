import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = import.meta.env.VITE_GNEWS_API_KEY;
const API_URL = 'https://gnews.io/api/v4';

export interface NewsArticle {
  source: {
    name: string;
  };
  title: string;
  description: string;
  url: string;
  image: string | null;
  publishedAt: string;
}

interface NewsResponse {
  articles: NewsArticle[];
}

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getTopHeadlines: builder.query<NewsArticle[], void>({
      query: () => `top-headlines?token=${API_KEY}&lang=en`,
      transformResponse: (response: NewsResponse) => response.articles,
    }),
    searchNews: builder.query<NewsArticle[], string>({
      query: (query) => `search?q=${query}&token=${API_KEY}&lang=en`,
      transformResponse: (response: NewsResponse) => response.articles,
    }),
    getSportsNews: builder.query<NewsArticle[], void>({
      query: () => `top-headlines?token=${API_KEY}&topic=sports&lang=en`,
      transformResponse: (response: NewsResponse) => response.articles,
    }),
    getDailyNews: builder.query<NewsArticle[], void>({
      query: () => `top-headlines?token=${API_KEY}&topic=breaking-news&lang=en`,
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

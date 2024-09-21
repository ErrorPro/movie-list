import {FetchBaseQueryError} from '@reduxjs/toolkit/query';

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
}

export interface MovieDetails extends Movie {
  overview: string;
  vote_average: number;
}

export type MovieApiError = {
  data: {
    status_message: string;
    status_code: number;
  };
} & Omit<FetchBaseQueryError, 'data'>;

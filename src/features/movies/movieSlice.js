import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import movieApi from '../../common/apis/movieApi'
import { APIKey } from '../../common/apis/movieApiKey'

const fetcAsyncMovies = createAsyncThunk(
  'movies/fetchAsyncMovies',
  async () => {
    const movieText = 'Harry'
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${movieText}&type=movie`
    )
    return response.data
  }
)

const initialState = {
  movies: {},
}

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload
    },
  },
  extraReducers: {
    [fetcAsyncMovies.pending]: () => {
      console.log('Pending')
    },
    [fetcAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log('Fetched successfully')
      return { ...state, movies: payload }
    },
    [fetcAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log('Fetched successfully')
      return { ...state, movies: payload }
    },
  },
})

export const { addMovies } = moviesSlice.actions
export const getAllMovies = (state) => state.movies.movies
export default moviesSlice.reducer

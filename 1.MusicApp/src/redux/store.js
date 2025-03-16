import {configureStore} from '@reduxjs/toolkit'
import playlistSlice from './PlaylistSlice'
import likeSlice from './LikeSlice'

export const store=configureStore({
    reducer:{
        playlist:playlistSlice,
        like:likeSlice
    }
})
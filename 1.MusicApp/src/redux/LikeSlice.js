import { createSlice } from "@reduxjs/toolkit";

const LikeSlice=createSlice({
    name:"like",
    initialState:[],
    reducers:{
        AddLikeSong:(state,action)=>{
           let exist= state.find((song)=>song.songIndex==action.payload.songIndex)

            if(exist){
                return
            }else{
                state.push(action.payload)
            }
            
        },
        RemoveLikeSong:(state,action)=>{
           return state.filter((song)=>(song.songIndex!=action.payload))
        }
    }
})

export const {AddLikeSong , RemoveLikeSong}=LikeSlice.actions
export default LikeSlice.reducer
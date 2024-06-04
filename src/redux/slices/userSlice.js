import { createSlice } from "@reduxjs/toolkit";
import  { userList } from '../../Data'
userList

const userSlice = createSlice({
  name: "users",
  initialState:userList,
  reducers: {
    addUsers:(state, action)=>{
       state.push(action.payload)
    },
    updateUser:(state,action)=>{
        const {id,name,email}=action.payload;
        const UU=state.find(user=>user.id==id);
        if(UU){
            UU.name=name;
            UU.email=email;
        }
    },
    deleteUser:(state,action)=>{
         const { id} = action.payload;
         const UU = state.find((user) => user.id == id);
          if (UU) {
           return state.filter(f=> f.id !=id);
          }
    }
    },
  },
);

export const { addUsers,updateUser,deleteUser } = userSlice.actions;

export default userSlice.reducer;

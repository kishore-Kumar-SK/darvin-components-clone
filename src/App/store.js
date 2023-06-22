import { configureStore } from '@reduxjs/toolkit'
import sidebarReducer from '../features/Sidebar/Sidebar'

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,

  },
})
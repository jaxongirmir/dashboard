import { configureStore } from '@reduxjs/toolkit'
import departmentSlice from './slice/departmentSlice'
import devisionSlice from './slice/devisionSlice'
import facultySlice from './slice/facultySlice'
import userPanelSlice from './slice/userPanelSlice'

export const store = configureStore({
	reducer: {
		devision: devisionSlice,
		faculty: facultySlice,
		department: departmentSlice,
		userpanel: userPanelSlice,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

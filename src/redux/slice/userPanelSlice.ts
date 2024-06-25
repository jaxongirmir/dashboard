import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { MAIN_URL } from '../../url/url'

interface userpanelState {
	userpanel: any[]
	loading: boolean
	error: string | null
}

const initialState: userpanelState = {
	userpanel: [],
	loading: false,
	error: null,
}

export const fetchUserpanle = createAsyncThunk(
	'userppanel/fetchUserPanle',
	async () => {
		const response = await axios.get(`${MAIN_URL}/users/`)
		return response.data
	}
)

export const createUserpanel = createAsyncThunk(
	'userpanel/createUserPanel',
	async (userpanelData: any, { rejectWithValue }) => {
		try {
			const token = localStorage.getItem('token')
			if (!token) {
				throw new Error('Token not found')
			}
			const response = await axios.post(`${MAIN_URL}/users/`, userpanelData, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			return response.data
		} catch (error: any) {
			return rejectWithValue(
				error.response ? error.response.data.message : error.message
			)
		}
	}
)

export const deleteUserPanel = createAsyncThunk(
	'userpanel/deleteUserPanel',
	async (id: string, { rejectWithValue }) => {
		try {
			const token = localStorage.getItem('token')
			if (!token) {
				throw new Error('Token not found')
			}

			await axios.delete(`${MAIN_URL}/users/${id}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})

			return id
		} catch (error: any) {
			return rejectWithValue(
				error.response ? error.response.data.message : error.message
			)
		}
	}
)

const UserpanelSlice = createSlice({
	name: 'userpanel',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchUserpanle.pending, state => {
				state.loading = true
				state.error = null
			})
			.addCase(
				fetchUserpanle.fulfilled,
				(state, action: PayloadAction<any[]>) => {
					state.loading = false
					state.userpanel = action.payload
				}
			)
			.addCase(fetchUserpanle.rejected, (state, action) => {
				state.loading = false
				state.error = action.error.message || 'Something went wrong'
			})
			.addCase(createUserpanel.pending, state => {
				state.loading = true
				state.error = null
			})
			.addCase(
				createUserpanel.fulfilled,
				(state, action: PayloadAction<any>) => {
					state.loading = false
					state.userpanel.push(action.payload)
				}
			)
			.addCase(createUserpanel.rejected, (state, action) => {
				state.loading = false
				state.error = (action.payload as string) || 'Something went wrong'
			})
			.addCase(deleteUserPanel.pending, state => {
				state.loading = true
				state.error = null
			})
			.addCase(
				deleteUserPanel.fulfilled,
				(state, action: PayloadAction<string>) => {
					state.loading = false
					state.userpanel = state.userpanel.filter(
						userpanel => userpanel.id !== action.payload
					)
				}
			)
			.addCase(deleteUserPanel.rejected, (state, action) => {
				state.loading = false
				state.error = action.error.message || 'Something went wrong'
			})
	},
})

export default UserpanelSlice.reducer

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ZodiacSign } from '../models/zodiacSign';
import signsApi from '../api/signs';
import { SortField, SortOrder, SortPayload } from '@/models/signsSort';
import { sortSigns } from '@/utils/sortSigns';
import { signsListSchema } from '@/validators/signs';

const initialSign: ZodiacSign = {
  end_date: '',
  id: 0,
  image: '',
  init_date: '',
  name: '',
  prediction: '',
};

const initialSignsList: ZodiacSign[] = [initialSign];

export const initialSignsOrder: SortPayload = {
  field: SortField.date,
  order: SortOrder.desc,
};

const initialState = {
  todaySign: initialSign,
  allSigns: initialSignsList,
  filteredSigns: initialSignsList,
  loading: true,
  fullfilled: false,
  error: false,
  filtered: false,
  order: initialSignsOrder,
};

export const getAllSigns = createAsyncThunk(
  'signs/getAll',
  async (): Promise<ZodiacSign[]> => {
    try {
      const { data } = await signsApi.get<ZodiacSign[]>('');

      const signs = signsListSchema.parse(data);

      return signs;
    } catch (e) {
      const error = e as Error;
      throw Error(error.message);
    }
  }
);

const signsSlice = createSlice({
  name: 'signs',
  initialState,
  reducers: {
    searchSigns: (state, { payload: query }: PayloadAction<string>) => {
      state.loading = true;

      if (!query) {
        state.filteredSigns = state.allSigns;

        state.filtered = false;
        
      } else {
        const filteredSigns = state.allSigns.filter((sign) =>
          sign.name.toLowerCase().includes(query.toLowerCase())
        );

        state.filteredSigns = filteredSigns;

        state.filtered = true;
      }

      // Re-sort signs to preserve order in filter
      state.filteredSigns = sortSigns(state.filteredSigns, state.order);

      state.loading = false;
    },
    sortList: (state, { payload }: PayloadAction<SortPayload>) => {
      if (state.filteredSigns.length === 0) return;

      state.loading = true;

      state.filteredSigns = sortSigns(state.filteredSigns, payload);

      state.order = payload;

      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllSigns.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllSigns.fulfilled, (state, { payload: newSigns }) => {
        // State validation
        state.fullfilled = true;
        state.loading = false;

        // Store sign of the day
        state.todaySign = newSigns[0];

        // Store all signs to use in filters
        state.allSigns = newSigns;

        // Sort signs by default order
        state.filteredSigns = sortSigns(newSigns, state.order);
      })
      .addCase(getAllSigns.rejected, (state) => {
        state.error = true;
        state.loading = false;
      });
  },
});

export const { sortList, searchSigns } = signsSlice.actions;

export default signsSlice.reducer;

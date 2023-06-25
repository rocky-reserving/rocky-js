// redux slice
import { createSlice } from '@reduxjs/toolkit';

const workbenchSlice = createSlice({
  name: 'workbench',
  initialState: {
    triangles: [],
    models: [],
    projections: [],
    windows: [],
  },
  reducers: {
    get: (state) => state,
    set: (state, action) => (state = action.payload),

    // add an element to the workbench
    addTriangle: (state, action) => state.triangles.push(action.payload),
    addModel: (state, action) => state.models.push(action.payload),
    addProjection: (state, action) => state.projections.push(action.payload),
    addWindow: (state, action) => state.windows.push(action.payload),

    // remove an element from the workbench
    removeTriangle: (state, action) => {
      state.triangles = state.triangles.filter(
        (triangle) => triangle.id !== action.payload,
      );
    },
    removeModel: (state, action) => {
      state.models = state.models.filter(
        (model) => model.id !== action.payload,
      );
    },
    removeProjection: (state, action) => {
      state.projections = state.projections.filter(
        (projection) => projection.id !== action.payload,
      );
    },
    removeWindow: (state, action) => {
      state.windows = state.windows.filter(
        (window) => window.id !== action.payload,
      );
    },

    // count the number of loaded elements
    nTriangle: (state) => state.triangles.length,
    nModel: (state) => state.models.length,
    nProjection: (state) => state.projections.length,
    nWindow: (state) => state.windows.length,
  },
});

export const { get, set } = workbenchSlice.actions;
export default workbenchSlice.reducer;

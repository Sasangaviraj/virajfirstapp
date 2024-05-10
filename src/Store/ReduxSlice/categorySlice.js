import {createSelector, createSlice} from "@reduxjs/toolkit"


const initialState = [
    {
        id: "category1",
        title: 'Category Title 1',
    },
    {
        id: "category2",
        title: 'Category Title 2',
    },
    {
        id: "category3",
        title: 'Category Title 3',
    },
    {
        id: "category4",
        title: 'Category Title 4',
    },
    {
        id: "category5",
        title: 'Category Title 5',
    },
]
const categorySlice = createSlice({
    name:'categorySlice',
    initialState,
    reducers:{}
});

export const categorySelector = createSelector(
    [(store)=>store.category],
    (category)=>category
);

export default categorySlice.reducer;
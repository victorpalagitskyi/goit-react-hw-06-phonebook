import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
 
const contactInitialState = []

const contactSlice = createSlice({
    name: "contact",
    initialState: contactInitialState,
    reducers: {
        addContact: {
            reducer(state, { payload }) {
                state.push(payload)
            },
    prepare (name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
        delContact: (state, { payload }) => 
            state.filter(contact => contact.id !== payload),
        },
    })

    export const { addContact, delContact } = contactSlice.actions;
    export const tasksReducer = contactSlice.reducer;
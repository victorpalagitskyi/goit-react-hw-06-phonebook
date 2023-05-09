import { createSlice, nanoid } from "@reduxjs/toolkit";
 
const contactInitialState = []

export const contactSlice = createSlice({
    name: "contact",
    initialState: contactInitialState,
    reducers: {
        addContact: {
            reducer(state, { payload }) {
                state.push(payload)
            }
            prepare(name, number) {
                return {
                    payload: {
                        id: nanoid()
                        name,
                        number,
                    }
                }
            }
        },
        delContact: (state, { payload }) => 
            state.filter(contact => contact.id !== payload)
        }
    }
})
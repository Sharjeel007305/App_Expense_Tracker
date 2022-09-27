import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
const baseURI = 'http://localhost:5000'

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({baseUrl:baseURI}),
    endpoints: builder => ({
        //get categories
        getCategories: builder.query({
            //get: 'http://localhost:5000/api/categories'
            query: ()=> '/api/categories',
            providesTags: ['categories']
        }),

        //get Labels
        getLabels: builder.query({
            //get: 'http://localhost:5000/api/labels'
            query: ()=> '/api/labels',
            providesTags: ['transaction']
        }),

        //add new Transaction
        addTransaction: builder.mutation({
            //post: 'http://localhost:5000/api/transaction'
            query: (initialTransaction) => ({
                url : '/api/transaction',
                method: 'POST',
                body: initialTransaction
            }),
            invalidatesTags: ['transaction']
        }),

        //delete record
        DeleteTransaction: builder.mutation({
            //delete: 'http://localhost:5000/api/transaction'
            query: recordId => ({
                url: '/api/transaction',
                method: 'DELETE',
                body: recordId
            }),
            invalidatesTags: ['transaction']
        })
    })
})


export default apiSlice;
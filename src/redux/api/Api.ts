import { baseApi } from "./baseApi";
import { tagTypes } from "./tag-types";

export const AllApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createLostItem: build.mutation({
      query: (data) => ({
        url: "/lost-items",
        method: "POST",
        contentType: "application/json",
        data,
      }),
      invalidatesTags: [tagTypes.foundItem],
    }),

    getAllCategory: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/found-item-categories",
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: any) => {
        return {
          response,
        };
      },
      providesTags: [tagTypes.foundItem, tagTypes.lostItem],
    }),

    //get single doctor
    getLostItemsById: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `/lost-items/${id}`,
        method: "GET",
      }),
      transformResponse: (response: any) => {
        return {
          response,
        };
      },
      providesTags: [tagTypes.lostItem],
    }),

    // update a doctor

    updateUserStatus: build.mutation({
      query: (data) => ({
        url: `/users/status/${data.userId}`,
        method: "PUT",
        data: data.status,
      }),
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const {
  useCreateLostItemMutation,
  useGetAllCategoryQuery,
  useGetLostItemsByIdQuery,
  useUpdateUserStatusMutation,
} = AllApi;

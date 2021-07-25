export const getAdoptionRequestsReducer = (state = {}, action) => {
  switch (action.type) {
    case "PET_ADOPTION_REQUESTS_REQUEST":
      return { loading: true, ...state };
    case "PET_ADOPTION_REQUESTS_SUCCESS":
      console.log("Reducer dasboard");
      console.log(action.payload.petsData);
      console.log(action.payload.requestsData);

      return {
        loading: false,
        success: true,
        info: action.payload,
      };
    case "PET_ADOPTION_REQUESTS_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

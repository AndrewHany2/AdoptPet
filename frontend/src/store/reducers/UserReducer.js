export const UserLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_LOGIN_REQUEST":
      return { loading: true, ...state };
    case "USER_LOGIN_SUCCESS":
      return {
        loading: false,
        success: true,
        info: action.payload,
      };
    case "USER_LOGIN_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const getUserReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_DATA_REQUEST":
      return { loading: true };
    case "USER_DATA_SUCCESS":
      return {
        loading: false,
        success: true,
        info: action.payload,
      };
    case "USER_DATA_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const UserRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_REGISTER_REQUEST":
      return { loading: true, ...state };
    case "USER_REGISTER_SUCCESS":
      return {
        loading: false,
        success: true,
        info: action.payload,
      };
    case "USER_REGISTER_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
// API Base Paths
export const apiTrainBasePath = "http://127.0.0.1:8000";
export const apiInferenceBasePath = "http://localhost:8080/api/v1";

// Auth Paths
export const authRegisterPath = "/auth/register";
export const authLoginPath = "/auth/login";
export const authTokenPath = "/auth/login";

// Data Query Paths
// Feedbacks
export const feedbacksDataPath = "/feedbacks/all_feedbacks";
// Users
export const usersListPath = "/users";
export const userByIDPath = "/users/id";
export const usersByNamePath = "/users/name";
export const userByUsernamePath = "/users/username";
export const userRoleByIDPath = "/auth/id";
// Models
export const modelsListPath = "/models";
export const modelByIDPath = "/models/id";
export const modelsByNamePath = "/models/name";
export const modelsByUsernamePath = "/models/username";

// Data Creation/Manipulation Paths
export const userEditByIDPath = "/users/edit";
export const modelCreatePath = "/models/create";
export const modelEditPath = "/models/edit";

// User Filter Params
export const UserFilterParams = {
  USERID: "id",
  USERNAME: "username",
  NAME: "name",
};

// Model Filter Params
export const ModelFilterParams = {
  MODELID: "id",
  MODELNAME: "name",
  USERNAME: "username",
};

export const UserRoles = {
  USER: "user",
  ADMIN: "admin",
};

export const ErrorCodes = {
  NOT_FOUND: 0,
  ACCESS_DENIED: 1,
  INVALID_CREDENTIALS: 2,
};

export const NotificationTypes = {
  DEFAULT: "default",
  SUCCESS: "success",
  ERROR: "error",
  WARNING: "warning",
  INFO: "info",
};

export const NotificationPlacement = {
  TOP_LEFT: "top-left",
  TOP_CENTER: "top-center",
  TOP_RIGHT: "top-right",
  BOTTOM_LEFT: "bottom-left",
  BOTTOM_CENTER: "bottom-center",
  BOTTOM_RIGHT: "bottom-right",
};

export const NotificationTheme = {
  LIGHT: "light",
  DARK: "dark",
  COLORED: "colored",
};

export const NotificationOptions = {
  position: NotificationPlacement.DEFAULT,
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: false,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
};

export const CountryNameAndCodeList = [
  { code: "US", name: "United States" },
  {
    code: "IN",
    name: "India",
  },
  {
    code: "DE",
    name: "Germany",
  },
];

export const INVALID_CREDENTIALS = "INVALID_CREDENTIALS";
export const ERROR_400 = 400;
export const ERROR_401 = 401;

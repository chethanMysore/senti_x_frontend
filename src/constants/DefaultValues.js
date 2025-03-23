// API Base Paths
export const apiTrainBasePath = "http://127.0.0.1:8000";
export const apiInferenceBasePath = "http://localhost:3000/api/v1";

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

import axios from "axios";
import cookie from "react-cookies";

const buildUrlQuery = (url, params) => {
  let query = "";
  params.forEach((param, i) => {
    i == 0
      ? (query += `?${param.key}=${param.value}`)
      : (query += `&${param.key}=${param.value}`);
  });
  url += query;
  return url;
};
const getTokenFromApi = (apiBasePath, tokenPath, username, password) => {
  return new Promise((resolve, reject) => {
    let encodedAuth = btoa(`${username}:${password}`);
    let requestUrl = `${apiBasePath}${tokenPath}`;
    const request = axios.create();
    request.defaults.headers.common["Authorization"] = `Basic ${encodedAuth}`;
    request
      .get(requestUrl)
      .then((res) => resolve(res.data))
      .catch((err) => {
        err.isError = true;
        reject(err);
      });
    // axios({
    //   method: "get",
    //   url: `${apiBasePath}${tokenPath}`,
    //   config: {
    //     headers: {
    //       Authorization: `Basic ${encodedAuth}`,
    //     },
    //   },
    // })
    //   .then((res) => resolve(res.data))
    //   .catch((err) => {
    //     err.isError = true;
    //     reject(err);
    //   });
  });
};
const saveToken = (token) => {
  cookie.save(
    "access_token",
    {
      token: btoa(token),
      expires_in: token.expires_in
        ? parseInt(new Date().getTime() + parseInt(token.expires_in * 1000))
        : parseInt(new Date().getTime() + parseInt(100 * 1000)),
      refreshToken: btoa(token.refresh_token),
    },
    { path: "/" }
  );
};
const fetchAuthToken = () => {
  return new Promise((resolve, reject) => {
    let accessToken = cookie.load("access_token");
    console.log("Chucky fetching fetchAuthToken!!!", accessToken);
    if (
      !!accessToken &&
      !!accessToken.token &&
      !!accessToken.expires_in &&
      accessToken.expires_in > new Date().getTime()
    ) {
      console.log("Chucky passed through fetchAuthToken!!!");
      resolve(atob(accessToken.token));
    } else {
      console.log("Chucky stuck in fetchAuthToken!!!");
      reject({ isError: true, message: "unauthorized" });
    }
  });
};
const getRequest = (
  token,
  apiBasePath,
  entityPath,
  byParam = false,
  param = "",
  queryParams = []
) => {
  return new Promise((resolve, reject) => {
    let requestUrl = `${apiBasePath}${entityPath}`;
    if (byParam) {
      requestUrl += `/${param}`;
    }
    if (queryParams.length > 0)
      requestUrl = buildUrlQuery(requestUrl, queryParams);
    const request = axios.create();
    request.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    request
      .get(requestUrl)
      .then((res) => resolve(res.data))
      .catch((err) => {
        err.isError = true;
        reject(err);
      });
  });
};
const postRequest = (apiBasePath, entityPath, newData, token = null) => {
  return new Promise((resolve, reject) => {
    let requestUrl = `${apiBasePath}${entityPath}`;
    const request = axios.create();
    if (token) {
      request.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    request.defaults.headers.common["ContentType"] = "application/json";
    request
      .post(requestUrl, newData)
      .then((res) => resolve(res.data))
      .catch((err) => {
        err.isError = true;
        reject(err);
      });
  });
};
const putRequest = (
  token,
  apiBasePath,
  entityPath,
  updateData,
  byParam = false,
  param = ""
) => {
  return new Promise((resolve, reject) => {
    let requestUrl = `${apiBasePath}${entityPath}`;
    if (byParam) {
      requestUrl += `/${param}`;
    }
    const request = axios.create();
    request.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    request.defaults.headers.common["ContentType"] = "application/json";
    request
      .put(requestUrl, updateData)
      .then((res) => resolve(res.data))
      .catch((err) => {
        err.isError = true;
        reject(err);
      });
  });
};

export const Register = async (
  apiBasePath,
  registrationPath,
  registrationData
) => {
  return new Promise((resolve, reject) => {
    postRequest(apiBasePath, registrationPath, registrationData)
      .then((data) => {
        saveToken(data.access_token);
        resolve(data);
      })
      .catch((err) => {
        err.isError = true;
        reject(err);
      });
  });
};

export const GetAccessToken = async (
  apiBasePath,
  tokenPath,
  username,
  password
) => {
  return new Promise((resolve, reject) => {
    getTokenFromApi(apiBasePath, tokenPath, username, password)
      .then((accessToken) => {
        saveToken(accessToken.access_token);
        resolve(accessToken);
      })
      .catch((err) => {
        err.isError = true;
        reject(err);
      });
  });
};

export const FetchData = async (
  apiBasePath,
  entityPath,
  byParam = false,
  param = "",
  queryParams = []
) => {
  return new Promise((resolve, reject) => {
    fetchAuthToken()
      .then((accessToken) => {
        getRequest(
          accessToken,
          apiBasePath,
          entityPath,
          byParam,
          param,
          queryParams
        )
          .then((data) => resolve(data))
          .catch((err) => {
            err.isError = true;
            reject(err);
          });
      })
      .catch((err) => {
        err.isError = true;
        reject(err);
      });
  });
};
export const CreateDataInstance = async (apiBasePath, entityPath, data) => {
  return new Promise((resolve, reject) => {
    fetchAuthToken()
      .then((accessToken) => {
        postRequest(accessToken, apiBasePath, entityPath, data)
          .then((res) => resolve(res))
          .catch((err) => {
            err.isError = true;
            reject(err);
          });
      })
      .catch((err) => {
        err.isError = true;
        reject(err);
      });
  });
};
export const UpdateData = async (
  apiBasePath,
  entityPath,
  data,
  byParam = false,
  param = ""
) => {
  return new Promise((resolve, reject) => {
    fetchAuthToken()
      .then((accessToken) => {
        putRequest(accessToken, apiBasePath, entityPath, data, byParam, param)
          .then((res) => resolve(res))
          .catch((err) => {
            err.isError = true;
            reject(err);
          });
      })
      .catch((err) => {
        err.isError = true;
        reject(err);
      });
  });
};

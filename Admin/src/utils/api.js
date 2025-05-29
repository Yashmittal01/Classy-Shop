import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

export const postData = async (url, formData) => {
  try {
    const response = await fetch(apiUrl + url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accesstoken")}`, //include your api key in the authorization header
        "Content-Type": "application/json", //adjust the content type as needed
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      const errorData = await response.json();
      return errorData;
    }
  } catch (error) {
    console.log(error);
  }
};

export const fetchDataFromApi = async (url) => {
  try {
    const token = localStorage.getItem("accesstoken");

    const params = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get(`${apiUrl}${url}`, params);

    return data;
  } catch (error) {
    console.error("API Error:", error);

    // Better error handling
    if (error.response) {
      // The server responded with a status code outside of 2xx range
      console.error("Error response:", error.response.data);
      console.error("Status code:", error.response.status);
    } else if (error.request) {
      // The request was made but no response was received
      console.error("No response received:", error.request);
    }

    throw error; // Re-throw to allow handling at call site
  }
};

export const uploadImage = async (url, updateData) => {
  const params = {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem("accesstoken")}`,
      "Content-Type": "multipart/form-data",
    },
  };

  var response;
  await axios.put(apiUrl + url, updateData, params).then((res) => {
    console.log(res);
    response = res;
  });
  return response;
};


export const editData = async (url, updateData) => {
  const params = {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem("accesstoken")}`,
      "Content-Type": "application/json",
    },
  };

  var response;
  await axios.put(apiUrl + url, updateData, params).then((res) => {
    console.log(res);
    response = res;
  });
  return response;
};
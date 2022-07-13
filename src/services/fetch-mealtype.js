import axios from "axios";
const app_Id = process.env.REACT_APP_API_ID;
const app_Key = process.env.REACT_APP_API_KEY;

export const fetchMealType = (activeMenuWithoutChar) => {
  const baseURL = `https://api.edamam.com/api/recipes/v2?type=public&q=%22%22&app_id=${app_Id}&app_key=${app_Key}&mealType=${activeMenuWithoutChar}&random=true`;
  return axios.get(baseURL).then((response) => response.data.hits);
};

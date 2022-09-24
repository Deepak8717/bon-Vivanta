import axios from "axios";
const app_Id = process.env.REACT_APP_API_ID;
const app_Key = process.env.REACT_APP_API_KEY;

export const fetchRecipes = (menuType, subMenuByMenuType) => {
  //search parameters to be included in url
  // ${menuType} can be mealtype, cuisinetype or dishtype based on user input
  const paramObj = {
    q: "",
    app_id: app_Id,
    app_key: app_Key,
    [`${menuType}`]: subMenuByMenuType,
    random: false,
  };

  const baseUrl = new URL("https://api.edamam.com/api/recipes/v2?type=public");
  const paramQryString = new URLSearchParams(paramObj);
  const urlWithParams = baseUrl + "&" + paramQryString;
  return axios.get(urlWithParams).then((response) => response.data);
};

const API_URL = "https://webapi.omoloko.ru/api/v1/products";

export const fetchProducts = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    if (Array.isArray(data.products)) {
      return data.products;
    } else {
      console.error("Данные не являются массивом:", data);
      return [];
    }
  } catch (error) {
    console.error("Ошибка при загрузке данных:", error);
    return [];
  }
};

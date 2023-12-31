export const getCartFromLs = () => {
  const data = localStorage.getItem("cart");
  return data ? JSON.parse(data) : [];
};

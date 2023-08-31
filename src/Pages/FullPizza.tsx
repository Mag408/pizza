import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const FullPizza: React.FC = () => {
  const { id } = useParams();
  const [pizza, setPizza] = React.useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          "https://64199f38c152063412c74678.mockapi.io/cart/" + id
        );
        setPizza(data);
      } catch (error) {
        alert("Ошибка при получении пиццы");
      }
    }
    fetchPizza();
  }, []);

  if (!pizza) {
    return <>"Загрузка..."</>;
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="" />
      <h1>{pizza.title}</h1>

      <h4>{pizza.price} р.</h4>
    </div>
  );
};

export default FullPizza;

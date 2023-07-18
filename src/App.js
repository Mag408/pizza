import "./App.css";
import "./scss/app.scss";

import Header from "./Components/Header";
import Categories from "./Components/Categories";
import Sort from "./Components/Sort";
import PizzaBlock from "./Components/Pizza-block";
import pizzas from "./assets/pizzas.json";

function App() {
  return (
    <div className="App">
      <div class="wrapper">
        <Header />
        <div class="content">
          <div class="container">
            <div class="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 class="content__title">Все пиццы</h2>
            <div class="content__items">
              {pizzas.map((obj) => (
                <PizzaBlock {...obj} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

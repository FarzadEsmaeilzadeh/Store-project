import BasketCard from "../components/BasketCard";
import BasketSidebar from "../components/BasketSidebar";
import { useCart } from "../context/CartContext";

import styles from "./CheckoutPage.module.css";

function CheckoutPage() {
  const [state, dispatch] = useCart();

  const clickHandler = (type, payload) => dispatch({ type, payload });

  if (!state.itemsCounter) {
    return (
      <div className={styles.empty}>
        <h1>Your Cart is <span style={{color: "#ff725e"}}>Empty!</span></h1>
        <img src="../../public/emptyBasket.svg" />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <BasketSidebar state={state} clickHandler={clickHandler} />
      <dir className={styles.products}>
        {state.selectedItems.map((product) => (
          <BasketCard
            key={product.id}
            data={product}
            clickHandler={clickHandler}
          />
        ))}
      </dir>
    </div>
  );
}

export default CheckoutPage;

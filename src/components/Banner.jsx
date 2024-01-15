import styles from "./Banner.module.css";

function Banner() {
  return (
    <div className={styles.container}>
      <h1>
        Welcome To <span style={{ color: "#78281d" }}>FerriShop</span>
      </h1>
      <img src="../../public/images/Thrift shop-rafiki.png" />
    </div>
  );
}

export default Banner;

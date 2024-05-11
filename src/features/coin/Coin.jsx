import { useSelector } from "react-redux";

const Coin = () => {
  const coins = useSelector((state) => state.counter.count);
  const color = useSelector((state) => state.theme.color);
  return (
    <div>
      <h2 style={{ color: color }}>coin:{coins}</h2>{" "}
    </div>
  );
};

export default Coin;

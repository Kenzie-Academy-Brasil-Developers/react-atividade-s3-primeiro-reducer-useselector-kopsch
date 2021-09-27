import { useSelector } from "react-redux";
import { Image } from "./styles";

const FruitsPage = () => {
  const fruits = useSelector((state) => state.fruits);
  console.log(fruits);
  return (
    <div>
      {fruits.map((fruit) => (
        <div key={fruit}>
          <Image src={fruit.image} alt={fruit.name} />
          <p>{fruit.name}</p>
        </div>
      ))}
    </div>
  );
};

export default FruitsPage;

import apple from "../../../assets/img/apple.png";
import banana from "../../../assets/img/banana.png";
import strawberry from "../../../assets/img/strawberry.png";

const initialState = [
  { name: "Banana", image: banana },
  { name: "Maçã", image: apple },
  { name: "Morango", image: strawberry },
];

const fruitsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default fruitsReducer;

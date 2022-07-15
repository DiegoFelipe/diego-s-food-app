import classes from "./MealItemForm.module.css";
import Input from "components/UI/Input";
import { useRef } from "react";

const MealItemForm = (props) => {
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmout = amountInputRef.current.value;
    const enteredAmoutNumber = +enteredAmout;

    if (
      enteredAmout.trim().length === 0 ||
      enteredAmoutNumber < 1 ||
      enteredAmoutNumber > 5
    ) {
      return;
    }

    props.onAddToCart(enteredAmoutNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: 1,
          max: 5,
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;

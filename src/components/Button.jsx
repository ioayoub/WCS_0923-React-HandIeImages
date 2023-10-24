import PropTypes from "prop-types";

function Button({ counter, setCounter }) {
  return (
    <>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      {counter}
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </>
  );
}

Button.propTypes = {
  counter: PropTypes.number.isRequired,
  setCounter: PropTypes.func.isRequired,
};

export default Button;

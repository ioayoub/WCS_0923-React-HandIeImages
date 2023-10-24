import { useState } from "react";
import PropTypes from "prop-types";

import dark from "../assets/754648.jpg";
import light from "../assets/754681.jpg";
import Button from "./Button";

function Card({ id, name, picture, index }) {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <div
        key={id}
        style={{
          background: `url('${index % 2 === 0 ? dark : light}')`,
          height: "25rem",
          width: "25rem",
          backgroundSize: "cover",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: "2em", fontStyle: "bold", color: "#fff" }}>
          {name}
          <br />
          <Button counter={counter} setCounter={setCounter} />
        </p>
        <img src={`/images/${picture}`} alt="" style={{ height: "75%" }} />
      </div>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default Card;

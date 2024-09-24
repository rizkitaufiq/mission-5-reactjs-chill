import PropTypes from "prop-types";

const ButtonSubmit = (props) => {
  let buttonColor = props.buttonColor ? props.buttonColor : "";
  let text = props.text ? props.text : "";
  return (
    <div>
      <button
        className={`${buttonColor} border border-solid border-default w-96 rounded-3xl`}
        type="submit"
      >
        {text}
      </button>
    </div>
  );
};

ButtonSubmit.propTypes = {
  buttonColor: PropTypes.string,
  text: PropTypes.string,
};

export default ButtonSubmit;

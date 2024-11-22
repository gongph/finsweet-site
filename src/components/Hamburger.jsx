import PropTypes from "prop-types";

export default function Hamburger(props) {
  const defaultClass = "hamburger";
  const expandedClass = "hamburger expanded";
  return (
    <button
      className={props.expand ? expandedClass : defaultClass}
      onClick={props.onClick}
    >
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </button>
  );
}

Hamburger.propTypes = {
  expand: PropTypes.bool,
  onClick: PropTypes.func,
};

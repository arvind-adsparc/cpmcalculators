const Button = ({ text, color }) => {
  return (
    <div className="cta">
      <button className={`btn ${color}`}>{text}</button>
    </div>
  );
};

export default Button;

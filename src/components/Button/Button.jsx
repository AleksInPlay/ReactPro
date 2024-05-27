import "./styles.css";

function Button({name, type="button", onButtonClick}) {
   return <button className="button-component"type={type} onClick={onButtonClick}>
      {name}
      </button>;
}

export default Button;



/*import "./styles.css";

function Button({ buttonName = "Get data", isPrymaryButton }) {
    // 1 variant
   // const buttonClass = isPrymaryButton ? 'main-button primary-button' : "main-button secondary-button";
console.log(isPrymaryButton)
   // 2 variant
const buttonClass = `main-button ${isPrymaryButton ? 'primary-button' : "secondary-button"
   
}`;
return <button className={buttonClass}>{buttonName}</button>;
}
export default Button;*/
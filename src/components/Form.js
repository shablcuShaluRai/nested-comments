const Form = ({ handelClick, btnName, handleText, text, variant = "" }) => {
    return (
      <>
        <input
          type="text"
          value={text}
          onChange={handleText}
          className="input-class"
        />
        <button className={variant} onClick={handelClick}>
          {btnName}
        </button>
      </>
    );
  };
  
  export default Form;
  
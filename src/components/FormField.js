import { useRef } from "react";

function FormField({ status, typeDescription, dispatch, buttonText }) {
  const amountField = useRef(0);
  function handleSubmit() {
    const amount = Number(amountField.current.value);
    if (isNaN(amount)) {
      return;
    }

    dispatch({
      type: typeDescription,
      payload: amount,
    });

    amountField.current.value = "";
  }
  return (
    <div>
      <br />
      <input type="number" ref={amountField} disabled={status} />
      <br />
      <br />
      <button onClick={handleSubmit} disabled={status}>
        {buttonText}
      </button>
    </div>
  );
}

export default FormField;

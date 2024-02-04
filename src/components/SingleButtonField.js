function SingleButtonField({ status, typeDescription, dispatch, buttonText }) {
  return (
    <div>
      <br />
      <button
        onClick={() => {
          dispatch({ type: typeDescription });
        }}
        disabled={status}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default SingleButtonField;

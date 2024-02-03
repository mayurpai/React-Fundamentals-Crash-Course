export const ChildComponent = (props) => {
  return (
    <div>
      <button onClick={() => props.greetHandler("Mayur")}>Greet Parent</button>
    </div>
  );
};

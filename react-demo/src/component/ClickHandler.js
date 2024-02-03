export const ClickHandler = () => {
  const clicker = (event) => {
    console.log("I Am Clicked!");
    console.log(event);
  };
  return <button onClick={clicker}>Click!</button>;
};

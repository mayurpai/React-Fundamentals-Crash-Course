const Welcome = (props) => {
  return (
    <h1 className="welcome">Hello! {props.first_name} {props.last_name}</h1>
  )
};

export default Welcome;

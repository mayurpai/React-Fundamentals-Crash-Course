import { GuestGreeeting } from "./GuestGreeting";
import { UserGreeting } from "./UserGreeting";

export const GreetingType = (props) => {
  const isLoggedIn = props.isLogged;
  return (
    <>
      {isLoggedIn ? (
        <UserGreeting></UserGreeting>
      ) : (
        <GuestGreeeting></GuestGreeeting>
      )}
      {isLoggedIn && <h1>Mayur</h1>}
    </>
  );
  // if (isLoggedIn)
  //     return <UserGreeting></UserGreeting>
  // return <GuestGreeeting></GuestGreeeting>
};

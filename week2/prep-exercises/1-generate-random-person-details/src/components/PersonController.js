import { useState, useEffect } from "react";
import Person from "./Person";

const PersonController = () => {
  const [person, setPerson] = useState(null);

  const getPerson = () => {
    fetch("https://randomuser.me/api?results=1")
      .then((res) => res.json())
      .then((data) => {
        const user = data.results[0];
        const person = {
          firstName: user.name.first,
          lastName: user.name.last,
          email: user.email,
        };
        setPerson(person);
      });
  };
  useEffect(() => {
    getPerson();
  }, []);
  console.log("he");

  return <Person person={person} />;
};
export default PersonController;

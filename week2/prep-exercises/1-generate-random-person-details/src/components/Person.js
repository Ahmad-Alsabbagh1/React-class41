const Person = ({ person }) => {
  if (person !== null) {
    return (
      <ul>
        <li>{person.firstName}</li>
        <li>{person.lastName}</li>
        <li>{person.email}</li>
      </ul>
    );
  }
};

export default Person;

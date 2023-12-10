import { useParams } from "react-router-dom";
function User() {
  let paramteters = useParams();
  const { name, profession } = paramteters;
  return (
    <>
      <h1>
        Welcome to User's Page. Hi, This is {name} and I am {profession}{" "}
        engineer by profession.
      </h1>
    </>
  );
}

export default User;

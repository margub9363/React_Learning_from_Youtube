import { useSearchParams } from "react-router-dom";
function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("age"));
  const age = searchParams.get("age");
  const city = searchParams.get("city");

  return (
    <>
      <h1>Filter Page</h1>
      <h3>Age is : {age}</h3>
      <h3>City is : {city}</h3>
      <input
        type="text"
        placeholder="Your Suggestion pls"
        onChange={(e) =>
          setSearchParams({ advice: e.target.value, age: 10, city: city })
        }
      />
    </>
  );
}

export default Filter;

import { useState } from "react";

function App() {
  let str1 = "home";
  let str2 = "Exploer";
  let str3 = "Notification";

  let [counter, setcounter] = useState(1);
  let [changeCity] = useState("mumbai");
  let changeCity = () =>{
    city = "hello"+ city;
    setCity (city);

  };
  let increment = () => {

    counter++;
    console.log(counter);

    setcounter(counter);

  };
  return (
    <div>
      <h1>{city}</h1>
      <input type="button" value="changecity" onClick={changeCity}/>
      <hr />
      <h1>{str1}</h1>
      <h1>{str2}</h1>
      <h1>{str3}</h1>
      <h1>{counter}</h1>
      <input type="button" value="increment" onClick={increment}/>
      </div>
  );
}

export default App;

    </div>
  )

}
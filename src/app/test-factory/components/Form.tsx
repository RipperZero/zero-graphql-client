import { FC, useState, useEffect, ChangeEvent } from "react";

export const FormView: FC = () => {
  // hooks start
  const [name, setName] = useState("Mary");
  const [surname, setSurname] = useState("Poppins");
  const [width, setWidth] = useState(window.innerHeight);
  // hooks end

  // useEffect functions start
  useEffect(() => {
    console.log("render");
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
    // just first time
  }, []);
  // useEffect functions end

  // logic functions start
  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleSurNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSurname(event.target.value);
  };
  // logic functions end

  // render functions start
  return (
    <div>
      <p style={{ color: "red" }}>{"Form"}</p>
      <input value={name} onChange={handleNameChange} />
      <input value={surname} onChange={handleSurNameChange} />
      <p>{`Hello, ${name} ${surname}`}</p>
      <p>{`Window width: ${width}`}</p>
    </div>
  );
  // render functions end
};

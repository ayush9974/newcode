import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [array, setarray] = useState([]);
  const [object, setobject] = useState({
    message: "",
    status: "error",
  });
  const handleChange = (event) => {
    const { value, name } = event.target;
    setobject({ ...object, [name]: value });
  };

  const handleClear = (index) => {
    console.log("hiiiiiiiiii", index);
    const array1 = [...array];
    array1.splice(index, 1);
    setarray(array1);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(object);
    setarray([object, ...array]);
    console.log(array);
    setobject({
      message: "",
      status: "error",
    });
  };
  useEffect(() => {
    console.log(array);
  }, [array]);

  return (
    <div className="App">
      {/* <PaginatedItems itemsPerPage={4} /> */}
      <form
        style={{
          margin: "20px",
        }}
      >
        <input
          type="text"
          name="message"
          value={object.message}
          placeholder="Enter the message"
          onChange={handleChange}
        />
        <br />
        <select
          name="status"
          id="status"
          value={object.status}
          onChange={handleChange}
        >
          <option value="error">Error</option>
          <option value="warning">Warning</option>
          <option value="info">Info</option>
        </select>
        <br />
        <input type="submit" onClick={handleSubmit} />
      </form>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <div>
          Error type1
          {array.map((element, index) => {
            if (element.status === "error")
              return (
                <div className="error">
                  {" "}
                  {element.message}
                  <div
                    style={{
                      display: "flex",

                      justifyContent: "end",
                    }}
                  >
                    <button
                      onClick={() => handleClear(index)}
                      type="button"
                      style={{
                        border: "none",
                        backgroundColor: "transparent",
                      }}
                    >
                      clear
                    </button>
                  </div>
                </div>
              );
          })}
        </div>
        <div>
          <div style={{ justifyContent: "center" }}>Warning type2</div>
          {array.map((element, index) => {
            if (element.status === "warning")
              return (
                <div className="warning">
                  {" "}
                  {element.message}
                  <div
                    style={{
                      display: "flex",

                      justifyContent: "end",
                    }}
                  >
                    <button
                      onClick={() => handleClear(index)}
                      type="button"
                      style={{
                        border: "none",
                        backgroundColor: "transparent",
                      }}
                    >
                      clear
                    </button>
                  </div>
                </div>
              );
          })}
        </div>
        <div>
          Info type3
          {array.map((element, index) => {
            if (element.status === "info")
              return (
                <div className="info">
                  {" "}
                  {element.message}
                  <div
                    style={{
                      display: "flex",

                      justifyContent: "end",
                    }}
                  >
                    <button
                      onClick={() => handleClear(index)}
                      type="button"
                      style={{
                        border: "none",
                        backgroundColor: "transparent",
                      }}
                    >
                      clear
                    </button>
                  </div>
                </div>
              );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

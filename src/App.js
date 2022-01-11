import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [ok, setOk] = useState(false);
  const generate = () => {
    const min = 1000;
    const max = 9990;
    const rand = min + Math.random() * (max - min);
    const number = Math.round(rand);
    // display
    const displey = (document.getElementById("display-pin").value = number);
  };
  const handleButtonClick = (e) => {
    const typedSeclect = document.getElementById("typed-numbers");
    // const previousType = e.target.innerText;
    const type = e.target.innerText;
    const Cvalue = "C";

    if (type == Cvalue) {
      typedSeclect.value = "";
    } else {
      const NewtyoeType = e.target.innerText;
      typedSeclect.value = typedSeclect.value + NewtyoeType;
    }
  };
  const submit = () => {
    const pin = document.getElementById("display-pin").value;
    const number = document.getElementById("typed-numbers").value;
    const fails = document.getElementById("notify-fail");
    const success = document.getElementById("notify-success");
    if (pin == number) {
      setOk(true);
      success.style.display = "block";
      fails.style.display = "none";
    } else {
      fails.style.display = "block";
      success.style.display = "none";
    }
  };
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="pin-generator half-width">
              <input id="display-pin" class="form-control" type="text" />
              <button onClick={generate} class="generate-btn">
                Generate Pin
              </button>
            </div>
          </div>
          <div class="col-md-6">
            <div class="input-section half-width">
              <input id="typed-numbers" class="form-control" type="text" />
              <div class="numbers" onClick={handleButtonClick}>
                <div id="key-pad" class="calc-body">
                  <div class="calc-button-row">
                    <div class="button">7</div>
                    <div class="button">8</div>
                    <div class="button">9</div>
                  </div>
                  <div class="calc-button-row">
                    <div class="button">4</div>
                    <div class="button">5</div>
                    <div class="button">6</div>
                  </div>
                  <div class="calc-button-row">
                    <div class="button">1</div>
                    <div class="button">2</div>
                    <div class="button">3</div>
                  </div>
                  <div class="calc-button-row">
                    <div class="button">&lt;</div>
                    <div class="button">0</div>
                    <div class="button">C</div>
                  </div>
                  <div>{/* <p class="action-left">3 try left</p> */}</div>
                </div>
              </div>
              <button onClick={submit} type="submit" class="submit-btn ">
                Submit
              </button>
            </div>
          </div>
          <div class="notify-section">
            <p id="notify-fail" class="notify">
              ❌ Pin Didn't Match, Please try again
            </p>
            <p id="notify-success" class="notify">
              ✅ Pin Matched... Secret door is opening for you
            </p>
          </div>
        </div>
      </div>
      {/* mission */}
    </>
  );
}

export default App;

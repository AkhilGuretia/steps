import { useState } from "react";
import "./index.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setISOpen] = useState(true);

  const handlePrevious = () => {
    if (step > 1)
      setStep(step - 1);
  }

  const handleNext = () => {
    if (step < 3)
      setStep(step + 1);
  }

  return (
    <>

      <button className="close" onClick={() => setISOpen(!isOpen)}>
        &times;
      </button>

      {isOpen &&
        <div className="steps">

          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <StepMessage step={step} >
            {messages[step - 1]}
            <div className="buttons">
              <Button
                bgColor="#7950f2"
                textColor="#333"
                onClick={() => alert(`Learn how to ${messages[step - 1]}`)}
              >
                Learn how
              </Button>
            </div>
          </StepMessage>

          <div className="buttons">
            <Button onClick={handlePrevious} bgColor="#7950f2" textColor="#fff">
              <span>👈</span> Previous
            </Button>
            <Button onClick={handleNext} bgColor="#7950f2" textColor="#fff" >
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      }
    </>
  );
}

const StepMessage = ({ step, children }) => {

  return (
    <div className="message">
      <h3>Step {step}:</h3>
      {children}
    </div>
  );
}

const Button = ({ bgColor, textColor, onClick, children }) => {

  return (
    <button onClick={onClick} style={{ backgroundColor: bgColor, color: textColor }} >
      {children}
    </button>
  );
}
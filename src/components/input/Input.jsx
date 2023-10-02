import { useState } from "react";

 const Input = (props) => {
    const initialState={
        "current-savings":1000,
        "yearly-contribution":1200,
        "expected-return":7,
        duration:15
    }

    const [userInput,setUserInput]=useState(initialState);

    const inputChangeHandler=(input,value)=>{
        setUserInput((prevInput)=>{
            return{
                ...prevInput,
                [input]:value
            };
        });


    };
    const handleReset=()=>{
        setUserInput(initialState);
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        props.calculate(userInput);

    }


    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="input-group">
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input type="number" id="current-savings" 
                    onChange={(event)=>inputChangeHandler("current-savings",event.target.value)} 
                    value={userInput['current-savings']}
                    />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input type="number" id="yearly-contribution"
                    onChange={(event)=>inputChangeHandler("yearly-contribution",event.target.value)}
                    value={userInput['yearly-contribution']}
                     />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input type="number" id="expected-return"
                     onChange={(event)=>inputChangeHandler("expected-return",event.target.value)}
                     value={userInput['expected-return']}
                      />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input type="number" id="duration"
                     onChange={(event)=>inputChangeHandler('duration',event.target.value)}
                     value={userInput['duration']}
                     />
                </p>
            </div>
            <p className="actions">
                <button type="reset" className="buttonAlt" onClick={handleReset}>
                    Reset
                </button>
                <button type="submit" className="button">
                    Calculate
                </button>
            </p>
        </form>
    )
}
export default Input;
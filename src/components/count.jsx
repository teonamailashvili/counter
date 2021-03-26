import Button from "./button";
import { useState } from "react";

const Count = () => {
    const [counter, setCounter] = useState(0);


    const addOne = () =>{
        setCounter(counter + 1);
    }

    const addFive = () =>{
        setCounter(counter + 5);
    }

    const addHundred = () =>{
        setCounter(counter + 100);
    }

    const substractOne = () =>{
        setCounter(counter - 1);
    }

    const substractFive = () =>{
        setCounter(counter - 5);
    }

    const substractHundred = () =>{
        setCounter(counter - 100);
    }
    
    const reset = () =>{
        setCounter(0)
    }

    return(
        <div>
            <h1>
                {counter}
            </h1>
            <Button onClick={addOne} text = "+1" type='plusOne'/>
            <Button onClick={addFive} text = "+5" type='plusFive'/>
            <Button onClick={addHundred} text = "+100"type='plusHundred'/>
            <Button onClick={substractOne} text = "-1" type='minusOne'/>
            <Button onClick={substractFive} text = "-5" type ='minusFive'/>
            <Button onClick={substractHundred} text = "-100" type='minusHundred'/>
            <Button onClick={reset} text = "reset" type='reset'/>
        </div>
    );
};

export default Count;
import React, {useRef, useEffect} from "react";
import "./autofocus.css"

const Form = () => {
    const emailInput = useRef(null);

    useEffect(() => {
        if (emailInput.current) {
            emailInput.current.focus();
        }
    },[]);

    return (
        <form>
            <label>
                Email*
                <input name="email" type="email" ref={emailInput} />
            </label>
            <label>
                Password
                <input name="email" type="email" />
            </label>
            <button type="submit">Login</button>
        </form>
    )

}

export default Form
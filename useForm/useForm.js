import { useState } from "react"


const useForm = ( initialState = {} ) => {
  
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues( initialState );
    }

    const handelInputChange = ({target}) => {
        
        setValues({
            ...values,
            [ target.name ]: target.value
        });
    }

    return [ values, handelInputChange, reset ];
}

export default useForm

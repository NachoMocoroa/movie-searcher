import { useState } from 'react';

const useForm = ( initialState: any ) => {
    
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues( initialState );
    };

    const handleInputChange = ({ target }: any) => {
        setValues({
            ...values,
            [ target.name ]: target.value
        });
    };

    return [ values, handleInputChange, reset ];
};

export default useForm;

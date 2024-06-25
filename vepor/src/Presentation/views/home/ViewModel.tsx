import React, { useState } from 'react'


const HomeViewModel = () => {

    const [values, setValues] = useState({
        email: "",
        password: "",

    });
    //create the method to change the values 
    const onChange = (property: string, value: any) => {

        setValues({...values,[property]:value})

    }

    return {
    ...values,
    onChange
    }
}

export default HomeViewModel

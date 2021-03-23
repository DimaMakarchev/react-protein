import {Field} from "redux-form";
import React from "react";


export const FieldForField = (component: string, name: string, placeholder: string) => (
    <Field component={component} name={name} placeholder={placeholder}/>
);

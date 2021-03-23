import React from "react";
import {Protein} from "./Protein";
import {reduxForm} from "redux-form";


// export const ProteinComponent: React.FC<TypeProteinComponent> = ({...props}) => {
export const ProteinFormComponent = reduxForm({form: 'newlogin'})(Protein);


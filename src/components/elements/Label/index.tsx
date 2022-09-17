import { LabelHTMLAttributes } from "react";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement>{}

export const Label = (props: LabelProps) =>{
    return (
        <label {...props}></label>
    )
}
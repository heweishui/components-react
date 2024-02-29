import React from "react";
export interface InputIProps {
    title: string;
    type: string;
    onPressEnter?: (e: any) => void;
}
declare const Input: (props: InputIProps) => React.JSX.Element;
export default Input;

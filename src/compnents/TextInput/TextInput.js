import { jsx as _jsx } from "react/jsx-runtime";
const TextInput = ({ value, onChange, placeholder }) => {
    return (_jsx("input", { type: "text", value: value, onChange: (e) => onChange(e.target.value), placeholder: placeholder, className: "p-2 border rounded-md" }));
};
export default TextInput;

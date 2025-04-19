// import { jsx as _jsx } from "react/jsx-runtime";
 
// function App() {
//     return (_jsx("div", { className: "min-h-screen flex items-center justify-center bg-gray-100", children: _jsx(Button, { variant: "primary", children: "Click Me" }) }));
// }
// export default App;
import { jsx as _jsx } from "react/jsx-runtime";
// import { Button } from "./compnents/Typography/Button";

function App() {
  return _jsx("div", {
    className: "min-h-screen flex items-center justify-center bg-gray-100",
    children: _jsx(Button, { variant: "primary", children: "Click Me" }),
  });
}


export default App;
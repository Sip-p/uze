import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Modal = ({ isOpen, onClose, title, children, onConfirm, confirmText = 'Confirm', cancelText = 'Cancel' }) => {
    if (!isOpen)
        return null;
    return (_jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50", children: _jsxs("div", { className: "bg-white p-6 rounded-lg shadow-lg max-w-sm w-full", children: [_jsxs("div", { className: "flex justify-between items-center mb-4", children: [_jsx("h3", { className: "text-xl font-semibold", children: title }), _jsx("button", { onClick: onClose, className: "text-gray-600 font-semibold text-xl", children: "\u00D7" })] }), _jsx("div", { className: "mb-4", children: children }), _jsxs("div", { className: "flex justify-end gap-4", children: [_jsx("button", { onClick: onClose, className: "px-4 py-2 bg-gray-200 text-gray-800 rounded-md", children: cancelText }), _jsx("button", { onClick: onConfirm, className: "px-4 py-2 bg-blue-500 text-white rounded-md", children: confirmText })] })] }) }));
};
export default Modal;

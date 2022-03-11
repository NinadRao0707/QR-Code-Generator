import React from 'react'
import { useContext } from "react"
import { InputContext } from "../pages/index"

function InputField() {
    const { inputValue, setInputValue } = useContext(InputContext);
    const handleOnChange = e => setInputValue({ ...inputValue, url: e.target.value });

    return (
        <div>
            <label
                className="font-semibold text-md"
            >Enter the URL</label>
            <input
                type="url"
                className="w-full border-2 py-2 px-3 text-gray-700 rounded-sm mt-2"
                placeholder="https://example.com"
                value={inputValue.url}
                onChange={handleOnChange}
            />
        </div>
    )
}

export default InputField
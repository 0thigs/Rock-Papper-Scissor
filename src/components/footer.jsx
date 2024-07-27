import React, { useState } from 'react';
import Rules from './rules';

export default function Footer() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <footer>
            <button onClick={() => setIsOpen(!isOpen)} className="py-1 font-light text-white uppercase transition-all border border-white rounded-lg hover:scale-105 px-7">
                Rules
            </button>
            <Rules isOpen={isOpen} setIsOpen={setIsOpen} />
        </footer>
    )
}

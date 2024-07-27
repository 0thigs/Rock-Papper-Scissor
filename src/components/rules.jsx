import React, { useEffect, useState } from 'react';
import RulesImage from "../../public/images/rules.svg";
import X from "../../public/images/x.svg";
import Image from 'next/image';

function Rules({ isOpen, setIsOpen }) {
    const [visible, setVisible] = useState(isOpen);

    useEffect(() => {
        if (isOpen) {
            setVisible(true);
        } else {
            setTimeout(() => setVisible(false), 350);
        }
    }, [isOpen]);

    return (
        <>
            {visible && (
                <div className="fixed inset-0 flex items-center justify-center transition-opacity duration-500 bg-black bg-opacity-50">
                    <div className={`relative p-8 text-black bg-white rounded-lg ${isOpen ? 'animate-fade-in' : 'animate-fade-out'} w-96`}>
                        <div className='flex items-center justify-between w-full mb-5'>
                            <h2 className="text-2xl font-bold">RULES</h2>
                            <button
                                className="text-gray-400 hover:text-gray-600"
                                onClick={() => setIsOpen(false)}>
                                <Image
                                    src={X}
                                    alt="Close"
                                />
                            </button>
                        </div>
                        <div className='flex items-center justify-center w-full'>
                            <Image
                                width={300}
                                src={RulesImage}
                                alt="Rules"
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Rules;
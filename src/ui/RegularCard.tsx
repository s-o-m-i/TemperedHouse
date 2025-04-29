import React from 'react'

interface RegularCardProps {
    title: string;
    desc: string;
}

const RegularCard: React.FC<RegularCardProps> = ({ title, desc }) => {
    return (
        <div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-[#9f193f] rounded-full flex items-center justify-center mb-6 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </div>
                <h3 className="text-xl  text-[#28536B] mb-2">{title}</h3>
                <p className="text-gray-600">
                    {desc}
                </p>
            </div>
        </div>
    )
}

export default RegularCard

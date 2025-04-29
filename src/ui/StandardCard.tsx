import React from 'react'

interface StandardCardProps {
    title: string;
    desc: string;
}

const StandardCard: React.FC<StandardCardProps> = ({ title, desc }) => {
    return (
        <div className='p-4 bg-gray-50 border-2 border-b-4 border-[#9F1940]  rounded-lg shadow-sm hover:shadow-md transition-shadow'>
            <h3 className="text-xl font-semibold text-[#28536B] mb-2">{title}</h3>
            <p className="text-gray-600">
                {desc}
            </p>
        </div>
    )
}

export default StandardCard

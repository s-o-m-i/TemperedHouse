import React from 'react';

const companies = [
  { name: 'Google', logo: '/images/companyone.png' },
  { name: 'Microsoft', logo: '/images/companyKudu.svg' },
  { name: 'Amazon', logo: '/images/companyKinx.png' },
  { name: 'Netflix', logo: '/images/companyKallidus.svg' },
  { name: 'Tesla', logo: '/images/companyone.png' },
  { name: 'Microsoft', logo: '/images/companyKudu.svg' },
  { name: 'Meta', logo: '/images/companyone.png' },
  { name: 'Netflix', logo: '/images/companyKallidus.svg' },
  { name: 'Tesla', logo: '/images/companyone.png' },
  { name: 'Microsoft', logo: '/images/companyKudu.svg' },
  { name: 'Meta', logo: '/images/companyone.png' },
];

const InfiniteScrollCompanies = () => {
  return (
    <div className="relative overflow-hidden bg-[#fff] py-10">
      <div className="flex items-center gap-12 animate-marquee">
        {companies.concat(companies).map((company, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-40 h-24 bg-[#ffffff10] rounded-xl flex items-center justify-center hover:scale-110 hover:bg-gradient-to-r hover:from-[#04213F] hover:to-[#9f193f] transition-all duration-300 cursor-pointer"
          >
            <img src={company.logo} alt={company.name} className="w-24 h-auto object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteScrollCompanies;

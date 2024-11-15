import React from 'react';

function Category() {
  return (
    <div className="mt-40">
      <h2 className="font-bold text-3xl text-center mb-6">Browse By Type</h2>
      <div>
        <div className="border rounded-xl p-10 flex flex-wrap justify-between items-center gap-5 shadow-md">
          {[
            { src: '/Hybrid.png', label: 'Hybrid' },
            { src: '/compact.png', label: 'Compact' },
            { src: '/convertible.png', label: 'Convertible' },
            { src: '/Electric.png', label: 'Electric' },
            { src: '/jeep.png', label: 'Jeep' },
            { src: '/minivan.png', label: 'Minivan' },
            { src: '/Truck.png', label: 'Truck' },
            { src: '/Sedan.png', label: 'Sedan' },
            { src: '/Muscle.png', label: 'Muscle' },
          ].map((item, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 flex flex-col items-center shadow-sm hover:shadow-lg transition-shadow bg-[#eef0fc]"
            >
              <img src={item.src} width={55} height={55} alt={item.label} />
              <span className="mt-2 text-sm font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Category;

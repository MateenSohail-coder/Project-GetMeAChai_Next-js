"use client";

export default function CircleDivs({ items = 6 }) {
  const radius = 100; // distance in px from center

  return (
    <div className="flex items-center justify-center p-6">
      <div className="relative w-64 h-64 mx-auto rounded-full bg-gray-100">
        {/* Center Circle */}
        <div className="absolute left-1/2 top-1/2 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow -translate-x-1/2 -translate-y-1/2">
          Center
        </div>

        {/* Outer Divs */}
        <div className="absolute inset-0">
          {Array.from({ length: items }).map((_, i) => {
            const angle = (360 / items) * i;
            return (
              <div
                key={i}
                className="absolute left-1/2 top-1/2 w-12 h-12 bg-blue-500 rounded-full shadow flex items-center justify-center text-white"
                style={{
                  transform: `translate(-50%, -50%) rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
                }}
              >
                {i + 1}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

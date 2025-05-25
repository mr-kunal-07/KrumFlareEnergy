import React, { useEffect, useState, useRef } from "react";

const statsData = [
    { number: 128, label: "Warehouses Managed" },
    { number: 40, label: "Countries Covered" },
    { number: 250, label: "Companies We Help" },
    { number: 520, label: "Team Members" },
];

// Hook to detect if an element is visible on screen
function useOnScreen(ref) {
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => setIsIntersecting(entry.isIntersecting),
            { threshold: 0.1 }
        );

        observer.observe(ref.current);

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [ref]);

    return isIntersecting;
}

// Hook for counting up animation triggered by `start`
function useCountUp(target, duration = 1000, start = false) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!start) return;

        let startCount = 0;
        const increment = target / (duration / 10);

        const interval = setInterval(() => {
            startCount += increment;
            if (startCount >= target) {
                setCount(target);
                clearInterval(interval);
            } else {
                setCount(Math.ceil(startCount));
            }
        }, 10);

        return () => clearInterval(interval);
    }, [target, duration, start]);

    return count;
}

export default function AboutWebsiteStats() {
    const containerRef = useRef();
    const isVisible = useOnScreen(containerRef);

    return (
        <div
            ref={containerRef}
            className="bg-[#f97316] text-white p-10 m-10 mt-[-6px] rounded-2xl flex flex-col md:flex-row justify-around items-center gap-8"
        >
            {statsData.map((stat, index) => {
                const count = useCountUp(stat.number, 1000, isVisible);
                return (
                    <div key={index} className="text-center">
                        <div className="text-4xl font-bold">{count}+</div>
                        <div className="text-lg mt-2">{stat.label}</div>
                    </div>
                );
            })}
        </div>
    );
}

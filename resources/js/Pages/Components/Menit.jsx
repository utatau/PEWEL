import { useEffect, useState } from "react";

export default function Menit() {
    const [secondsLeft, setSecondsLeft] = useState(15 * 60);

    useEffect(() => {
        const timer = setInterval(() => {
            setSecondsLeft(prev => {
                if (prev <= 1) {
                    clearInterval(timer);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (secs) => {
        const minutes = String(Math.floor(secs / 60)).padStart(2, '0');
        const seconds = String(secs % 60).padStart(2, '0');
        return `${minutes}:${seconds}`;
    };

    return (
        <p className="text-center font-bold text-xl">
            Sisa waktu: {formatTime(secondsLeft)}
        </p>
    );
}

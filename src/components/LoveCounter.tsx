import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface LoveCounterProps {
  startDate: string; // formato: "2024-09-18T00:00:00"
}

export function LoveCounter({ startDate }: LoveCounterProps) {
  const [duration, setDuration] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const start = new Date(startDate);

    const update = () => {
      const now = new Date();
      let years = now.getFullYear() - start.getFullYear();
      let months = now.getMonth() - start.getMonth();
      let days = now.getDate() - start.getDate();

      if (days < 0) {
        months--;
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
      }
      if (months < 0) {
        years--;
        months += 12;
      }

      const diff = now.getTime() - start.getTime();
      const totalSeconds = Math.floor(diff / 1000);
      const seconds = totalSeconds % 60;
      const totalMinutes = Math.floor(totalSeconds / 60);
      const minutes = totalMinutes % 60;
      const totalHours = Math.floor(totalMinutes / 60);
      const hours = totalHours % 24;

      setDuration({ years, months, days, hours, minutes, seconds });
    };

    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, [startDate]);

  return (
    <motion.div
      className="flex items-center justify-center md:justify-start space-x-2 text-pink-400 text-sm md:text-base"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* 💓 Coração pulsante */}
      <motion.span
        className="text-pink-500 text-lg md:text-2xl"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        💖
      </motion.span>

      <span>
        Fazendo o básico há{" "}
        <span className="font-semibold text-pink-600">
          {duration.years > 0 && `${duration.years} ano${duration.years > 1 ? "s" : ""} `}
          {duration.months > 0 && `${duration.months} mês${duration.months > 1 ? "es" : ""} `}
          {duration.days > 0 && `${duration.days} dia${duration.days > 1 ? "s" : ""}, `}
          {`${String(duration.hours).padStart(2, "0")}:${String(duration.minutes).padStart(
            2,
            "0"
          )}:${String(duration.seconds).padStart(2, "0")}`}
        </span>
      </span>
    </motion.div>
  );
}

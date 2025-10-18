import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface LoveCounterProps {
  startDate: string; // formato: "2024-09-18"
}

export function LoveCounter({ startDate }: LoveCounterProps) {
  const [duration, setDuration] = useState({ years: 0, months: 0, days: 0 });

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

      setDuration({ years, months, days });
    };

    update();
    const timer = setInterval(update, 1000 * 60 * 60); // atualiza a cada hora
    return () => clearInterval(timer);
  }, [startDate]);

  return (
    <motion.div
      className="text-pink-400 text-sm md:text-base text-center md:text-left"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      💖 Só o básico há{" "}
      <span className="font-semibold text-pink-600">
        {duration.years > 0 && `${duration.years} ano${duration.years > 1 ? "s" : ""} `}
        {duration.months > 0 && `${duration.months} mês${duration.months > 1 ? "es" : ""} `}
        {duration.days > 0 && `${duration.days} dia${duration.days > 1 ? "s" : ""}`}
      </span>
    </motion.div>
  );
}

"use client";

import { useEffect, useState } from "react";

export function useTime(formatOptions?: Intl.DateTimeFormatOptions) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const t = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        ...formatOptions,
      });
      setTime(t.toLowerCase());
    };

    updateTime();

    const interval = setInterval(updateTime, 60000);

    return () => clearInterval(interval);
  }, [formatOptions]);

  return time;
}
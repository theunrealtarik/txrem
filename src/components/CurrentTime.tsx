import { useState, type FC, useEffect } from "react";

const CurrentTime: FC = ({}) => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const itnerval = setInterval(() => {
      setTime(new Date());
    }, 1_000);

    return () => {
      clearInterval(itnerval);
    };
  }, []);

  const formattedTime = Intl.DateTimeFormat("en-GB", {
    dateStyle: "full",
    timeStyle: "medium",
    timeZone: "Africa/Algiers",
    hour12: false,
  }).format(time);

  return <span className="text-sky-300 glow-sky">{formattedTime}</span>;
};

export default CurrentTime;

import { FC, useEffect, useState } from 'react';

type Props = {
  clockName: string;
};

export const Clock: FC<Props> = ({ clockName }) => {
  const [time, setTime] = useState(new Date());

  const formatedTime = time.toUTCString().slice(-12, -4);

  useEffect(() => {
    const clockTimer = window.setInterval(() => {
      // eslint-disable-next-line
      console.info(formatedTime);
      setTime(new Date());
    }, 1000);

    return () => {
      window.clearInterval(clockTimer);
    };
  }, []);

  return (
    <div className="Clock">
      <strong className="Clock__name">{clockName}</strong>

      {' time is '}

      <span className="Clock__time">{formatedTime}</span>
    </div>
  );
};

import { useState, useEffect, useRef } from 'react';

function MutableRef() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef<number | null>(null!);

  const stopTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    return stopTimer();
  }, []);

  return (
    <div>
      Timer - {timer}
      <button onClick={() => stopTimer()}>Stop Timer</button>
    </div>
  );
}

export default MutableRef;

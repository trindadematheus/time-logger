import { useEffect, useRef, useState } from "react";

import * as S from "./styles";

function Counter() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [markedTimes, setMarkedTimes] = useState([]);

  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setCount(count + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [count, isRunning]);

  const formattedCount = new Date(count * 1000).toISOString().substr(11, 8);

  function markTime() {
    setMarkedTimes((state) => [...state, formattedCount]);
  }

  function handleKey(e: any) {
    if (e.key === " ") {
      setMarkedTimes((state) => [...state, formattedCount]);
    }
  }

  return (
    <>
      <S.Wrapper tabIndex={1} onKeyDown={handleKey} ref={pageRef}>
        <S.Container>
          <S.CounterArea>
            <h2 className="title">ELAPSED TIME</h2>

            <h1 className="timer">{formattedCount}</h1>
          </S.CounterArea>

          <S.Actions>
            <button
              onClick={() => setIsRunning(!isRunning)}
              className="action-button"
              onFocus={() => pageRef.current.focus()}
            >
              {isRunning ? "RESUME" : "START"}
            </button>

            <button
              onFocus={() => pageRef.current.focus()}
              onClick={markTime}
              className="action-button"
            >
              MARK
            </button>
          </S.Actions>

          <S.Markers>
            {markedTimes.map((time, idx) => (
              <S.Marker key={idx}>
                <h2 className="marker-index">#{idx + 1}</h2>

                <p className="marker-time">{time}</p>
              </S.Marker>
            ))}
          </S.Markers>
        </S.Container>
      </S.Wrapper>
    </>
  );
}

export default Counter;

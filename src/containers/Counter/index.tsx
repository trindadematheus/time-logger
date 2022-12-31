import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { useShortcuts } from "../../hooks/use-shortcuts";

import * as S from "./styles";

type MarkedTimes = {
  message: string;
  time: string;
};

function Counter() {
  const { shortcuts } = useShortcuts();

  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [markedTimes, setMarkedTimes] = useState<MarkedTimes[]>([]);

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

  function handleKey(e: any) {
    const finded = shortcuts.find((short) => short.key === e.key);

    if (!!finded) {
      setMarkedTimes((state) => [
        ...state,
        {
          message: finded.message,
          time: formattedCount,
        },
      ]);
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
              {isRunning ? "PAUSE" : "START"}
            </button>

            <Link href="/shortcuts">
              <button className="action-button secondary">SHORTCUTS</button>
            </Link>
          </S.Actions>

          <S.Markers>
            {markedTimes.map((register, idx) => (
              <S.Marker key={idx}>
                <h2 className="marker-index">{register.message}</h2>

                <p className="marker-time">{register.time}</p>
              </S.Marker>
            ))}
          </S.Markers>
        </S.Container>
      </S.Wrapper>
    </>
  );
}

export default Counter;

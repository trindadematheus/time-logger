import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 20px;
  height: 100vh;

  display: flex;
`;

export const Container = styled.main`
  max-width: 400px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 12px;

  section {
    background-color: #121212;
    border-radius: 14px;
  }
`;

export const CounterArea = styled.section`
  padding: 40px;
  width: 400px;

  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    color: #9a9a9a;
    font-size: 14px;
  }

  .timer {
    color: #f7f7f7;
    font-size: 72px;
  }
`;

export const Actions = styled.section`
  background-color: #222629;
  border-radius: 20px;
  padding: 20px;

  display: flex;
  gap: 12px;

  .action-button {
    background-color: #63fae2;
    border-radius: 4px;
    height: 40px;
    width: 100%;

    font-weight: bold;
    font-size: 14px;
    color: #222;

    transition: all 400ms;

    :hover {
      opacity: 0.8;
    }
  }
`;

export const Markers = styled.section`
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 6px;
  overflow: auto;

  /* width */
  ::-webkit-scrollbar {
    width: 4px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #1a1a1a;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #333;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #444;
  }
`;

export const Marker = styled.div`
  background-color: #1a1a1a;
  border-radius: 4px;
  padding: 8px 16px;

  display: flex;
  align-items: center;
  gap: 16px;

  .marker-index {
    color: white;
  }

  .marker-time {
    color: #ccc;
  }
`;

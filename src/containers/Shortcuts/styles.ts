import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 0px 20px;
  height: 100vh;
`;

export const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;

export const Header = styled.div`
  padding: 40px 0px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .left-content {
    .title {
      color: #f7f7f7;
    }
  }

  .right-content {
    .add {
      background-color: #63fae2;
      border-radius: 4px;
      padding: 8px 16px;

      font-weight: bold;
      font-size: 14px;
      color: #222;

      transition: all 400ms;

      :hover {
        opacity: 0.8;
      }
    }
  }
`;
export const List = styled.section`
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

export const Item = styled.div`
  background-color: #1a1a1a;
  border-radius: 4px;
  padding: 8px 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .item-left-content {
    display: flex;
    align-items: center;
    gap: 16px;

    .key {
      color: white;
    }

    .message {
      color: #ccc;
    }
  }

  .item-right-content {
    display: flex;
    align-items: center;
    gap: 8px;

    .item-action-button {
      background-color: #63fae2;
      border-radius: 4px;
      padding: 8px 14px;

      font-weight: bold;
      color: #222;

      transition: all 400ms;

      :hover {
        opacity: 0.8;
      }
    }
  }
`;

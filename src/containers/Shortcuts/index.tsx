import { useState } from "react";
import Modal from "react-modal";

import { useShortcuts } from "../../hooks/use-shortcuts";
import * as S from "./styles";

function Shortcuts() {
  const { addShortcut, shortcuts, deleteShortcut } = useShortcuts();

  const [isModalAddShortcutOpen, setIsModalAddShortcutOpen] = useState(false);

  const [key, setKey] = useState("");
  const [message, setMessage] = useState("");

  function handleSave() {
    addShortcut({ key, message });
    setIsModalAddShortcutOpen(false);
  }

  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.Header>
            <div className="left-content">
              <h1 className="title">{"<"} Shortcuts</h1>
            </div>

            <div className="right-content">
              <button
                onClick={() => setIsModalAddShortcutOpen(true)}
                className="add"
              >
                + SHORTCUT
              </button>
            </div>
          </S.Header>

          <S.List>
            {shortcuts.map((shortcut, idx) => (
              <S.Item key={idx}>
                <div className="item-left-content">
                  <h2 className="key">{shortcut.key}</h2>
                  <p className="message">{shortcut.message}</p>
                </div>

                <div className="item-right-content">
                  {/* <button className="item-action-button">E</button> */}
                  <button
                    onClick={() => deleteShortcut(shortcut.id)}
                    className="item-action-button"
                  >
                    REMOVE
                  </button>
                </div>
              </S.Item>
            ))}
          </S.List>
        </S.Container>
      </S.Wrapper>

      <Modal
        isOpen={isModalAddShortcutOpen}
        onRequestClose={() => setIsModalAddShortcutOpen(false)}
      >
        <select value={key} onChange={(e) => setKey(e.target.value)}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
        </select>

        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          placeholder="Message"
        />

        <button onClick={handleSave}>Salvar</button>
      </Modal>
    </>
  );
}

export default Shortcuts;

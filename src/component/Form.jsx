import styled from "styled-components";
import "./Contact.css";
import { useTheme } from "../context/ThemeContext";

const Form = () => {
  let { darkMode } = useTheme();

  return (
    <StyledWrapper>
      <div className="form-card1">
        <div className="form-card2">
          <form className={`form ${darkMode ? "formdark" : "formwhite"}`}>
            <div className={`form-field ${darkMode ? "formfielddark" : "formfieldwhite"}`}>
              <input
                required
                placeholder="Name"
                className="input-field"
                type="text"
              />
            </div>
            <div className={`form-field ${darkMode ? "formfielddark" : "formfieldwhite"}`}>
              <input
                required
                placeholder="Email"
                className="input-field"
                type="email"
              />
            </div>
            <div className={`form-field ${darkMode ? "formfielddark" : "formfieldwhite"}`}>
              <input
                required
                placeholder="Subject"
                className="input-field"
                type="text"
              />
            </div>
            <div className={`form-field ${darkMode ? "formfielddark" : "formfieldwhite"}`}>
              <textarea
                required
                placeholder="Message"
                cols={30}
                rows={3}
                className="input-field"
                defaultValue={""}
              />
            </div>
            <button className="sendMessage-btn">Send Message</button>
          </form>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .form {
    display: flex;
    flex-direction: column;
    align-self: center;
    font-family: inherit;
    gap: 10px;
    padding-inline: 2em;
    padding: 1rem;
    //background-color: #171717;
    border-radius: 20px;
  }

  .form-field {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
    border-radius: 10px;
    padding: 0.6em;
    border: none;
    outline: none;
    color: white;
    background-color: transparent;
  }

  .input-field {
    background: none;
    border: none;
    outline: none;
    width: 100%;
    color: #ccd6f6;
    padding: 1em;
  }

  .sendMessage-btn {
    cursor: pointer;
    margin-bottom: 3em;
    padding: 1em;
    border-radius: 10px;
    border: none;
    outline: none;
    background-color: transparent;
    color: #00d1ff;
    font-weight: bold;
    outline: 1px solid #00d1ff;
    transition: all ease-in-out 0.3s;
  }

  .sendMessage-btn:hover {
    transition: all ease-in-out 0.3s;
    background-color: #00d1ff;
    color: #000;
    cursor: pointer;
    margin-top:"10px";
  }

  .form-card1 {
    background-image: linear-gradient(163deg, #00d1ff 0%, #00d1ff 100%);
    border-radius: 22px;
    transition: all 0.3s;
  }

  .form-card1:hover {
    box-shadow: 0px 0px 30px 1px #00d1ff;
  }

  .form-card2 {
    border-radius: 0;
    transition: all 0.2s;
  }

  .form-card2:hover {
    transform: scale(0.98);
    border-radius: 20px;
  }
`;

export default Form;

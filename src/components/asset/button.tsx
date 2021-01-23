import styled from "styled-components";
import colors from "../../constants/colors";
const Button =styled.div`
cursor: pointer;
 color: ${colors.softBlack};
      border-radius: 5px;
      padding: 10px 20px;
      position: relative;
      font-family: "Google Sans",sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    background: none;
    border: none;
    border-radius: 8px;
    padding: 13px 22px;
    &:hover {
        &::after {
            background:none;
            color:white;
        }
    }
      &::after {       
        background: #fff;
        transition: background 0.5s, color 0.5s;
        border-radius: 7px;
        content: "더보기";
        height: calc(100% - 4px);
        left: 2px;
        opacity: 1;
        position: absolute;
        top: 2px;
        width: calc(100% - 4px);
        z-index: 1;
        display:flex;
        justify-content: center;
        align-items: center;
        
      }
      &::before {
        background: linear-gradient(to right, #ff6f00, #ff9100);
        border-radius: 8px;
        content: "";
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
        z-index:0;
      }
      
`;

export default Button;
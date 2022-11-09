import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    :root{
        --primary: #3ec863;
        --secondary: #310a27;
        --terciary: #102542;
        --border: rgba(255, 255, 255, 0.2);
        --success: #7cc39c;
        --warning: #fbea85;
        --error: #ea524f;  
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body, html{
        width: 100vw;
        height: 100vh;
    }

    body{
        background: linear-gradient(250deg, var(--secondary) -12%, var(--terciary) 114%);
    }

    body, input, button, textarea{
        font-family: 'Montserrat', sans-serif;
    }

    button{
        cursor: pointer;
    }
`;

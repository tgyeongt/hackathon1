import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export  const GlobalStyles = createGlobalStyle`
    ${reset}

    body {
        display: flex;
        min-height: 100vh;
        max-width: 500px;
        justify-content: center;
        margin: 0;
        padding: 0;
    }
`;
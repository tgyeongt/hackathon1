import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export  const GlobalStyles = createGlobalStyle`
    ${reset}

    body {
        min-height: 100vh;
        max-width: 500px;
    }
`;
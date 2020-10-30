import React, { FunctionComponent } from "react";

import { ThemeProvider } from "styled-components";
/* constants */
import { __DARK_THEME__, __LIGHT_THEME__ } from "./global";

export const ThemeService: FunctionComponent = props => {
    const { children } = props;
    /* read this from some recoil state or idk 😂 maybe a good state management tool like REDUX*/
    const isDark = false;
    const theme = isDark ? __DARK_THEME__ : __LIGHT_THEME__;

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

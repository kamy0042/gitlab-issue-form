import React, { FC } from "react";
import { AppBar } from "@material-ui/core";
import { css, Global } from "@emotion/react";
import { base } from "./assets/css/base";
import { SecTitle } from "./components/SecTitle";
import { FormConteiner } from "./container/formContainer/FormContainer";

const main = css`
    background-color: #f3f3f3;
    min-height: 100vh;
    padding: 6rem 0 9rem;
`;
const inner = css`
    width: 700px;
    margin: auto;
`;
const appBar = css`
    padding: 1.2rem;
    height: 6rem;
`;
const title = css`
    font-size: 2rem;
    font-weight: 700;
`;

export const App: FC = () => (
    <>
        <Global styles={base} />
        <AppBar position="relative" css={appBar}>
            <h1 css={title}>Issue投稿フォーム</h1>
        </AppBar>
        <main css={main}>
            <div css={inner}>
                <SecTitle title="Issueの概要" />
                <FormConteiner />
            </div>
        </main>
    </>
);

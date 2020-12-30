import { css } from '@emotion/react';
import { Paper, TextField } from '@material-ui/core';
import { FC } from 'react';

export type TextInputProps = {
    name: string;
    label: string;
    desc?: string;
    multiline?: boolean;
    value: string;
};

export type ChangeEvent = {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const box = css`
    margin-top: 2rem;
    padding: 1rem 2rem 2rem;
    & + & {
        margin-top: 1.2rem;
    }
`;
const description = css`
    font-size: 1.1rem;
    margin-top: 1rem;
    color: #676767;
    white-space: pre-wrap;
`;
const item = css`
    width: 100%;
    margin: auto;
    input,
    textarea {
        font-size: 1.4rem;
        line-height: 1.3;
    }
    label {
        font-size: 1.4rem;
    }
`;

export const TextInput: FC<TextInputProps & ChangeEvent> = ({ handleChange, name, label, desc, multiline, value }) => (
    <Paper elevation={1} css={box}>
        <TextField name={name} label={label} css={item} onChange={handleChange} multiline={multiline} value={value} />
        {desc && <p css={description}>{desc}</p>}
    </Paper>
);

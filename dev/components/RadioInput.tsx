import { css } from '@emotion/react';
import { Paper, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core';
import { FC } from 'react';

export type RadioInputProps = {
    name: string;
    label: string;
    desc?: string;
    radio: {
        btnLabel: string;
        value: string;
    }[];
};

export type ChangeEvent = {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const isRadioInputProps = (arg: unknown): arg is RadioInputProps => {
    const t = arg as RadioInputProps;

    return typeof t?.radio?.[0]?.btnLabel === 'string' && typeof t?.radio?.[0]?.value === 'string';
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
const select = css`
    padding-top: 1.2rem;
    legend {
        font-size: 1.4rem;
    }
`;

export const RadioInput: FC<RadioInputProps & ChangeEvent> = ({ name, label, desc, handleChange, radio }) => (
    <Paper elevation={1} css={[box, select]}>
        <FormControl component="fieldset">
            <FormLabel component="legend">{label}</FormLabel>
            <RadioGroup aria-label={name} name={name} onChange={handleChange}>
                {radio.map((radioItem) => (
                    <FormControlLabel value={radioItem.value} control={<Radio />} label={radioItem.btnLabel} key={radioItem.btnLabel} />
                ))}
            </RadioGroup>
        </FormControl>
        {desc && <p css={description}>{desc}</p>}
    </Paper>
);

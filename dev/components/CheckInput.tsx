import { css } from '@emotion/react';
import { Paper, Checkbox, FormControl, FormControlLabel, FormLabel, FormGroup } from '@material-ui/core';
import { FC } from 'react';

export type CheckInputProps = {
    name: string;
    label: string;
    desc?: string;
    check: {
        checkLabel: string;
        checked: boolean;
    }[];
};

export type ChangeEvent = {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const isCheckInputProps = (arg: unknown): arg is CheckInputProps => {
    const t = arg as CheckInputProps;

    return typeof t?.check?.[0]?.checkLabel === 'string' && typeof t?.check?.[0]?.checked === 'boolean';
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

export const CheckInput: FC<CheckInputProps & ChangeEvent> = ({ name, label, desc, handleChange, check }) => (
    <Paper elevation={1} css={[box, select]}>
        <FormControl component="fieldset">
            <FormLabel component="legend">{label}</FormLabel>
            <FormGroup>
                {check.map((item) => (
                    <FormControlLabel
                        control={<Checkbox onChange={handleChange} name={name} />}
                        label={item.checkLabel}
                        value={item.checkLabel}
                    />
                ))}
            </FormGroup>
        </FormControl>
        {desc && <p css={description}>{desc}</p>}
    </Paper>
);

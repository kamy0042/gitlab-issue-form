import React, { FC } from 'react';

import { css } from '@emotion/react';
import { Button } from '@material-ui/core';
import { ChangeEvent, TextInput, TextInputProps } from './TextInput';
import { isRadioInputProps, RadioInput, RadioInputProps } from './RadioInput';
import { isCheckInputProps, CheckInput, CheckInputProps } from './CheckInput';

export type Form = {
    state: (RadioInputProps | TextInputProps | CheckInputProps)[];
    handleChange: ChangeEvent['handleChange'];
    handleClick: () => void;
};

const btn = css`
    font-size: 1.8rem;
    padding: 0.5rem;
    width: 150px;
`;

const BtnLayout = css`
    margin: 3rem auto;
    text-align: center;
`;

export const Form: FC<Form> = ({ state, handleChange, handleClick }) => (
    <>
        <form>
            {state.map((item) => {
                if (isRadioInputProps(item)) {
                    return (
                        <RadioInput
                            name={item.name}
                            label={item.label}
                            desc={item.desc}
                            handleChange={handleChange}
                            radio={item.radio}
                            key={item.name}
                        />
                    );
                }
                if (isCheckInputProps(item)) {
                    return (
                        <CheckInput
                            name={item.name}
                            label={item.label}
                            desc={item.desc}
                            handleChange={handleChange}
                            check={item.check}
                            key={item.name}
                        />
                    );
                }

                return (
                    <TextInput
                        name={item.name}
                        label={item.label}
                        desc={item.desc}
                        handleChange={handleChange}
                        multiline={item.multiline}
                        value={item.value}
                        key={item.name}
                    />
                );
            })}
        </form>

        <div css={BtnLayout}>
            <Button variant="contained" color="primary" type="submit" onClick={handleClick}>
                <span css={btn}>送信する</span>
            </Button>
        </div>
    </>
);

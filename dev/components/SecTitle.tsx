/* eslint-disable import/no-unresolved */
import { css } from '@emotion/react';
import { FC } from 'react';
import { color } from '~/assets/css/variables';

export type SecTitleProps = {
    title: string;
    disc?: string;
};

const wrap = css`
    background-color: #fff;
    border-radius: 3px 3px 0 0;
    border: solid thin ${color.border};
    border-top: solid 6px ${color.primary};
    padding: 1.5rem;
`;

export const SecTitle: FC<SecTitleProps> = ({ title, disc }) => (
    <div css={wrap}>
        <h2>{title}</h2>
        {disc && <p>{disc}</p>}
    </div>
);

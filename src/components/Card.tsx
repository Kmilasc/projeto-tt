import { ReactNode } from "react";
import styled from "styled-components";

interface Props {
    icon: ReactNode;
    title: string;
    subTitle: string;
}

const IconCard = styled.div`
    padding-right: 416px;
    padding-bottom: 24px;
`;

const TitleCard = styled.div`
    padding-right: 313px;
    padding-bottom: 12px;

    color: #130C25;
    font-size: 20px;
    font-weight: 600;
    line-height: 25px;
    letter-spacing: 0.10px;
    word-wrap: break-word
`;

const SubTitleCard = styled.div`
    padding-right: 152px;
    height: 72px;
    width: 304px;
    color: #423D51;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    word-wrap: break-word
`;

export function Card({ icon, title, subTitle}: Props) {
    return (
        <div>
            <IconCard>{icon}</IconCard>
            <TitleCard>{title}</TitleCard>
            <SubTitleCard>{subTitle}</SubTitleCard>
        </div> 
    )
}
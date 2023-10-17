'use client'

import styled from 'styled-components';
import { useScopedI18n } from '@/locales/client';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import { useState } from 'react';
import { When } from 'react-if';

const ArrowSolutions = styled.li`
    display: flex;

    & > .title {
        display: flex;
        align-items: center;
        gap: 8px;
        cursor: pointer;
    }

    & > div {
        color: #99F3F5;
    }
    
    & > .content {
        display: flex;
        flex-direction: column;
        gap: 20px;

        position: fixed;
        top: 90px;
        background-color: #FFFFFF;
        padding: 44px 48px;
        border-radius: 6px;

        & > h3 {
            color: #5F41D9;
            font-size: 14px;
            font-weight: 600;
            text-transform: uppercase;
            line-height: 14.70px;
            letter-spacing: 2.10px;
            word-wrap: break-word;
        }

        & > .items {
            display: flex;
            gap: 90px;

            & > div {
                display: flex;
                flex-direction: column;
                gap: 40px;
            }

            & > div > .sub-menu-item {
                display: flex;
                gap: 16px;
                cursor: pointer;
                
                & > .texts {
                    & > * {
                        margin: 0px;
                    }

                    h4 {
                        color: #130C25;
                        font-size: 15px;
                        font-weight: 600;
                        line-height: 18.75px;
                        letter-spacing: 0.07px;
                    }
        
                    p {
                        color: #423D51;
                        font-size: 13px;
                        font-weight: 400;
                        line-height: 19.50px;
                    }
                }
            }
        }
    }
`;

export function Dropdown() {
    const [isShown, setIsShown] = useState(false);
    const t = useScopedI18n('menu');

    const handleClickDropdown = () => {
        setIsShown((oldIsShown) => !oldIsShown);
    }

    return (
        <ArrowSolutions>
            <div className='title' onClick={handleClickDropdown}>
                {t("solutions")}
                <ArrowDropDown />
            </div>
            <When condition={isShown}>
                <div className='content'>
                    <h3>{t("solutions#more.key#solutions")}</h3>
                    <div className='items'>
                        <div>
                            <div className='sub-menu-item'>
                                <img src="/IconEAD.svg" alt="Icon Ead" />
                                <div className="texts">
                                    <h4>{t("solutions#more.create#an#online#school")}</h4>
                                    <p>{t("solutions#more.lorem#ipsum#dolor#sit#amet")}</p>
                                </div>
                            </div>
                            <div className='sub-menu-item'>
                                <img src="/IconGamification.svg" alt="Icon Ead" />
                                <div className="texts">
                                    <h4>{t("solutions#more.gamification")}</h4>
                                    <p>{t("solutions#more.lorem#ipsum#dolor#sit#amet")}</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='sub-menu-item'>
                                <img src="/IconSocial.svg" alt="Icon Ead" />
                                <div className="texts">
                                    <h4>{t("solutions#more.community#and#social#network")}</h4>
                                    <p>{t("solutions#more.lorem#ipsum#dolor#sit#amet")}</p>
                                </div>
                            </div>
                            <div className='sub-menu-item'>
                                <img src="/IconMobile.svg" alt="Icon Ead" />
                                <div className="texts">
                                    <h4>{t("solutions#more.Mobile application")}</h4>
                                    <p>{t("solutions#more.lorem#ipsum#dolor#sit#amet")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </When>
        </ArrowSolutions>
    )
}
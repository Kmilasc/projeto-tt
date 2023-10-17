import { useState } from 'react';
import styled from 'styled-components';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import DoneIcon from '@material-ui/icons/Done';
import Link from 'next/link';

const DropdownContainer = styled.div`
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
`;

const DropdownList = styled.ul`
    position: absolute;
    top: 100%;
    left: 0;
    background-color: white;
    border: 1px solid #ccc;
    width: 150px;
    list-style-type: none;
    padding: 0;
    margin: 0;
    z-index: 10;

    & > li {
        cursor: pointer;
        color: black;
        display: flex;
        justify-content: space-between;
        align-items: center;

        &:hover {
            background-color: #f5f5f5;
        }

        & > a {
            padding: 10px;
            width: 100%;
        }
    }
`;

const LanguageItem = styled.div`
    display: flex;
    align-items: center;
    gap: 3px;
`;

export function LanguageDropdown({ onLanguageChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(null);

    const languageMap = {
        'pt': 'PT',
        'en': 'EN',
        'es': 'ES'
    };

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleLanguageClick = (language) => {
        setSelectedLanguage(language);
        onLanguageChange(language);
        setIsOpen(false);
    };

    return (
        <DropdownContainer onClick={handleToggle}>
            <span>{isOpen ? `Fechar ${languageMap[selectedLanguage]}` : languageMap[selectedLanguage] || "Idioma"}</span>
            <ArrowDropDown />
            {isOpen && (
                <DropdownList>
                    <li onClick={() => handleLanguageClick('pt')}>
                        <Link href="/pt/client">
                            <LanguageItem>
                                <img src="/brazil.png" alt="Brazil" />
                                PT
                            </LanguageItem>
                        </Link>
                        {selectedLanguage === 'pt' && <DoneIcon />}
                    </li>
                    <li onClick={() => handleLanguageClick('en')}>
                        <Link href="/en/client">
                            <LanguageItem>
                                <img src="/usa.png" alt="USA" />
                                EN
                            </LanguageItem>
                        </Link>
                        {selectedLanguage === 'en' && <DoneIcon />}
                    </li>
                    <li >
                        <Link href="/es/client">
                            <LanguageItem>
                                <img src="/spain.png" alt="Spain" />
                                ES
                            </LanguageItem>
                        </Link>
                        {selectedLanguage === 'es' && <DoneIcon />}
                    </li>
                </DropdownList>
            )}
        </DropdownContainer>
    );
}
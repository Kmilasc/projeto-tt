import { useState } from 'react';
import styled from 'styled-components';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';

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
        padding: 10px;
        cursor: pointer;

        &:hover {
            background-color: #f5f5f5;
        }
    }
`;

export function LanguageDropdown({ onLanguageChange }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleLanguageClick = (language) => {
        onLanguageChange(language);
        setIsOpen(false);
    };

    return (
        <DropdownContainer onClick={handleToggle}>
            <span>{isOpen ? "Fechar" : "Idioma"}</span>
            <ArrowDropDown />
            {isOpen && (
                <DropdownList>
                    <li onClick={() => handleLanguageClick('pt')}>Português</li>
                    <li onClick={() => handleLanguageClick('en')}>Inglês</li>
                    <li onClick={() => handleLanguageClick('es')}>Espanhol</li>
                </DropdownList>
            )}
        </DropdownContainer>
    );
}

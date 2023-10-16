'use client'
import { useI18n } from '@/locales/client';
import styled from 'styled-components';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import AccountCircleOutlined from '@material-ui/icons/AccountCircleOutlined'

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  background: linear-gradient(312deg, #41B5D9 0%, #5F41D9 100%);
  margin: 0px;
`;

const Header = styled.header`
    display: flex;
    gap: px;
    height: 700px;
    with: 1440px;
    backdrop-filter: blur(30px);
    margin-left: 112px;
    margin-right: 112px;
`;

const Menu = styled.ul`
    display: flex;
    gap: 40px;
    list-style-type: none;
    color: #FFFFFF;
    margin-top: 36px;
    margin-bottom: 36px;
    font-size: 15px;
    align-items: center;

    & > li {
        display: flex;
        align-items: center;
    }
`;

const Actions = styled.div`
    display: flex;
    gap: 40px;
    list-style-type: none;
    color: #FFFFFF;
    margin-top: 36px;
    margin-bottom: 36px;
    font-size: 15px;
    align-items: center;

    & > div {
        display: flex;
        align-items: center;
    }
`;

const ButtonStartNow = styled.button`
    width: 160px; 
    height: 40px; 
    background: transparent;
    border-radius: 80px; 
    border: 1px white solid;
    color: white;

`;

const MenuWithLogo = styled.div`
    display: flex;
    flex: 1;
    
    :first-child {
        flex: 1;
    }
`;

const ArrowSolutions = styled.li`
    gap: 12px;

    & > div {
        color: #99F3F5;
    }
`;

const ArrowActions = styled.li`
    gap: 8px;
    display: flex;
    & > div {
        color: #99F3F5;
    }
`;

const IconUserAction = styled.div`
    gap: 8px;

    & > div {
        color: #99F3F5;
    }
`;

const LogoMenu = styled.div`
    flex: 1;
    margin-top: 24px;
    margin-bottom: 24px;
`;

const LineMenu = styled.hr`
    margin: 0px;
    height: 45px;
    align-self: center;
    border-color: #99F3F5;
    transform-origin: 0 0; 
    height: 24px;
    opacity: 0.25; 
    border: 1px #99F3F5 solid;
`;

const MenuWithAction = styled.div`
    display: flex;
    gap: 48px;
`;
export default function Home() {
    const t = useI18n();

    return (
        <>
            <Wrapper>
                <Header>
                    <LogoMenu>
                        <img src="/logo.svg" alt="Logo Ensinio" />
                    </LogoMenu>
                    <MenuWithAction>
                                
                        <Menu>
                            <ArrowSolutions>
                                {t("menu.solutions")} <div><ArrowDropDown /></div>
                                {/* <ul>
                                    <li>{t("menu.solutions#more.key#solutions")}</li>
                                    <li>{t("menu.solutions#more.create#an#online#school")}</li>
                                    <li>{t("menu.solutions#more.lorem#ipsum#dolor#sit#amet")}</li>
                                    <li>{t("menu.solutions#more.gamification")}</li>
                                    <li>{t("menu.solutions#more.lorem#ipsum#dolor#sit#amet")}</li>
                                    <li>{t("menu.solutions#more.community#and#social#network")}</li>
                                    <li>{t("menu.solutions#more.lorem#ipsum#dolor#sit#amet")}</li>
                                    <li>{t("menu.solutions#more.Mobile application")}</li>
                                    <li>{t("menu.solutions#more.lorem#ipsum#dolor#sit#amet")}</li>
                                </ul> */}
                            </ArrowSolutions>
                            <li>{t("menu.prices")}</li>
                            <li>{t("menu.academy")}</li>
                            <li>{t("menu.blog")}</li>
                            <li>{t("menu.contact")}</li>
                        </Menu>
                        <LineMenu />
                        <Actions>
                        <IconUserAction>
                        <div><AccountCircleOutlined/></div> {t("menu.sign#in")}
                        </IconUserAction>
                            <ButtonStartNow>{t("menu.start#now")}</ButtonStartNow>
                            <ArrowActions>
                                {t("menu.language#more.pt")}<div><ArrowDropDown /></div>
                                {/* <ul>
                                    <li>{t("menu.language#more.pt")}</li>
                                    <li>{t("menu.language#more.en")}</li>
                                    <li>{t("menu.language#more.es")}</li>
                                </ul> */}
                            </ArrowActions>
                        </Actions>
                    </MenuWithAction>
                    
                </Header>
                <div>
                    <h1>{t("home.platform.all#in#one")}</h1>
                    <h1>{t("home.platform.your#powerful#and#profitable#online#school")}</h1>
                    <p>{t("home.platform.description")}</p>
                    <p>{t("home.platform.start#now#button")}</p>
                    <p>{t("home.platform.watch#video")}</p>
                </div>
            </Wrapper>
            <div>
                <p>{t("home.details.we#think#every#detail")}</p>
                <p>{t("home.details.know#our#resources")}</p>
                <h1>{t("home.details.we#want#the#student#to#feel#comfortable#while#learning")}</h1>
            </div>
            <div>
                <p>{t("home.details.see#all#other#available#resources")}</p>
                <p>{t("home.details.see#more")}</p>
            </div>
        </>
        
    )
}

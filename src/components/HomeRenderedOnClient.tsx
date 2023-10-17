'use client'
import { useI18n } from '@/locales/client';
import { Dropdown } from '@/components/Dropdown';
import styled from 'styled-components';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import AccountCircleOutlined from '@material-ui/icons/AccountCircleOutlined'
import PlayArrowRounded from '@material-ui/icons/PlayArrowRounded'
import TrendingFlatRounded from '@material-ui/icons/TrendingFlatRounded'
import { Card } from '@/components/Card';
import { useItemsStore } from '@/app/[locale]/provider';
import { LanguageDropdown } from './LanguageDropdown';

const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const Wrapper = styled.section`
  width: 100%;
  background: linear-gradient(312deg, #41B5D9 0%, #5F41D9 100%);
  margin: 0px;
`;

const Header = styled.header`
    display: flex;
    backdrop-filter: blur(30px);
    padding-left: 112px;
    padding-right: 112px;
    align-items: center;
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
    padding: 12px 24px;
    background: transparent;
    border-radius: 80px; 
    border: 1px white solid;
    color: white;
`;

const MenuWithLogo = styled.div`
    display: flex;
    flex: 1;
    
    &:first-child {
        flex: 1;  
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

const ButtonsHome = styled.div`
    display: flex;
`;

const ButtonStartNowHome = styled(ButtonStartNow)`
    background-color: #00E1E7;
    border: none;
    color: #130C25;
    font-size: 16px;
    padding: 18px 33px;
    font-weight: 600;
`

const ButtonWatchVideooHome = styled.div`
    color: white;
    font-size: 16px;
    font-weight: 600;
    display: flex;
    padding: 18px 33px;
    gap: 12px;
    align-items: center;
`

const PlayWatchButtonVideo= styled.div`
    border-radius: 50%;
    background: linear-gradient(135deg, #ffffff3d 0%, rgba(255, 255, 255, 0) 100%);
    padding: 4px;
    display: flex;
    align-items: center;
`

const MainContainer = styled.div`
    margin-top: 116px;
    padding: 0px 112px 0px 112px;
`

const MainContent = styled.div`
    display: flex;
    flex-direction: column;

    & > h1 {
        color: #130C25;
        font-size: 32px;
        font-weight: 400;
        line-height: 40px;
        letter-spacing: 0.16px;
        word-wrap: break-word;
    }
`

const MainContentFirstLine = styled.div`
    display: flex;
    gap: 16px;
    flex: 1;

    &:first-child {
        flex: 1;  
    }
`

const FlexRowMainContentFirstLine = styled(FlexRow)`
    gap: 16px;

    color: #432E98;
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    line-height: 16.80px;
    word-wrap: break-word;

    &:nth-child(1) {
        flex: 1;
    }
`

const MainContentFirstLineHorizontal = styled.div`
    width: 40px;
    display: flex;
    align-items: center;

    & > hr {
        width: 100%;
        border: 1px solid #5F41D9;
        opacity: 0.5;
    }
`

const Footer = styled.div`
    display: flex;

    &:first-child {
        flex: 1;  
    }

    & > * {
        gap: 32px;
    }
`

const FlexRowFooterResources = styled(FlexRow)`
    color: #423D51;
    font-size: 16px;
    font-family: Inter;
    font-weight: 500;
    line-height: 24px;
    word-wrap: break-word

    &:first-child {
        color: #5F41D9;
    }

    &:nth-child(1) {
        flex: 1;
    }
`

const FirstTextWithIcon = styled.div`
    display: flex;
    align-items: center;
`;

const IconFirstHome = styled.div`
    padding-right: 16px;
`;

const TextsHome = styled.div`
    display: flex;
    flex-direction: column;
    gap: 44px;

    & > * {
        margin: 0px;
    }
`;

const TextWithButtonHome = styled.div`
    display: flex;
    flex-direction: column;
    gap: 48px;
    padding-left: 164px;
    padding-top: 110px;
`;

const FirstText = styled.div`
    color: white;
    font-size: 16px;
    font-weight: 300;
    letter-spacing: 2.40px;
    word-wrap: break-word
`;

const SecondText = styled.div`
    color: white;
    font-size: 44px;
    font-weight: 500;
    line-height: 48.40px;
    word-wrap: break-word
`;

const ThirdText = styled.div`
    color: white;
    font-size: 16px;
    font-weight: 200;
    line-height: 24px;
    word-wrap: break-word
`;

const HomeContent = styled.div`
    display: flex;
    gap: 320px;
`;

const CardItems = styled.div`
    display: flex;
    flex: 1;
    padding-bottom: 67px;
`;

const Baseline = styled.hr`
    width: 100%; 
    height: 100%; 
    border-radius: 2px; 
    border: 1px #E7E7E9 solid;
    opacity: 0.5;
`;

export default function HomeRenderedOnClient() {
    const items = useItemsStore(state => state.items);
    const t = useI18n();
    const getIcon = (id: number) => {
        switch (id) {
            case 1:
                return "/IconTrilhas.svg";
            case 2:
                return "/IconPlaylists.svg";
            case 3:
            default:
                return "/IconCollections.svg";
        }
    }

    return (
        <>
            <Wrapper>
                <Header>
                        <LogoMenu>
                            <img src="/logo.svg" alt="Logo Ensinio" />
                        </LogoMenu>
                        <MenuWithAction>      
                        <Menu>
                                <Dropdown />
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
                                <LanguageDropdown onLanguageChange={(lang) => {
    console.log(`Idioma selecionado: ${lang}`);
}} />
                            </Actions>
                        </MenuWithAction>
                </Header>
                <HomeContent>
                <TextWithButtonHome>
                    <TextsHome>
                        <FirstTextWithIcon>
                            <IconFirstHome><img src="/IconPc.svg" alt="Pc Icon" /></IconFirstHome>
                            <FirstText>{t("home.platform.all#in#one")}</FirstText>
                        </FirstTextWithIcon>
                        <SecondText>{t("home.platform.your#powerful#and#profitable#online#school")}</SecondText>
                        <ThirdText>{t("home.platform.description")}</ThirdText>
                    </TextsHome>
                    <ButtonsHome>
                        <ButtonStartNowHome>{t("home.platform.start#now#button")}</ButtonStartNowHome>
                        <ButtonWatchVideooHome>
                            <PlayWatchButtonVideo>
                                <PlayArrowRounded fontSize='small' />
                            </PlayWatchButtonVideo>
                            {t("home.platform.watch#video")}
                        </ButtonWatchVideooHome>
                    </ButtonsHome>
                </TextWithButtonHome>
                <img src="/ImgHome.png" alt="Icon Img Home" />
                </HomeContent>
            </Wrapper>
            <MainContainer>
                <MainContent>
                    <MainContentFirstLine>
                        <FlexRowMainContentFirstLine>
                            <MainContentFirstLineHorizontal>
                                <hr />
                            </MainContentFirstLineHorizontal>
                            <p>{t("home.details.we#think#every#detail")}</p>
                        </FlexRowMainContentFirstLine>
                        <p>{t("home.details.know#our#resources")}</p>
                    </MainContentFirstLine>
                    <h1>{t("home.details.we#want#the#student#to#feel#comfortable#while#learning")}</h1>
                </MainContent>
                <CardItems>
                    {
                        items?.map(({ id, title, description }) => 
                            <Card key={id} icon={<img src={getIcon(id)} />} title={title} subTitle={description} />
                        )
                    }
                </CardItems>
                <Baseline />
                <Footer>
                    <FlexRowFooterResources>
                        <img src="/IconRocket.svg" alt="Rocket icon" />
                        <p>{t("home.details.see#all#other#available#resources")}</p>
                    </FlexRowFooterResources>
                    <FlexRow>
                        <p>{t("home.details.see#more")}</p>
                        <TrendingFlatRounded />
                    </FlexRow>
                </Footer>
            </MainContainer>
        </>
    )
}

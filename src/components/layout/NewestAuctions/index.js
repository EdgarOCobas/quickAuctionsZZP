import React from 'react'
import Icon1 from '../../../assets/images/svg-6.svg';
import Icon2 from '../../../assets/images/svg-5.svg';
import Icon3 from '../../../assets/images/svg-4.svg';
import {NewestContainer,
        NewestCard,
        NewestH1,
        NewestWrapper,
        NewestIcon,
        NewestH2,
        NewestP
} from './NewestElements';

const NewestAuctions = () => {
    return (
        <NewestContainer id='new-auctions'>
            <NewestH1>Najnowsze Aukcje</NewestH1>
            <NewestWrapper>
                <NewestCard>
                    <NewestIcon src={Icon1} />
                    <NewestH2>Gucci</NewestH2>
                    <NewestP>Cena wywoławcza - 200 Cena obecna - 300 Obecny prowadzący - brak Koniec - 2022-06-16</NewestP>
                </NewestCard>
                <NewestCard>
                    <NewestIcon src={Icon2} />
                    <NewestH2>Aukcja 2</NewestH2>
                    <NewestP>Aukcja bla bla bla bla bla blaasdasdasdasd.</NewestP>
                </NewestCard>
                <NewestCard>
                    <NewestIcon src={Icon3} />
                    <NewestH2>Aukcja 3</NewestH2>
                    <NewestP>Aukcja bla bla bla bla bla blaasdasdasdasd.</NewestP>
                </NewestCard>
            </NewestWrapper>
        </NewestContainer>
    )
}

export default NewestAuctions;
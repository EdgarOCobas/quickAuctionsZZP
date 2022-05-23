import MyImg from '../../../assets/images/svg-3.svg'
import MyImg2 from '../../../assets/images/svg-1.svg';
import MyImg3 from '../../../assets/images/svg-4.svg';

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Szybkie Aukcje',
    headline: 'Nielimitowane zakupy dla wszystkich',
    description: 'Bierz udział we wszystkich aukcji i kupuj jakościowe produkty ogłoszonych na żywo z niewielkim interesem.',
    buttonLabel: 'Zacznij teraz',
    imgStart: false,
    img: MyImg,
    dark: true,
    alt: 'Shopping',
    primary: true,
    darkText: false
};

export const homeObjTwo = {
    id: 'sell',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Ogłosz Swoją Aukcję',
    headline: 'Wykonaj własne sprzedaże w quickAuctions',
    description: 'Stwórz własną aukcję w wybranej kategorii, udostępnij ją publicznie i zobacz na żywo proces aukcyjny.',
    buttonLabel: 'Utwórz aukcję',
    imgStart: true,
    img: MyImg2,
    dark: false,
    alt: 'idk',
    primary: false,
    darkText: true
};

export const homeObjThree = {
    id: 'signin',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Rozpocznij teraz',
    headline: 'Bezpieczne dostawy wykonanych zakupów',
    description: 'Dla wszystkich wykonanych sprzedaży oferujemy bezpieczną dostawę i gwarancję zwrotu miesięcznego okresu w przypadku niezadowolenia.',
    buttonLabel: 'Rejestruję',
    imgStart: false,
    img: MyImg3,
    dark: true,
    alt: 'Shopping',
    primary: true,
    darkText: false
};
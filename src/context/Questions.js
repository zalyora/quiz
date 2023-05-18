import moroz from "../assets/vodograi-moroz.jpg";
import vKrychevskyi from "../assets/gladiolusy-vKrychevskyi.jpg";
import aivazovskyi from "../assets/pozhezhaMoskvy-aivazovskyi.jpg";
import kokh from "../assets/padinniaIkara-kokh.jpg";
import fKrychevskyi from "../assets/portretMateriHudozhnyka-fKrychevskyi.jpg";
import malevych from "../assets/kvituchiYabluni-malevych.jpg";
import kurylyk from "../assets/ukrainskiPionery-Kurylyk.jpg";
import matsiievska from "../assets/tsviteBuzok-matsiievska.jpg";
import sevruk from "../assets/trembity-sevruk.jpg";
import kaplan from "../assets/vesna1986-kaplan.jpg";

export const Questions = [
    {
        prompt: "Подейкують, що його картину Анрі Матісс придбав для власної колекції:",
        image: moroz,
        answerOptions: [
            { answer: 'Тарас Шевченко', isCorrect: false},
            { answer: 'Архип Куїнджі', isCorrect: false},
            { answer: 'Михайло Мороз', isCorrect: true},
            { answer: 'Микола Ге', isCorrect: false},
        ]
    },
    {
        prompt: "Картина Василя Кричевського, котра потрапила до колекції Степана Давимуки:",
        image: vKrychevskyi,
        answerOptions: [
            { answer: 'Гладіолуси', isCorrect: true},
            { answer: 'Поділ', isCorrect: false},
            { answer: 'Натюрморт з лялькою', isCorrect: false},
            { answer: 'Церква в Ходорові', isCorrect: false},
        ]
    },
    {
        prompt: "Який український художник зобразив пожежу Москви:",
        image: aivazovskyi,
        answerOptions: [
            { answer: 'Іван Айвазовський', isCorrect: true},
            { answer: 'Іван Марчук', isCorrect: false},
            { answer: 'Казимир Малевич', isCorrect: false},
            { answer: 'Микола Бурачек', isCorrect: false},
        ]
    },
    {
        prompt: "Яке місто зображене на картині 1994 «Падіння Ікара» Юрія Коха:",
        image: kokh,
        answerOptions: [
            { answer: 'Лондон', isCorrect: false},
            { answer: 'Вінниця', isCorrect: false},
            { answer: 'Чернівці', isCorrect: false},
            { answer: 'Львів', isCorrect: true},
        ]
    },
    {
        prompt: "Якому художнику доручили виконання малюнків коронації нового короля Англії, Едварда VII:",
        image: fKrychevskyi,
        answerOptions: [
            { answer: 'Олександру Мурашку', isCorrect: false},
            { answer: 'Фотію Красицькому', isCorrect: false},
            { answer: 'Федору Кричевському', isCorrect: true},
            { answer: 'Миколі Пимоненку', isCorrect: false},
        ]
    },
    {
        prompt: "Картина  «Квітучі яблуні» є доробком:",
        image: malevych,
        answerOptions: [
            { answer: 'Костянтина Крижицького', isCorrect: false},
            { answer: 'Казимира Малевича', isCorrect: true},
            { answer: 'Миколи Пимоненка', isCorrect: false},
            { answer: 'Андрія Киселіва', isCorrect: false},
        ]
    },
    {
        prompt: "Представник українського мистецтва Василь Курилик є художником:",
        image: kurylyk,
        answerOptions: [
            { answer: 'Канади', isCorrect: true},
            { answer: 'США', isCorrect: false},
            { answer: 'Австралії', isCorrect: false},
            { answer: 'Італії', isCorrect: false},
        ]
    },
    {
        prompt: "Яке місто зображає картина Ядвіги Мацієвської:",
        image: matsiievska,
        answerOptions: [
            { answer: 'Дніпро', isCorrect: false},
            { answer: 'Київ', isCorrect: true},
            { answer: 'Запоріжжя', isCorrect: false},
            { answer: 'Нова Каховка', isCorrect: false},
        ]
    },
    {
        prompt: "Картина «Трембіти» – портрет неперевершеної Алли Горської є доробком:",
        image: sevruk,
        answerOptions: [
            { answer: 'Алли Горської', isCorrect: false},
            { answer: 'Катерини Білокур', isCorrect: false},
            { answer: 'Олександри Екстер', isCorrect: false},
            { answer: 'Галини Севрук', isCorrect: true},
        ]
    },
    {
        prompt: "Співець Києва, в кожній картині котрого приховано щонайменше одного кота:",
        image: kaplan,
        answerOptions: [
            { answer: 'Самуїл Каплан', isCorrect: true},
            { answer: 'Сергій  Шишко', isCorrect: false},
            { answer: 'Микола Глущенко', isCorrect: false},
            { answer: 'Анатолій Криволап', isCorrect: false},
        ]
    }
];
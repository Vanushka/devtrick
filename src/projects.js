import vpbank_mobile from './assets/projects/img/png/VPbank_mobile.png';
import logo_vpbank from './assets/projects/img/svg/VPbankLogo.svg';
import bankSPBLogo from './assets/projects/img/svg/bankSPBLogo.svg';
import prodel_logo from './assets/projects/img/svg/prodel_logo.svg';
import seagent from './assets/projects/img/svg/seagent.svg';
import rr_desktop from './assets/projects/img/png/rr_desktop.png';
import rr_mobile from './assets/projects/img/png/rr_mobile.png';
import rr_logo from './assets/projects/img/svg/rr_logo.svg';
import dfm_logo from './assets/projects/img/svg/dfm_logo.svg';
import mtc_logo from './assets/projects/img/svg/mtc_logo.svg';
import cvz_logo from './assets/projects/img/svg/cvz_logo.svg';
import nesu_edu_logo from './assets/projects/img/svg/nesu_edu_logo.svg';

export const projects = [
  {
    id: 1,
    name: 'vpbank',
    title: 'VPBank Vietnam',
    type: 'Мобильное приложение',
    logo: logo_vpbank,
    contept_img: vpbank_mobile,
    style: 'VpBank',
    text: `<p>Хотите, чтобы Вашу компанию узнавали на каждом шагу? Желаете производить на клиентов WOW-эффект и внушать доверие? Тогда займитесь визуализацией бренда.<br/><br/>То есть создайте стильный впечатляющий образ, который позволит говорить с потребителями на одном языке</p>`,
    feat: false,
    disabled: false,
  },
  {
    id: 2,
    name: 'spb_bank',
    title: 'Мобильная котировальная доска (Банк Санкт-Петербурга)',
    type: 'Мобильное приложение',
    logo: bankSPBLogo,
    contept_img: null,
    style: 'SpbBank',
    text: `<p>Some text</p>`,
    feat: false,
    disabled: true,
  },
  {
    id: 3,
    name: 'prodel',
    title: 'Prodel - сервис доставки продуктов в Азербайджане',
    type: 'Мобильное приложение',
    logo: prodel_logo,
    contept_img: null,
    style: 'Prodel',
    text: `<p>Some text</p>`,
    feat: false,
    disabled: true,
  },
  {
    id: 4,
    name: 'seagent',
    title: 'SeAgent - сервис бронирования стояночных мест для яхт',
    type: 'Мобильное приложение',
    logo: seagent,
    contept_img: null,
    style: 'Seagent',
    text: `<p>Some text</p>`,
    feat: false,
    disabled: true,
  },
  {
    id: 5,
    name: 'rr_mobile',
    title: 'Русское Радио',
    type: 'Мобильное приложение',
    logo: rr_logo,
    contept_img: rr_mobile,
    style: 'RusRadioMobile',
    text: `<p>Some text</p>`,
    feat: true,
    disabled: false,
  },
  {
    id: 6,
    name: 'rr',
    title: 'Русское Радио',
    type: 'Сайт',
    logo: rr_logo,
    contept_img: rr_desktop,
    style: 'RusRadio',
    text: `<p>Some text</p>`,
    feat: true,
    disabled: false,
  },
  {
    id: 7,
    name: 'dfm_mobile',
    title: 'DFM - dance radio',
    type: 'Мобильное приложение',
    logo: dfm_logo,
    contept_img: null,
    style: 'DfmMobile',
    text: `<p>Some text</p>`,
    feat: true,
    disabled: true,
  },
  {
    id: 8,
    name: 'dfm',
    title: 'DFM - dance radio',
    type: 'Сайт',
    logo: dfm_logo,
    contept_img: null,
    style: 'Dfm',
    text: `<p>Some text</p>`,
    feat: true,
    disabled: true,
  },
  {
    id: 9,
    name: 'mtc_mobile',
    title: 'Radio Monte Carlo',
    type: 'Мобильное приложение',
    logo: mtc_logo,
    contept_img: null,
    style: 'MonteCarlo',
    text: `<p>Some text</p>`,
    feat: true,
    disabled: true,
  },
  {
    id: 10,
    name: 'mtc_mobile',
    title: 'Radio Monte Carlo',
    type: 'Сайт',
    logo: mtc_logo,
    contept_img: null,
    style: 'MonteCarloSite',
    text: `<p>Some text</p>`,
    feat: true,
    disabled: true,
  },
  {
    id: 11,
    name: 'cvz',
    title: 'Центр взыскания задолженности',
    type: 'Сайт',
    logo: cvz_logo,
    contept_img: null,
    style: 'CVZ',
    text: `<p>Some text</p>`,
    feat: false,
    disabled: true,
  },
  {
    id: 12,
    name: 'nesu_edu',
    title: 'НесуЕду - сервис доставки продуктов из супермаркетов',
    type: 'Мобильное приложение',
    logo: nesu_edu_logo,
    contept_img: null,
    style: 'Carryfood',
    text: `<p>Some text</p>`,
    feat: false,
    disabled: true,
  },
];

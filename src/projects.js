import vpbank_mobile from './assets/projects/img/png/VPbank_mobile.png';
import logo_vpbank from './assets/projects/img/png/VPbankLogo.png';
import rr_desktop from './assets/projects/img/png/rr_desktop.png';
import rr_mobile from './assets/projects/img/png/rr_mobile.png';
import rr_logo from './assets/projects/img/png/rr_logo.png';

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
  },
  {
    id: 2,
    name: 'rr_mob',
    title: 'Русское Радио',
    type: 'Мобильное приложение',
    logo: rr_logo,
    contept_img: rr_mobile,
    style: 'RusRadioMobile',
    text: `<p>Some text</p>`,
    feat: true,
  },
  {
    id: 3,
    name: 'rr',
    title: 'Русское Радио',
    type: 'Сайт',
    logo: rr_logo,
    contept_img: rr_desktop,
    style: 'RusRadio',
    text: `<p>Some text</p>`,
    feat: true,
  },
];

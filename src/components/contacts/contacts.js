import React from 'react';

import './contacts.css'
import './media.css'

import contacts from './img/jpg/contacts.jpg';


class Contacts extends React.Component {
  render () {
    let backgroundImage = {
      backgroundImage: `url(${contacts})`,
    };
    return (
      <div id="contacts" style={backgroundImage}>
        <noindex>
          <div className="content-inside">
            <h1>Контакты</h1>
            <div className="contacts-body">
              <div className="text-contacts">
                <div className="first">
                  <p>Руководитель проектов</p>
                  <a href="mailto:hello@devtrick.pro">hello@devtrick.pro</a>
                </div>
                <div className="second">
                  <a href="tel:+7 (996) 960-30-94">+7 (996) 960-30-94</a>
                </div>
                <div className="third">
                  <p>Кутешов Павел Валерьевич (ИП)</p>
                  <span>Расчетный счет: 40802810900000001861</span>
                  <br />
                  <span>Банк: АККСБ “КС БАНК” (ПАО) г. Саранск, ул. Демократическая, 30</span>
                  <br />
                  <span>К/сч. 30101810500000000749 в Отделении-НБ Республика Мордовия,</span>
                  <br />
                  <span>БИК: 048952749</span>
                  <br />
                  <span>ИНН/КПП: 1326021671/132601001</span>
                  <br />
                  <span>ОКПО 12925200</span>
                  <br />
                  <span>ОКВЭД основной: 62.01</span>
                  <br />
                  <span>дополнительные: 82.99, 63.12, 63.11, 62.09, 62.03, 62.02</span>
                  <br />
                  <span>ОГРН 1021300000072</span>
                </div>
              </div>
              <div className="get_together">Cвяжись с нами</div>
            </div>
          </div>
        </noindex>
      </div>
    );
  }
}

export default Contacts;

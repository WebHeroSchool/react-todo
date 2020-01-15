import React from 'react';
import Item from '../Item/Item';
const deals = ['Изучить материал по пропсам', 'Сделать задание по пропсам', 'Отправить задание на проверку'];
const ItemList = () => (deals.map((deals) => (
    <ul>
        <li><Item deal={deals}/></li>
    </ul>
)));
export {deals};
export default ItemList;
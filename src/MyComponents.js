import React from 'react';

const MyComponents = {
    /**
     * Копонент рендерит список
     * @param {type} свойство атрибута class
     * @param {childs} массив из контента для дочерних элементов
     * @returns список ul
     */
    SimpleList: ({type, childs}) => {
        const result = childs.map(el => {
            return <li key={crypto.randomUUID()} className={type}>
                {el}
            </li>
        })
        return <ul className={`list-${type}`}>
            {result}
        </ul>
    },

    /**
     * Копонент рендерит дату и время
     * @param {type} свойство атрибута class
     * @param {value} значение
     * @returns элемент span с датой и временем
     */
    DateTime: ({type, value}) => {
        return <span className={type}>{value}</span>
    },

    /**
     * Копонент рендерит данные по валюте (используется в компоненте Currency)
     * @param {paramType} свойство атрибута class
     * @param {param} значение
     * @returns элемент span с одним из выбранных параметров валюты
     */
    Cur: ({paramType, param}) => {
        return <span className={paramType}>{param}</span>
    },

    /**
     * Копонент рендерит список валют (при помощи компонентов Cur и SimpleList)
     * @param {...props} пропсы компонента SimpleList (формат аттрибута childs переписывается)
     * @returns список валют
     */
    Currency: ({...props}) => {
        const res = props.childs.map(el => {
            return [
                {'paramType':'cur-name', 'param': el.name},
                {'paramType':'cur-value', 'param': el.value},
                {'paramType':'cur-shift', 'param': el.shift}
            ].map(element => {
                return <MyComponents.Cur 
                        key={crypto.randomUUID()}
                        paramType={element.paramType}
                        param={element.param}
                    />
            })
        })

        return <MyComponents.SimpleList {...props} childs={res}/>
    },

    /**
     * Копонент рендерит строку запроса input
     * @param {inputType} свойство атрибута class для input
     * @param {btnName} название кнопки
     * @param {btnType} свойство атрибута class для кнопки
     * @returns input с кнопкой
     */
    Input: ({inputType, btnName, btnType}) => {
        return <form>
            <input type="text" className={inputType}/>
            <button className={btnType}>{btnName}</button>
        </form>
    },

    /**
     * Копонент рендерит карточки с различным содержанием (при помощи компонента SimpleList)
     * @param {...props} пропсы компонента SimpleList (формат аттрибута childs переписывается)
     * @returns список карточек
     */
    Cards: ({...props}) => {
        const res = props.childs.map(el => {
            const ctx = React.Children.map(el, callback => callback);
            return ctx;
        })

        return <MyComponents.SimpleList {...props} childs={res}/>
    }
};

export default MyComponents
import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = () => {
    const [money, setMoney]  = useContext(MoneyContext)
    return (
        <div>
            <h2>Uncle</h2>
            <p><small>Grandpa Money {money}</small></p>
            <button onClick={()=>setMoney(money + 1000)}>send 1000tk</button>
            <section className='flex'>
                <Cousin>Nabil</Cousin>
                <Cousin>Nabila</Cousin>
            </section>
        </div>
    );
};

export default Uncle;
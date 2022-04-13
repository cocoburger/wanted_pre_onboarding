import React, {useState} from "react";
import styles from '../styles/Tabs.css';
export default function Tabs() {

    const [vegetable, setVegetable] = useState('감자');
    const vegetableList = [
        {
            name: '감자',
            label: '감자',
            content: '감자는 설탕이랑',
        },
        {
            name: '고구마',
            label: '고구마',
            content: '고구마는 우유랑',

        },
        {
            name: '토마토',
            label: '토마토',
            content: '토마토는 설탕이랑',
        },
    ]

    return (
        <div className='simple-tabs'>
            <div className='tabs'>
                {
                    vegetableList.map((tab, i) => (
                        <button
                            key={i}
                            onClick={() => setVegetable(tab.name)}
                            className={(tab.name === vegetable) ? 'active' : ''}>
                            {tab.label}
                        </button>
                    ))
                }
            </div>
            <div className='tabs'>
            {
                vegetableList.map((tab, i) => {
                if(tab.name === vegetable) {
                    return <div key={i}> {tab.content} </div>
                }else {
                    return null;
                }
            })
        }
            </div>
        </div>
    )
}

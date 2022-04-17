import {useState, useRef, useEffect} from "react";
import styles from '../styles/Dropdown.css';

let fruits = [
    "포도",
    "수박",
    "참외",
    "토마토",
    "멜론",
    "딸기",
    "바나나",
    "망고",
]


function Dropdown () {
    const [selectedFruit, setSelectedFruit] = useState("")
    const [dropdownSearchValue, setDropdownSearchValue] = useState('');
    const [showList, setShowList] = useState(false)
    const dropdownRef = useRef();

    /**
     *    showList의 값이 변경될 때마다 checkIfClickedOutside 함수 실행.
     *    event를 걸어준다.
     *    mousedown은 클릭 시(마우스 클릭버튼이 눌린상태) 이벤트 발생. click은 클릭이 끝나고(마우스에서 클릭버튼을 떈 상태) 나서 발생한다.
     *    useRef를 사용하여 div 외부를 클릭 시 dropbox를 hide해준다.
     *    dropdownRef.current는 div이고, 클릭 이벤트가 div안에서 일어난게 아니면 showList를 false로 바꿔 dropbox를 닫는다.
     */

    useEffect(() => {
        const checkIfClickedOutside = e => {
            if(
                showList &&
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target)
            ) {
                setShowList(false)
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [showList])

    /**
     * fruit을 선택하면 selectedfruit의 값을 변경해주고 showList를 닫아준다.
     * @param fruits
     */
    const fruitsSelectionHandler = fruits => {
        setSelectedFruit(fruits)
        setDropdownSearchValue("")
        setShowList(false)
    }

    /**
     * input에 입력한 값과 fruit을 매치 함수를 통해 찾아준다.
     * @type {string[]}
     */
    const filteredFruits = fruits.filter(fruit =>
        fruit.match(new RegExp(dropdownSearchValue, "i"))
    )

    return (
        <div className="App">
            {showList ? (
                <div ref={dropdownRef} className="dropdown-wrapper">
                    <input
                        className="dropdown-input"
                        name="dropdown-input"
                        autoFocus
                        placeholder='Search Fruit'
                        onChange={e => setDropdownSearchValue(e.target.value)}
                        value={dropdownSearchValue}
                    />
                    <div className="dropdown-list">
                        <ul>
                            {filteredFruits.map(fruit => {
                                return (
                                    <li key={fruit} onClick={() => fruitsSelectionHandler(fruit)}>
                                        {fruit}
                                    </li>
                                )
                            })}
                            {filteredFruits.length === 0 && (
                                <li className="no-result">No results found</li>
                            )}
                        </ul>
                    </div>
                </div>
            ) : (
                //
                <input
                    className={`dropdown-search ${
                        !(dropdownSearchValue || selectedFruit) && "default"
                    }`}
                    onFocus={() => setShowList(true)}
                    defaultValue={selectedFruit ? selectedFruit : "Search Fruit"}
                />
            )}
        </div>
    )
}


export default Dropdown;

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

    const fruitsSelectionHandler = fruits => {
        setSelectedFruit(fruits)
        setDropdownSearchValue("")
        setShowList(false)
    }

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
                <input
                    className={`dropdown-search ${
                        !(dropdownSearchValue || selectedFruit) && "default"
                    }`}
                    onFocus={() => setShowList(true)}
                    value={selectedFruit || "Search Fruit"}
                />
            )}
        </div>
    )
}


export default Dropdown;

### 1. Toggle.js 
    - Button의 default css를 초기화 후에 만들었어야 했는데. 생각이 안나 Link 컴포넌트를 사용해서 작업하여 코드량이 많습니다.
    - toggleName이라는 boolean state를 만들었고, toggleName이 true이면 기본, false이면 상세로 설정하였습니다.
    - active라는 class을 만들었고, active의 스타일은 선택된 항목입니다. toggleName이 
    - true이면 기본 Link에 active class를 가진 컴포넌트를 보여주고,
    - false이면 상세 Link에 active class를 가진 컴포넌트를 보여줬습니다.
    - onClick 시에 toggleClick 함수를 실행시켰습니다. toggleClick 함수는 name, event를 매개변수로 받습니다.
    - name은 state입니다. 선택한 항목의 value와 name의 값을 비교 후 같으면 아무런 변화가 없고, 
    - toggleName의 값을 반대로 바꿔줍니다. name 값이 기본이면 상세로 바꿔줍니다. toggleName의 값이 변화하기 때문에 렌더링 되며
    - 선택된 항목을 보여줍니다.

### 2. Tab.js
    - vegetable state를 만들었고, default value는 감자입니다.
    - vegetableList를 만들어 map함수를 사용해 Button에 list.label의 값을 탭 형식으로 보여줍니다.
    - map함수 사용이 익숙하지 않아 예제들을 많이 찾아봤습니다.
    - onClick 시 setVegetable(tab.name)으로 tab.name으로 vegetable의 값을 변경합니다.
    - 삼항연산자를 사용하여 state의 값과 name값이 같으면 active를 부여해주고 아니면 active를 제거해줍니다.
    - 컨텐츠 또한 위와 동일한 방식으로 만들었습니다.

### 3. Input.js
    - email은 validation이 필요하고, password는 type의 변경이 필요한 작업이기에
    - email regexr를 찾아 만들었습니다.
    - validation이라는 함수를 만들어 onChange시 입력받는 값을 validation하여 true 시에  setIsEmail(true); 로 변경하여
    - 삼항연산자로 true 시에 초록색 스타일로, false이면 red로 스타일을 주었습니다.
    - password는 어떻게 type을 변경해줄까라는 고민을 했습니다. 
    - 다른 분들이 구현해 놓은 것들을 찾아보게 되었고, password state를 객체로 만들어 값을 변경해주었습니다.
    - eye state도 만들어 click 시 eye값을 반대로 바꿔줌으로써 보여주는 아이콘도 삼항연산자로 전환하여 보여줍니다.
    - fontAwesome을 적용하는데 에러가 많이 발생하여 가장 어려웠던 것 같습니다. import한 라이브러리에서 지원을 하지 않는
    - 아이콘을 사용했기에 발생한 에러였고, 사용가능한 라이브러리를 install 후 import하여 사용했습니다.
    

### 4.Dropdown.js
    - dropdown box와 input창을 분리하지 않고 만들었습니다.
     showList의 값이 변경될 때마다 checkIfClickedOutside 함수 실행. event를 걸어준다.
     mousedown은 클릭 시(마우스 클릭버튼이 눌린상태) 이벤트 발생. click은 클릭이 끝나고(마우스에서 클릭버튼을 떈 상태) 나서 발생한다.
     useRef를 사용하여 div 외부를 클릭 시 dropbox를 hide해준다.
     dropdownRef.current는 div이고, 클릭 이벤트가 div안에서 일어난게 아니면 showList를 false로 바꿔 dropbox를 닫는다. 
     fruit을 선택하면 selectedfruit의 값을 변경해주고 showList를 닫아준다.
     input에 입력한 값과 fruit을 매치 함수를 통해 찾아준다.
     필터링된 값을 map() 사용하여 dropbox에 리스트를 뿌려준다.
     필터링된 값이 없으면 값 없다고 보여준다.
     
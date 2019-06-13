
// 리덕스 thunk는 비동기 처리를 하기 위해 실행을 지연 시킨다.
// 액션 메세지 대신 thunk를 보낸다.
// 액션 정보가 아니라 함수를 리턴 하기 때문에 이 용어를 사용한다.
// reducer는 순수 함수 이어야 하기 때문에 사이드 이펙트가 발생하면 안된다.
// 따라서 reducer 에서 dispatch 를 할 수 없다.
// 결국 액션 생성자에서 처리 해야 한다.

//  액션
// const action = pages => {
//     return  {
//         type: "SET_PAGES",
//         pages
//     }
// }

const initialState = {
    pages: []
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case "SET_PAGES":
            return {
                ...state,
                pages: action.pages
            };
        default:
                return state;
    }
}

export default reducer
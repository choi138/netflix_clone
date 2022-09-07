import {atom} from "recoil"; //atom은 

export const modatState = atom({ // 모달창 상태
    key: 'modatState', // 고유한 키
    default: false // 기본값
});
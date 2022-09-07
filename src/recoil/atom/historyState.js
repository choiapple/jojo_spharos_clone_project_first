import {
    atom
}from 'recoil';

const historyState = atom({
    key:"historyState",
    default : {
        show : true
    }
})

export {historyState};
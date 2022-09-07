import {
    atom
}from 'recoil';

const searchState = atom({
    key:"searchState",
    default : {
        show : false
    }
})

export {searchState};
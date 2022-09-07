import{
    atom
}from 'recoil';

const cartCountState =atom({
    key:"cartCountState",
    default:{
        cartCountState:false
    }
})

export {cartCountState};
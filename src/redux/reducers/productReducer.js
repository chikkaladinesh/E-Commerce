import { ActionTypes } from "../contants/action-types";

const inititalState = {
    products : [
        {
        id: 1,
        title: "Robo Mop",
        category: "appliances",
        },
    ],
};
export const productReducer = (state = inititalState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state;
            default:
            return state;
    }
};
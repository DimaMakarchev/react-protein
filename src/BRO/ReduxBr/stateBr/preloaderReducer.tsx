import {PRELOADER, PreloaderType, TypePreloaderDispatcher} from "../../ComponentsTaskForBr/type/type";


const initState: PreloaderType = {
    loader: false
};


export const preloaderReducer = (state = initState, action: TypePreloaderDispatcher) => {
    switch (action.type) {
        case PRELOADER:
            debugger
            return {
                ...state, loader: !state.loader
            };
        default:
            debugger
            return state;
    }
};


export const preloaderDispatcher = (): TypePreloaderDispatcher => ({type: PRELOADER});

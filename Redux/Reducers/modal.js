import { AFF_MODAL,AFF_PHOTO_MODAL } from "../Actions/types";

const initStateModal = {visible:false,tempPhoto:null};

const modal = (state = initStateModal,action) => {

    switch (action.type) {

        case AFF_MODAL:

            return action.payload;

            break;

        // case AFF_PHOTO_MODAL:

        //     return action.payload;

        //     break;
    
        default:

            return state;

            break;
    }

}

export default modal

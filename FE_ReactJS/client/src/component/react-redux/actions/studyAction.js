import axios from "axios";

export const AlPHABET_BUTTON = "AlPHABET_BUTTON";
export const ALPHABET_FLASHCARD = "AlPHABET_FLASHCARD";
export const COMMUNICATION = "COMMUNICATION"
const alphabetButtonSuccess = (data) => ({
    type:AlPHABET_BUTTON,
    alphabetButtonAction:data
})
const alphabetFlashcardSuccess = (data) => ({
    type:ALPHABET_FLASHCARD,
    alphabetFlashcardAction:data
})
const communicationSuccess = (data) => ({
    type:COMMUNICATION,
    communicationAction:data
})
export const alphabetButtonShow = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('/study/alphabetButton');
            dispatch(alphabetButtonSuccess(response.data));
            
        } catch (error) {
            console.error("Lỗi khi lấy dữ liệu"+ error);
        }
    }
}
export const alphabetFlashcardShow = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('/study/alphabetFlashcard');
            dispatch(alphabetFlashcardSuccess(response.data));
            
        } catch (error) {
            console.error("Lỗi khi lấy dữ liệu"+ error);
        }
    }
}
export const communicationShow = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('/study/communication');
            dispatch(communicationSuccess(response.data));   
        } catch (error) {
            console.error("Lỗi khi lấy dữ liệu"+ error);
        }
    }
}
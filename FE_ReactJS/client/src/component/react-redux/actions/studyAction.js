import axios from "axios";

export const AlPHABET_BUTTON = "AlPHABET_BUTTON";
export const ALPHABET_FLASHCARD = "AlPHABET_FLASHCARD";
export const COMMUNICATION = "COMMUNICATION";
export const VOCABULARY = 'VOCABULARY';
export const GRAMMAR = 'GRAMMAR';
export const SAVE_VOCAB = 'SAVE_VOCAB';
export const SAVE_GRAMMAR = 'SAVE_GRAMMAR';

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
const vocabularySuccess = (data) => ({
    type:VOCABULARY,
    vocabularyAction:data
})
const grammarSuccess = (data) => ({
    type:GRAMMAR,
    grammarAction:data
})
const saveVocabSuccess = (data) => ({
    type:SAVE_VOCAB,
    saveVocabAction:data
})
const saveGrammarSuccess = (data) => ({
    type:SAVE_GRAMMAR,
    saveGrammarAction:data
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
export const vocabularyShow = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('/study/vocabulary');
            dispatch(vocabularySuccess(response.data));   
        } catch (error) {
            console.error("Lỗi khi lấy dữ liệu"+ error);
        }
    }
}
export const grammarShow = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('/study/grammar');
            dispatch(grammarSuccess(response.data));   
        } catch (error) {
            console.error("Lỗi khi lấy dữ liệu"+ error);
        }
    }
}
export const saveVocabShow = (studyVocab,user_id) => {
    return async (dispatch) => {
        try {
            const studyVocabSelect = studyVocab.map(({vocab_id,name,mean}) => ({vocab_id,name,mean,user_id}))
            console.log(studyVocabSelect);
            const response = await axios.post('/study/savevocab',{studyVocab: studyVocabSelect});
            dispatch(saveVocabSuccess(response.data));   
        } catch (error) {
            console.error("Lỗi khi lấy dữ liệu"+ error);
        }
    }
}
export const saveGrammarShow = (studyGrammar,user_id) => {
    return async (dispatch) => {
        try {
            const studyGrammarSelect = studyGrammar.map(({grammar_id,name,mean}) => ({grammar_id,name,mean,user_id}))
            console.log(studyGrammarSelect);
            const response = await axios.post('/study/savegrammar',{studyGrammar: studyGrammarSelect});
            dispatch(saveGrammarSuccess(response.data));   
        } catch (error) {
            console.error("Lỗi khi lấy dữ liệu"+ error);
        }
    }
}
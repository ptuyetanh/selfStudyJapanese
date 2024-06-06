import axios from "axios";

export const LEVEL = 'LEVEL';

const levelSuccess = (data) => ({
    type:LEVEL,
    levelAction:data
});

export const levelShow = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('/level');
            dispatch(levelSuccess(response.data));
        }catch (error) {
            console.error("Lỗi khi lấy dữ liệu"+ error);
        }
    }
}
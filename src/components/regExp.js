export const emailReg = /[a-zA-Z0-9.-_%+]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
export const englishReg = /^[a-zA-Z]$/i;
export const numEnglishReg = /^[A-Za-z0-9]+$/i;
export const koreanhReg = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]$/g;
export const numberReg = /^[0-9]$/g;
export const phoneNumberReg = /^01[0-9]{8,9}$/g;
export const phoneNumberDashReg =
    /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

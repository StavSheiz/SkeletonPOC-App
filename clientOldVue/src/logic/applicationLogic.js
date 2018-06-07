import requestUtils from '../utils/requestUtils';

const applicationLogic = {
    getRandomNumber() {
        return Math.floor(Math.random() * 100);
    },
    multiplyNumbers(x, y) {
        return x * y;
    },
    getServerData() {
        return requestUtils.sendGetRequest("GetServerData");
    }
}

export default applicationLogic;
import appConfig from '../../appConfig';

const requestUtils = {
    serverURL: appConfig.serverURL,
    sendGetRequest (action) {
        return new Promise((resolve, reject) => {
            fetch(this.serverURL + action).then((response) => {
                if(response && response.ok) {
                    response.json().then((data) => {
                        resolve(data);
                    }, (err) => {
                        reject();
                    });
                } else {
                    reject();
                }
            }, (err) => {
                reject();
            })
        });

    }
}

export default requestUtils;
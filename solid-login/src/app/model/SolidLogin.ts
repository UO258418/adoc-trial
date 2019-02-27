const auth = require("solid-auth-client");

export class SolidLogin {

    id: string;

    constructor() {}

    async popupLogin() {
        let session = await auth.currentSession();
        let popupUri = 'https://solid.community/common/popup.html';
        if (!session)
          session = await auth.popupLogin({ popupUri });
        alert(`Logged in as ${session.webId}`);
    }
      
}
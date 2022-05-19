import Mailboxlayer from "./mailboxlayer.controller";

const api = () => ({
    Mailboxlayer: () => ({ ...Mailboxlayer })
});

export default api;
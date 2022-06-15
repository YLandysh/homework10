import supertest from "supertest";
import urls from "../config/index";
import params from "../config/data";


const Mailboxlayer = {
    post: async () => {
            const r = await supertest(`${urls.mailboxlayer}`).post(`api/check?${params.key}&${params.email}`).set("Accept", "application/json");
            return r;
        },
};

export default Mailboxlayer;
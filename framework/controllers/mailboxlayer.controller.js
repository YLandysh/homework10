import fetch from "node-fetch";
import supertest from "supertest";
import urls from "../config/index";


const Mailboxlayer = {
    postOfKey: async (key) => {
        const r = await supertest(`${urls.mailboxlayer}`).post(`api/check?${key}`).set("Accept", "application/json");
        return r;
    },
    postOfEmail: async (email) => {
        const r = await supertest(`${urls.mailboxlayer}`).post(`api/check?${email}`).set("Accept", "application/json");
        return r;
    },
    postKeyAndEmil: async (key, email) => {
        const r = await supertest(`${urls.mailboxlayer}`).post(`api/check?${key}&${email}`).set("Accept", "application/json");
        return r;
    },
};

export default Mailboxlayer;
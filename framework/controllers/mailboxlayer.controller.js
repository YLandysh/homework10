import supertest from "supertest";
import urls from "../config/index";
import params from "../config/data";


const Mailboxlayer = {
    // postOfKey: async () => {
    //     const r = await supertest(`${urls.mailboxlayer}`).post(`api/check?${params.key}`).set("Accept", "application/json");
    //     return r;
    // },
    // postOfEmail: async () => {
    //     const r = await supertest(`${urls.mailboxlayer}`).post(`api/check?${params.email}`).set("Accept", "application/json");
    //     return r;
    // },
    // postKeyAndEmil: async () => {
    //     const r = await supertest(`${urls.mailboxlayer}`).post(`api/check?${params.key}&${params.email}`).set("Accept", "application/json");
    //     return r;
    // },
    post: async () => {
            const r = await supertest(`${urls.mailboxlayer}`).post(`api/check?${params.key}&${params.email}`).set("Accept", "application/json");
            return r;
            // const a = await supertest(`${urls.mailboxlayer}`).post(`api/check?${params.email}`).set("Accept", "application/json");
            // return a;
            //
            // const b = await supertest(`${urls.mailboxlayer}`).post(`api/check?${params.key}&${params.email}`).set("Accept", "application/json");
            // return b;
        },
};

export default Mailboxlayer;
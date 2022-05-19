//import supertest from "supertest";
import api from "../framework/controllers/index";

describe("Проверка сервиса Mailboxlayer", () => {
    test("Авторизация с ключом и email / post 200", async () => {
        const key = new URLSearchParams(
            {
                "key": "8cd9dd0b86d17e92be16e9d69e18a84d",
            },
        );
        const email = new URLSearchParams(
            {
                "email": 'lyarullina500@gmail.com',
            },
        );
        const r = await api().Mailboxlayer().postKeyAndEmil(key,email);
        expect(r.status).toEqual(200);
    });
    //     Первый тест - положительный
    test("Авторизация с ключом / post 200", async () => {
        const key = new URLSearchParams(
            {
                "key": "8cd9dd0b86d17e92be16e9d69e18a84d",
            },
        );
        const r = await api().Mailboxlayer().postOfKey(key);
        expect(r.status).toEqual(200);
    });
    //     Второй тест - набор параметризированных тестов
    test.each`
      key                                   | email                            | expected
      ${"8cd9dd0b86d17e92be16e9d69e18a84d"} | ${"lyarullina500@gmail.com"}     | ${200}
      ${""}                                 | ${"lyarullina500@gmail.com"}     | ${101}
      ${"8cd9dd0b86d17e92be16e9d69e18a84d"} | ${""}                            | ${210}
      ${"8cd9dd0b86d17e92be16e9d64d11!"}    | ${"lyarullina500@gmail.com"}     | ${101}
      ${"8cd9dd0b86d17e92be16e9d69e18a84d"} | ${"!2lyarullina500@gma11il.com"} | ${101}
  `("$key & $email = $expected", async ({key, email, expected}) => {
        const r = await api().Mailboxlayer().postKeyAndEmil(key,email);
        expect(r.status).toEqual(expected);
    });
    //     Третий тест - проверяет права доступа к точке без api_key
    test("Авторизация с email / post 200", async () => {
        const email = new URLSearchParams(
            {
                "email": "8cd9dd0b86d17e92be16e9d69e18a84d",
            },
        );
        const r = await api().Mailboxlayer().postOfEmail(email);
        expect(r.status).toEqual(200);
    });
});



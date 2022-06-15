import api from "../framework/controllers/index";
import params from "../framework/config/data";

describe("Проверка сервиса Mailboxlayer", () => {
    test("Авторизация с ключом и email / post 200", async () => {
        const r = await api().Mailboxlayer().post(params.key, params.email);
        expect(r.status).toEqual(200);
    });
    //     Первый тест - положительный
    test("Авторизация с ключом / post 200", async () => {
        const r = await api().Mailboxlayer().post(params.key);
        expect(r.status).toEqual(200);
    });
    //     Второй тест - набор параметризированных тестов
    test.each`
      key                                   | email                            | expected
      ${params.key}                         | ${params.email}                  | ${200}
      ${" "}                                | ${params.email}                  | ${101}
      ${params.key}                         | ${""}                            | ${210}
      ${"8cd9dd0b86d17e92be16e9d64d11!"}    | ${params.email}                  | ${101}
      ${"8cd9dd0b86d17e92be16e9d69e18a84d"} | ${"!2lyarullina500@gma11il.com"} | ${101}
  `("$key & $email = $expected", async ({key, email, expected}) => {
        const b = await api().Mailboxlayer().post(key,email);
        expect(b.status).toEqual(expected);
    });
    //     Третий тест - проверяет права доступа к точке без api_key
    test("Авторизация с email / post 200", async () => {
        const r = await api().Mailboxlayer().post(params.email);
        expect(r.status).toEqual(200);
    });
});



import { UsersDataSourceType } from "components/UsersTable";
import * as faker from "faker";
import { uniqueId } from "helpers/uniqueId";

export const users: UsersDataSourceType[] = Array.from({ length: 20 }).map(
    () => ({
        id: uniqueId(),
        emailAddress: faker.internet.email(),
        name: faker.name.firstName(),
        username: faker.internet.userName(),
    })
);

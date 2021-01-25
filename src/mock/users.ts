// import { UsersDataSourceType } from "components/UsersTable";
import * as faker from "faker";
import { uniqueId } from "helpers/uniqueId";
type UsersDataSourceType = any;
export const users: UsersDataSourceType[] = Array.from({ length: 20 }).map(
    () => ({
        _id: uniqueId(),
        emailAddress: faker.internet.email(),
        name: faker.name.firstName(),
        username: faker.internet.userName(),
    })
);

import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const config: TypeOrmModuleOptions = {

    type: 'postgres',
    username: 'postgres',
    password: 's81j2knoo',
    port: 5432,
    host: '127.0.0.1',
    database: 'Server1',
    synchronize: true,
    entities: ['dist/**/*.entity{.ts,.js}'],

}
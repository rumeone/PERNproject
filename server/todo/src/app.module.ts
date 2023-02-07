import { Module } from '@nestjs/common'
import {TodoModule} from "./todos/todo.module";
import {SequelizeModule} from "@nestjs/sequelize";
import {ConfigModule} from "@nestjs/config";
import {SequelizeConfigService} from "./config/sequelize.config.service";
import {databaseConfig} from "./config/configuration";

@Module({
  imports: [
      TodoModule,
      SequelizeModule.forRootAsync({
        imports: [ConfigModule],
        useClass: SequelizeConfigService
      }),
      ConfigModule.forRoot({
          load: [databaseConfig]
      }),
      TodoModule
  ],
})
export class AppModule {}

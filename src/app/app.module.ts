import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TerminusModule } from '@nestjs/terminus';

import { HealthModule } from '../health/health.module';
import { JsonModule } from '../json/json.module';

@Module({
    imports: [
        TerminusModule,
        HealthModule,
        JsonModule,
        ConfigModule.forRoot({
            isGlobal: true
        }),
    ],
    controllers: [],
    providers: [],
})
export class AppModule { }

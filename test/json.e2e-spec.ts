import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, VersioningType } from '@nestjs/common';
import * as request from 'supertest';
import { JsonModule } from '../src/json/json.module';
import helmet from 'helmet';
import * as compression from 'compression';

describe('JsonController (e2e)', () => {
    let app: INestApplication;

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [JsonModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        app.use(helmet());
        app.enableCors();

        app.use(compression());

        app.enableVersioning({
            type: VersioningType.URI,
            prefix: 'v',
            defaultVersion: '1'
        });
        await app.init();
    });

    it('/v1/json/csv (POST)', () => {
        return request(app.getHttpServer())
            .post('/v1/json/csv')
            .send({
                json: { key1: 1, key2: 2 },
            })
            .expect(200)
            .expect(response => {
                expect(response.body).toEqual({ csv: 'key1,key2\r\n1,2\r\n' });
            })
    });
});

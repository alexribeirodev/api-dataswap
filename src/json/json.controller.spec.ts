import { Test, TestingModule } from '@nestjs/testing';
import { JsonController } from './json.controller';
import { JsonService } from './json.service';

describe('JsonController', () => {
    let controller: JsonController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [JsonController],
            providers: [JsonService],
        }).compile();

        controller = module.get<JsonController>(JsonController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    it('should returning CSV from JSON', () => {
        const json = { key1: 1, key2: 2 }

        const result = controller.toCSV({
            json: json,
        })
        expect(result).toBeDefined();
        expect(result).toHaveProperty('csv');
        expect(result.csv).toBe('key1,key2\r\n1,2\r\n');
    });

    it('should returning CSV from JSON stringfy', () => {
        const json = { key1: 1, key2: 2 }

        const result = controller.toCSV({
            json: JSON.stringify(json),
        })
        expect(result).toBeDefined();
        expect(result).toHaveProperty('csv');
        expect(result.csv).toBe('key1,key2\r\n1,2\r\n');
    });

    it('should returning CSV from JSON with field filter', () => {
        const json = { key1: 1, key2: 2 }

        const result = controller.toCSV({
            json: json,
            fields: ['key2'],
        })
        expect(result).toBeDefined();
        expect(result).toHaveProperty('csv');
        expect(result.csv).toBe('key2\r\n2\r\n');
    });

    it('should returning CSV from JSON stringfy with field filter', () => {
        const json = { key1: 1, key2: 2 }

        const result = controller.toCSV({
            json: JSON.stringify(json),
            fields: ['key2'],
        })
        expect(result).toBeDefined();
        expect(result).toHaveProperty('csv');
        expect(result.csv).toBe('key2\r\n2\r\n');
    });

    it('should returning CSV from Array', () => {
        const json = [{ key1: 1, key2: 2 }, { key1: 1, key2: 2 }]

        const result = controller.toCSV({
            json: json,
        })
        expect(result).toBeDefined();
        expect(result).toHaveProperty('csv');
        expect(result.csv).toBe('key1,key2\r\n1,2\r\n1,2\r\n');
    });

    it('should returning CSV from JSON stringfy', () => {
        const json = [{ key1: 1, key2: 2 }, { key1: 1, key2: 2 }]

        const result = controller.toCSV({
            json: JSON.stringify(json),
        })
        expect(result).toBeDefined();
        expect(result).toHaveProperty('csv');
        expect(result.csv).toBe('key1,key2\r\n1,2\r\n1,2\r\n');
    });

    it('should returning CSV from JSON with field filter', () => {
        const json = [{ key1: 1, key2: 2 }, { key1: 1, key2: 2 }]

        const result = controller.toCSV({
            json: json,
            fields: ['key2'],
        })
        expect(result).toBeDefined();
        expect(result).toHaveProperty('csv');
        expect(result.csv).toBe('key2\r\n2\r\n2\r\n');
    });

    it('should returning CSV from JSON stringfy with field filter', () => {
        const json = [{ key1: 1, key2: 2 }, { key1: 1, key2: 2 }]

        const result = controller.toCSV({
            json: JSON.stringify(json),
            fields: ['key2'],
        })
        expect(result).toBeDefined();
        expect(result).toHaveProperty('csv');
        expect(result.csv).toBe('key2\r\n2\r\n2\r\n');
    });
});

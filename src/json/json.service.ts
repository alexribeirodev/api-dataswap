import { Injectable } from '@nestjs/common';
import { JSONToCSVRequestDto, JSONToCSVResponseDto } from './dto/json-to-csv.dto';
import { parseJSONSafe } from './helpers/json-parse-safe.helper';

@Injectable()
export class JsonService {
    toCSV(data: JSONToCSVRequestDto): JSONToCSVResponseDto {
        /**
         * Transform JSON string to Object
         */
        let jsonItems = parseJSONSafe(data.json)
        if (!jsonItems.length) jsonItems = [jsonItems]
        const fields = data.fields || []

        /**
         * Filter Object by fields
         * generating new object
         */
        const jsonFiltered = []

        for (const item of jsonItems) {
            const itemFiltered = {}
            for (const key of Object.keys(item)) {
                if (fields.length == 0 || fields.includes(key)) {
                    itemFiltered[key] = item[key]
                }
            }
            jsonFiltered.push(itemFiltered)
        }

        /**
         * Convert Object to CSV string
         */
        let csv = Object.keys(jsonFiltered[0]).join(',') + '\r\n'

        for (let item of jsonFiltered) {
            let values = []
            for (let key of Object.keys(item)) {
                values.push(item[key])
            }

            csv += values.join(',') + '\r\n'
        }

        return {
            csv: csv,
        }
    }
}

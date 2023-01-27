import { Controller, Post, Body, Res, HttpCode, Version } from '@nestjs/common';
import { JsonService } from './json.service';
import { JSONToCSVRequestDto, JSONToCSVResponseDto } from './dto/json-to-csv.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('JSON')
@Controller('json')
export class JsonController {
    constructor(private readonly jsonService: JsonService) { }

    @ApiResponse({
        status: 200,
        type: JSONToCSVResponseDto,
    })
    @Version('1')
    @Post('/csv')
    @HttpCode(200)
    toCSV(@Body() data: JSONToCSVRequestDto): JSONToCSVResponseDto {
        return this.jsonService.toCSV(data)
    }
}

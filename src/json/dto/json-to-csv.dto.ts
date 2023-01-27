import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsArray, IsDefined, IsJSON, IsOptional, IsString, ValidateNested } from 'class-validator'

export class JSONToCSVRequestDto {
    @ApiProperty()
    @IsJSON()
    @IsDefined()
    json: any

    @ApiPropertyOptional()
    @IsOptional()
    @IsArray()
    @Type(() => String)
    fields?: String[]
}

export class JSONToCSVResponseDto {
    @ApiProperty()
    csv: string
}

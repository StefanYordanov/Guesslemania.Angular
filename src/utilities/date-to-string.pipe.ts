import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'dateToString'
})
export class DateToString implements PipeTransform {

    transform(value: Date): string {
        return value.getDate() +"." +(value.getMonth()+1) +"." + value.getFullYear();
    }
}

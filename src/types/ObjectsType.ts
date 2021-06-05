import {KeyValue} from "./KeyValue"
export type ObjectType = {
    [key: string]: string | string[] | boolean | boolean[] | number | number[] | null | KeyValue | KeyValue[]
}

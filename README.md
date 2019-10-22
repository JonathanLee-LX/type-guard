# type-guard

Typescript's type guard utils.

## install

> npm install ts-type-guard

ts-type-guard is a type checking package based on typescript. This package use type-gurard feature to implement more usefull type checking.

## examples

``` javascript
import {isString} from 'ts-type-guard'

const str = 'foo'

if(isString(str)) {
    consol.log(str.concat(str))
}
```

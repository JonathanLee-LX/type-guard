export const isString = (value: any): value is string => {
    return typeof value === 'string'
}

export const isNumber = (value: any): value is number => {
    return typeof value === 'number'
}

export const isBigInt = (value: any): value is number => {
    return typeof value === 'bigint'
}

export const isBoolean = (value: any): value is boolean => {
    return typeof value === 'boolean'
}

export const isUndefined = (value: any): value is undefined => {
    return typeof value === 'undefined'
}

export const isNull = (value: any): value is null => {
    return value === null
}

export const isObject = (value: any): value is Object => {
    return typeof value === 'object'
}

export const isFunction = (value: any): value is Function => {
    return typeof value === 'function'
}

export const isSymbol = (value: any): value is Symbol => {
    return typeof value === 'symbol'
}

export const isArray = (value: any): value is Array<any> => {
    return Array.isArray(value)
}

export const isRegExp = (value: any): value is RegExp => {
    return value instanceof RegExp
}
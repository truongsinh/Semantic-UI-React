const pipe = (...functions) => data => functions.reduce((value, func) => func(value), data)
export default pipe

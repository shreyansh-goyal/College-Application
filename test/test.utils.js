export const findTestByAttr=(wrapper,attribute)=>
{
    return wrapper.find(`[data-test='${attribute}']`)
}
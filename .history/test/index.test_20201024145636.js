import fizzBuzz from "../index"
describe('fizzbuzz', () => {
    test('输入1返回1', ()=>{
        expect(fizzBuzz(1)).toBe(1);
    })

    test('输入3返回fizz', ()=>{
        expect(fizzBuzz(3)).toBe('fizz');
    })

    test('输入5返回buzz', ()=>{
        fizzBuzz(5).toBe(5)
    })
});
import fizzBuzz from "../../src/fizzbuzz"

describe('fizzbuzz', () => {

    test('输入1返回1', ()=>{
        expect(fizzBuzz(1)).toBe(1);
    })

    test('输入3返回fizz', ()=>{
        expect(fizzBuzz(3)).toBe('fizz');
    })

    test('输入5返回buzz', ()=>{
        expect(fizzBuzz(5)).toBe('buzz');
    })
    test('输入15返回fizzbuzz', ()=>{
        expect(fizzBuzz(15)).toBe("fizzBuzz");
    })

    test('输入13返回fizz', ()=>{
        expect(fizzBuzz(13)).toBe('fizz');
    })

    test('输入52返回buzz',()=>{
        expect(fizzBuzz((52))).toBe('buzz');
    })

    test('输入53返回fizzbuzz', ()=>{
        expect(fizzBuzz(53)).toBe('fizzBuzz');
    })
});

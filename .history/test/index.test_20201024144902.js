import fizzBuzz from "../index"
describe('fizzbuzz', () => {
    test('输入1返回1', ()=>{
        expect(fizzBuzz(1)).toBe(1);
    })
});
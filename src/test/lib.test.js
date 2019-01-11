import {cashback} from "../js/lib";

test('should calculate result', () => {
    const result = cashback(1000);

    expect(result).toBe(50);

});
test('should calculate result over limit', () => {
    const result = cashback(1000000);

    expect(result).toBe(3000);

})
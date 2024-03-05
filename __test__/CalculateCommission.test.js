const  calculateCommissionFunction  = require('../CalculateComission');

describe(
    'calculateCommissionFunction', () =>

    {
    test('commission for total sales <= 1000', () => {
        const [totalSales, commission] = calculateCommissionFunction(10, 10, 10);
        expect(totalSales).toBe(1000);
        expect(commission).toBe(95.5); 
    })

    test('commission for total sales >1000 & <=1800', () => {
        const [totalSales, commission] = calculateCommissionFunction(15, 15, 15);
        expect(totalSales).toBe(1500);
        expect(commission).toBe(218.25); 
    })

    test('commission for total sales >1800', () => {
        const [totalSales, commission] = calculateCommissionFunction(50, 50, 50);
        expect(totalSales).toBe(5000);
        expect(commission).toBe(991); 
    })

    test('locks exceed limit of 70', () => {
        const invalid = calculateCommissionFunction(100, 50, 50);
        expect(invalid).toBe("Sales quantities exceed maximum limits.");
    })

    test('stocks exceed limit of 80', () => {
        const invalid = calculateCommissionFunction(50, 100, 50);
        expect(invalid).toBe("Sales quantities exceed maximum limits.");
    })

    test('stocks barrels exceed limit of 90', () => {
        const invalid = calculateCommissionFunction(50, 50, 100);
        expect(invalid).toBe("Sales quantities exceed maximum limits.");
    })

    test('locks and stocks exceed limits', () => {
        const invalid = calculateCommissionFunction(100, 100, 50);
        expect(invalid).toBe("Sales quantities exceed maximum limits.");
    })

    test('stocks and barrels exceed limits', () => {
        const invalid = calculateCommissionFunction(50, 100, 100);
        expect(invalid).toBe("Sales quantities exceed maximum limits.");
    })

    test('locks and barrels exceed limits', () => {
        const invalid = calculateCommissionFunction(100, 50, 100);
        expect(invalid).toBe("Sales quantities exceed maximum limits.");
    })

    test('locks, stocks, and barrels exceed limits', () => {
        const invalid = calculateCommissionFunction(100, 100, 100);
        expect(invalid).toBe("Sales quantities exceed maximum limits.");
    })
});
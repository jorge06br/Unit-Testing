test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar, fromYenToPound } = require('./app.js')

    // use the function like its suppoed to be used
    const euro = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One Yen should be 0.00938 dollars", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')

    // use the function like its supposed to be used
    const dollar = fromDollarToYen(3.5)

    // if 1 dollar are 106.5833 dollars, then 3.5 dollars should be (3.5 * 106.5833)
    const expected = 3.5 * 106.5833333; 
    
    // this is the comparison for the unit test
     expect(fromDollarToYen(3.5)).toBeCloseTo(373.04); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One Yen should be 0.00625 pound", function(){
    //import the function from app.js
    const { fromYenToPound } = require('./app.js')

    // use the function like its suppoed to be used
    const yen = fromYenToPound(3.5)

    // if 1 pound are 0.006255 yens, then 3.5 yen should be (3.5 * 0.00625)
    const expected = 3.5 * 0.00625; 
    
    // this is the comparison for the unit test
     expect(fromYenToPound(3.5)).toBeCloseTo(0.021); 
})
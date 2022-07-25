describe("calculateMonthlyPayment() tests",function(){
  it('should calculate the monthly rate correctly', function () {
    const values = {
      amount: 10000,
      years: 8,
      rate: 5.8
    };
    
    expect(calculateMonthlyPayment(values)).toBe('130.44');
  });
  
  
  it("should return a result with 2 decimal places", function () {
    const values = {
      amount: 10000,
      years: 8,
      rate: 5.8
    };
    
    expect(calculateMonthlyPayment(values)).toEqual('130.44');
  
    
  });
  
  it("output should be a string", function () {
    const values = {
      amount: 10000,
      years: 8,
      rate: 5.8
    };

    expect(calculateMonthlyPayment(values)).toBeInstanceOf(String);
  });

  it("should handle high yearly rates ", function () {
    const values = {
      amount: 10000,
      years: 40,
      rate: 99
    };

    expect(calculateMonthlyPayment(values)).toEqual('825.00');
  });
});

afterAll(() => {
  values = "";
})
  
  /// etc
  
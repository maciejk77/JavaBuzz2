describe('Javabuzz', function() {
  
  beforeEach(function(){
      javabuzz = new Javabuzz();
    });

  describe('knows when a number is', function(){

    it('divisible by 3', function(){
      expect(javabuzz.isDivisibleByThree(3)).toBe(true);
    });

    it('divisible by 5', function(){
      expect(javabuzz.isDivisibleByFive(5)).toBe(true);
    });

    it('divisible by 15', function(){
      javabuzz = new Javabuzz();
      expect(javabuzz.isDivisibleByFifteen(15)).toBe(true);
    });

  });

  describe('knows when number is NOT', function(){

    it('NOT divisible by 3', function(){
      expect(javabuzz.isDivisibleByThree(1)).toBe(false);
    });
    
    it('NOT divisible by 5', function(){
      expect(javabuzz.isDivisibleByFive(1)).toBe(false);
    });

    it('NOT divisible by 15', function(){
      expect(javabuzz.isDivisibleByFifteen(1)).toBe(false);
    });

  });

  describe('when playing', function(){

    it('Shows "Java" when number is divisible by 3', function(){
      expect(javabuzz.says(3)).toEqual("Java");
    });
    
    it('Shows "Buzz" when number is divisible by 5', function(){
      expect(javabuzz.says(5)).toEqual("Buzz");
    });

    it('Shows "JavaBuzz" when number is divisible by 15', function(){
      expect(javabuzz.says(15)).toEqual("JavaBuzz");
    });


  });

});

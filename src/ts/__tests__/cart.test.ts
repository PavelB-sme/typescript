import  Cart  from "../Cart";

describe ('Class Cart', () => {
  let cart: Cart;
  let consoleErrorSpy: jest.SpyInstance;

  beforeEach (() => {
     cart = new Cart(
      "Main Cart",
      2023,       
      "USA",      
      "Test",      
      "Action",    
      0,          
      0,           
      1,        
    );

    consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {})
  });

  afterEach (() => {
    consoleErrorSpy.mockRestore();
  });

  test('check add movie in cart', () => {
    const testItem = {
      name: 'Test Movie',
      year: 2023,
      country: 'US',
      slogan: 'Test',
      genre: 'Action',
      time: 120,
      price: 10,
      id: 1,
    };

    cart.add(testItem);
   
    expect(cart.items).toContainEqual(testItem);
    expect(cart.items).toHaveLength(1);
  });

  test('check calculate sum', () => {
    const testItem = {
      name: 'Test Movie',
      year: 2023,
      country: 'US',
      slogan: 'Test',
      genre: 'Action',
      time: 120,
      price: 10,
      id: 1
    };

    const testItem2 = {
      name: 'Test Movie',
      year: 2023,
      country: 'US',
      slogan: 'Test',
      genre: 'Action',
      time: 120,
      price: 10,
      id: 2
    };

    cart.add(testItem);
    cart.add(testItem2);
    const sumProduct = cart.calculateSum();

    expect(sumProduct).toBe(20)
  });

  test('check calculate sum discount', () => {
    const testItem = {
      name: 'Test Movie',
      year: 2023,
      country: 'US',
      slogan: 'Test',
      genre: 'Action',
      time: 120,
      price: 50,
      id: 1
    };

    const testItem2 = {
      name: 'Test Movie',
      year: 2023,
      country: 'US',
      slogan: 'Test',
      genre: 'Action',
      time: 120,
      price: 50,
      id: 2,
    };

    cart.add(testItem);
    cart.add(testItem2);
    const sumProductDiscount = cart.calculateSumDiscount(5);

    expect(sumProductDiscount).toBe(95)
  });

  test('check delete product', () => {
    const testItem = {
      name: 'Test Movie',
      year: 2023,
      country: 'US',
      slogan: 'Test',
      genre: 'Action',
      time: 120,
      price: 50,
      id: 1
    };

    const testItem2 = {
      name: 'Test Movie',
      year: 2023,
      country: 'US',
      slogan: 'Test',
      genre: 'Action',
      time: 120,
      price: 50,
      id: 2,
    };

    cart.add(testItem);
    cart.add(testItem2);
    cart.deleteProduct(2);

    expect(cart.items).toContainEqual(testItem);
  });

  test('check for missing id removal', () => {
        const testItem = {
      name: 'Test Movie',
      year: 2023,
      country: 'US',
      slogan: 'Test',
      genre: 'Action',
      time: 120,
      price: 50,
      id: 1,
      type: 'unique',
    };

    const testItem2 = {
      name: 'Test Movie',
      year: 2023,
      country: 'US',
      slogan: 'Test',
      genre: 'Action',
      time: 120,
      price: 50,
      id: 2,
      type: 'unique',
    };

    cart.add(testItem);
    cart.add(testItem2);
    const id: number = 3;
    cart.deleteProduct(id);

    expect(consoleErrorSpy).toHaveBeenCalledWith(`Продукта с id ${id} не существует`)
  })
});


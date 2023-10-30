
const app = require('../app');


describe('Shopping List API', () => {
  // Test GET /items
  it('should get a list of shopping items', async () => {
    const response = await request(app).get('/items');
    expect(response.statusCode).toBe(200);
  });

  // Test POST /items
  it('should add an item to the shopping list', async () => {
    const newItem = { name: 'New Item', price: 4.99 };
    const response = await request(app)
      .post('/items')
      .send(newItem);
    expect(response.statusCode).toBe(201);
    expect(response.body).toEqual({ added: newItem });
  });


});

const pyramid = require('./index');

beforeEach(() => {
	jest.spyOn(console, 'log');
});

afterEach(() => {
	console.log.mockRestore();
});

test('pyramid is a function', () => {
	expect(typeof pyramid).toEqual('function');
});

test('prints a pryamid for n = 2', () => {
	pyramid(2);
	expect(console.log.mock.calls[0][0]).toEqual(' # ');
	expect(console.log.mock.calls[1][0]).toEqual('###');
	expect(console.log.mock.calls.length).toEqual(2);
});

test('prints a pryamid for n = 3', () => {
	pyramid(3);
	expect(console.log.mock.calls[0][0]).toEqual('  #  ');
	expect(console.log.mock.calls[1][0]).toEqual(' ### ');
	expect(console.log.mock.calls[2][0]).toEqual('#####');
	expect(console.log.mock.calls.length).toEqual(3);
});

test('prints a pryamid for n = 4', () => {
	// 2n-1
	pyramid(4);
	expect(console.log.mock.calls[0][0]).toEqual('   #   '); //1 -> 1
	expect(console.log.mock.calls[1][0]).toEqual('  ###  '); //2 -> 3
	expect(console.log.mock.calls[2][0]).toEqual(' ##### '); //3 -> 5
	expect(console.log.mock.calls[3][0]).toEqual('#######'); //4 -> 7
	expect(console.log.mock.calls.length).toEqual(4);
});

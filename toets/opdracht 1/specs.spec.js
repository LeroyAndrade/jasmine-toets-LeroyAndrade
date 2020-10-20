describe('Testje 1', function() {
    it('should have the correct title', function () {
        expect(document.title).toBe('Voorbeeld toets');
        expect(document.charset).toBe('UTF-8');
    });
});

describe('Testje 2', function () {
    it('should have correct unitTest.item name', function () {
        expect(unitTest.item).toBe('voorbeeld');
    });
    it('should have the correct unitTest.number', function () {
        expect(unitTest.nummer).toEqual(3);
    });
});

    describe('Testje 3', function () {
    it('should have correct unitTest.description ', function () {
        expect(unitTest.beschrijving).toBe('Beschrijving');
    });
    
    describe('Testje 4', function () {
        it('should have correct unitTest.Message', function () {
            expect(unitTest.boodschap).toEqual('Hallo');
        });
    });
});

const formatVolumeIconPath = require('../assets/scripts/main');
let volume1 = 70;
let volume2 = 50;
let volume3 = 20;
let volume4 = 0;

describe('test path', () => {
    test('sound level 3', () => {
        expect(formatVolumeIconPath(volume1)).toBe(`./assets/media/icons/volume-level-3.svg`)
    });

    test('sound level 2', () => {
        expect(formatVolumeIconPath(volume2)).toBe(`./assets/media/icons/volume-level-2.svg`)
    });
    test('sound level 1', () => {
        expect(formatVolumeIconPath(volume3)).toBe(`./assets/media/icons/volume-level-1.svg`)
    });
    test('sound level 0', () => {
        expect(formatVolumeIconPath(volume4)).toBe(`./assets/media/icons/volume-level-0.svg`)
    });
});
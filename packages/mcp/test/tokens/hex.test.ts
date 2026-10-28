import { describe, expect, it } from 'vitest';

import { normHex } from '../../src/tokens/hex.js';

describe('normHex', () => {
  it('expands #RGB shorthand', () => {
    expect(normHex('#f0a')).toBe('#FF00AA');
  });

  it('expands #RGBA shorthand and drops a fully-opaque alpha', () => {
    expect(normHex('#F00F')).toBe('#FF0000');
  });

  it('expands #RGBA shorthand and keeps a translucent alpha', () => {
    expect(normHex('#0008')).toBe('#00000088');
  });

  it('drops a fully-opaque alpha from #RRGGBBAA', () => {
    expect(normHex('#ff0000ff')).toBe('#FF0000');
  });

  it.each(['#12', '#12345', '#1234567', '#123456789', '#ggg', 'red'])(
    'returns null for %s',
    raw => {
      expect(normHex(raw)).toBeNull();
    },
  );
});

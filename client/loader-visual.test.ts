import { describe, expect, it, vi } from 'vitest';
import { mountLoaderVisual } from './src/e4-loader-visual.js';

function fixture(existing = false) {
  let markup = existing ? '<style></style>' : '';
  const root = {
    get childElementCount() { return markup ? 2 : 0; },
    get innerHTML() { return markup; },
    set innerHTML(value: string) { markup = value; },
  };
  const attachShadow = vi.fn(() => root);
  const host = { shadowRoot: existing ? root : null, attachShadow };
  return { host: host as unknown as HTMLElement, root, attachShadow };
}

describe('isolated E4 loader visual', () => {
  it('mounts a single accessible inline monogram without image requests', () => {
    const { host, root, attachShadow } = fixture();
    mountLoaderVisual(host);
    expect(attachShadow).toHaveBeenCalledWith({ mode: 'open' });
    expect(root.innerHTML).toContain('viewBox="0 0 916 874"');
    expect(root.innerHTML).toContain('Loading');
    expect(root.innerHTML).toContain('prefers-reduced-motion:reduce');
    expect(root.innerHTML).toContain(':host([aria-hidden="true"]){opacity:0!important;visibility:hidden!important;pointer-events:none!important;}');
    expect(root.innerHTML).not.toContain('<img');
    expect(root.innerHTML).not.toContain('/manus-storage/');
  });

  it('does not replace or duplicate visuals when React effects run again', () => {
    const { host, root, attachShadow } = fixture(true);
    mountLoaderVisual(host);
    mountLoaderVisual(host);
    expect(attachShadow).not.toHaveBeenCalled();
    expect(root.innerHTML).toBe('<style></style>');
  });
});

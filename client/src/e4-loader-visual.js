// The approved E4 monogram is inline so loader rendering never depends on an image request.
// Shadow DOM keeps legacy hero image hooks and global page CSS away from these visuals.
export function mountLoaderVisual(host) {
  const root = host.shadowRoot || host.attachShadow({ mode: 'open' });
  if (root.childElementCount) return;
  root.innerHTML = `
    <style>
      :host{font-family:Montserrat,Arial,sans-serif;font-size:16px;line-height:1.5;color:#fff8ef;letter-spacing:0;}
      :host([aria-hidden="true"]){opacity:0!important;visibility:hidden!important;pointer-events:none!important;}
      :host(.is-active){visibility:visible!important;}
      *,*::before,*::after{box-sizing:border-box;letter-spacing:0;}
      .inner{display:grid;justify-items:center;gap:18px;width:160px;max-width:calc(100vw - 32px);margin:0;padding:0;}
      .mark{position:relative;display:grid;place-items:center;width:76px;height:76px;border:1px solid rgba(231,186,86,.2);border-radius:50%;background:transparent;}
      .mark::after{content:"";position:absolute;inset:-1px;border:2px solid transparent;border-top-color:#e7ba56;border-right-color:#e7ba56;border-radius:50%;animation:e4-loader-ring 1.1s linear infinite;}
      .mark svg{display:block;width:40px;height:39px;color:#e7ba56;overflow:visible;}
      .label{display:block;margin:0;padding:0;color:#fff8ef;font-family:Montserrat,Arial,sans-serif;font-size:12px;font-weight:800;line-height:18px;text-transform:uppercase;}
      .track{display:block;position:relative;width:120px;height:3px;overflow:hidden;background:rgba(255,248,239,.16);border:0;border-radius:0;}
      .track::after{content:"";display:block;width:45%;height:3px;background:#e7ba56;transform:translateX(-120%);animation:e4-page-loader-sweep .9s cubic-bezier(.23,1,.32,1) infinite;}
      @keyframes e4-loader-ring{to{transform:rotate(360deg);}}
      @keyframes e4-page-loader-sweep{to{transform:translateX(330%);}}
      @media (prefers-reduced-motion:reduce){.mark::after,.track::after{animation:none;}.track::after{transform:translateX(62%);}}
    </style>
    <div class="inner">
      <span class="mark" aria-hidden="true">
        <svg viewBox="0 0 916 874" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">
          <path d="M654.03 605.35L637.44 692.21H0L134.5 0H532.88L515.29 86.93H236.94L198.65 285.58H423.18L404.57 371.47H182.1L136.58 605.31H533.96L533.93 605.35H654.03Z" fill="currentColor"/>
          <path d="M916 605.31L898.27 691.96H814.47L814.43 692.21H682.92L699.51 605.31H916Z" fill="currentColor"/>
          <path d="M564.21 570.54H448.94L663.07 230.36H780.01L564.21 570.54Z" fill="currentColor"/>
          <path d="M654.03 605.35L637.44 692.21H406.49V625.1L418.69 605.69L418.93 605.31H533.96L533.93 605.35H654.03Z" fill="currentColor"/>
          <path d="M841.62 369.52L796.28 605.31L796.21 605.69L778.55 692.21L778.51 692.35L778.48 692.59L743.32 873.4H648.32L682.92 692.21L699.51 605.31L740.4 391.26L841.62 369.52Z" fill="currentColor"/>
        </svg>
      </span>
      <span class="label">Loading</span>
      <span class="track" aria-hidden="true"></span>
    </div>`;
}

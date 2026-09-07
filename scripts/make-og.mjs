import sharp from 'sharp';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#141827"/>
      <stop offset="100%" stop-color="#0a0c10"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.82" cy="0.15" r="0.6">
      <stop offset="0%" stop-color="#6c8cff" stop-opacity="0.5"/>
      <stop offset="100%" stop-color="#6c8cff" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="name" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#c3d0ff"/>
      <stop offset="100%" stop-color="#8aa4ff"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>

  <text x="90" y="250" font-family="Helvetica Neue, Helvetica, Arial, sans-serif"
        font-size="30" font-weight="600" letter-spacing="5" fill="#8aa4ff">
    SENIOR SOFTWARE ENGINEER
  </text>

  <text x="90" y="360" font-family="Helvetica Neue, Helvetica, Arial, sans-serif"
        font-size="92" font-weight="700" letter-spacing="-2" fill="url(#name)">
    Chan Siaw Wei
  </text>

  <text x="90" y="428" font-family="Helvetica Neue, Helvetica, Arial, sans-serif"
        font-size="34" font-weight="400" fill="#9aa4b5">
    PayPal · Singapore
  </text>

  <rect x="90" y="486" width="86" height="5" rx="2.5" fill="#6c8cff"/>

  <text x="90" y="548" font-family="Helvetica Neue, Helvetica, Arial, sans-serif"
        font-size="27" font-weight="400" fill="#6b7688">
    chan-portfolio.web.app
  </text>
</svg>`;

await sharp(Buffer.from(svg)).png({ quality: 90 }).toFile('public/og-image.png');
console.log('og-image.png written');

/** Orbit diagram using SVG logos from [SVGL](https://svgl.app/) (files in /public/integrations). */

const CX = 210;
const CY = 210;
const ORBIT_R = 152;
const TILE = 46;
const HALF = TILE / 2;

const INTEGRATIONS = [
  { src: '/integrations/microsoft-word.svg', label: 'Microsoft Word' },
  { src: '/integrations/pdf.svg', label: 'Adobe PDF' },
  { src: '/integrations/microsoft-onedrive.svg', label: 'Microsoft OneDrive' },
  { src: '/integrations/shopify.svg', label: 'Shopify' },
  { src: '/integrations/microsoft-sharepoint.svg', label: 'Microsoft SharePoint' },
  { src: '/integrations/youtube.svg', label: 'YouTube' },
  { src: '/integrations/microsoft-powerpoint.svg', label: 'Microsoft PowerPoint' },
  { src: '/integrations/drive.svg', label: 'Google Drive' },
  { src: '/integrations/microsoft-excel.svg', label: 'Microsoft Excel' },
  { src: '/integrations/slack.svg', label: 'Slack' },
] as const;

function polar(i: number, n: number, r: number) {
  const a = (-Math.PI / 2 + (i * 2 * Math.PI) / n) % (2 * Math.PI);
  return { x: CX + r * Math.cos(a), y: CY + r * Math.sin(a) };
}

function Tile({ x, y, label, src }: { x: number; y: number; label: string; src: string }) {
  return (
    <g transform={`translate(${x - HALF},${y - HALF})`}>
      <title>{label}</title>
      <rect width={TILE} height={TILE} rx={12} fill="#fff" stroke="#e2e8f0" strokeWidth={1} />
      <image
        href={src}
        x={7}
        y={7}
        width={32}
        height={32}
        preserveAspectRatio="xMidYMid meet"
      />
    </g>
  );
}

export function IntegrationHubDiagram() {
  return (
    <svg
      viewBox="0 0 420 420"
      className="mx-auto h-auto w-full max-w-md text-indigo-400/90"
      role="img"
      aria-label="Integrations arranged around nu:legal hub"
    >
      {/* Ripple rings */}
      <circle cx={CX} cy={CY} r={195} fill="none" stroke="#c7d2fe" strokeWidth="1" opacity="0.35" />
      <circle cx={CX} cy={CY} r={175} fill="#eef2ff" opacity="0.45" />
      <circle cx={CX} cy={CY} r={138} fill="#e0e7ff" opacity="0.35" />

      {/* Orbit */}
      <circle
        cx={CX}
        cy={CY}
        r={ORBIT_R}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="5 6"
        opacity="0.85"
      />

      {/* App tiles (SVGL) */}
      {INTEGRATIONS.map(({ src, label }, i) => {
        const { x, y } = polar(i, INTEGRATIONS.length, ORBIT_R);
        return <Tile key={src} x={x} y={y} label={label} src={src} />;
      })}

      {/* Center hub — company logo */}
      <g role="img" aria-label="nu:legal">
        <title>nu:legal</title>
        <circle cx={CX} cy={CY} r={54} fill="#fff" stroke="#e2e8f0" strokeWidth="1.5" />
        <circle cx={CX} cy={CY} r={44} fill="#f5f3ff" opacity="0.9" />
        <image
          href="/nulegal_favicon.svg"
          x={CX - 26}
          y={CY - 26}
          width={52}
          height={52}
          preserveAspectRatio="xMidYMid meet"
        />
      </g>
    </svg>
  );
}

export default function GrowthChart() {
  return (
    <section id="growth" className="growth">
      <div className="growth-inner">
        <svg
          className="growth-svg"
          viewBox="0 0 680 400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <marker
              id="arrowHead"
              viewBox="0 0 12 12"
              refX="3"
              refY="6"
              markerWidth="5"
              markerHeight="5"
              orient="auto"
            >
              <path d="M1,1 L11,6 L1,11 Z" fill="#e60012" />
            </marker>
            <linearGradient id="lineGradLk" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="#0a0a0a" />
              <stop offset="60%" stopColor="#0a0a0a" />
              <stop offset="100%" stopColor="#e60012" />
            </linearGradient>
            <linearGradient id="areaGradLk" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e60012" stopOpacity="0.16" />
              <stop offset="100%" stopColor="#e60012" stopOpacity="0" />
            </linearGradient>
          </defs>

          <g
            className="growth-word"
            fontFamily="Arial, Helvetica, sans-serif"
            fontWeight="800"
            fontSize="52"
            fill="#0a0a0a"
            letterSpacing="2"
          >
            <text className="gl gl-1" x="150" y="80">
              L
            </text>
            <text className="gl gl-2" x="188" y="80">
              O
            </text>
            <text className="gl gl-3" x="232" y="80">
              C
            </text>
            <text className="gl gl-4" x="273" y="80">
              K
            </text>
            <text className="gl gl-5" x="314" y="80">
              G
            </text>
            <text className="gl gl-6" x="358" y="80">
              I
            </text>
            <text className="gl gl-7" x="378" y="80" fill="#e60012">
              N
            </text>
          </g>

          <g opacity="0.07">
            <line
              x1="60"
              y1="180"
              x2="620"
              y2="180"
              stroke="#0a0a0a"
              strokeWidth="1"
            />
            <line
              x1="60"
              y1="250"
              x2="620"
              y2="250"
              stroke="#0a0a0a"
              strokeWidth="1"
            />
            <line
              x1="60"
              y1="320"
              x2="620"
              y2="320"
              stroke="#0a0a0a"
              strokeWidth="1"
            />
          </g>

          <path
            className="growth-area"
            d="M70,370 L70,340 L160,305 L250,320 L340,250 L430,272 L520,190 L580,148 L580,370 Z"
            fill="url(#areaGradLk)"
          />

          <polyline
            className="growth-line"
            points="70,340 160,305 250,320 340,250 430,272 520,190 578,150"
            fill="none"
            stroke="url(#lineGradLk)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            markerEnd="url(#arrowHead)"
          />

          <circle
            className="growth-dot growth-dot-1"
            cx="160"
            cy="305"
            r="6"
            fill="#0a0a0a"
          />
          <circle
            className="growth-dot growth-dot-2"
            cx="340"
            cy="250"
            r="6"
            fill="#0a0a0a"
          />
          <circle
            className="growth-dot growth-dot-3"
            cx="520"
            cy="190"
            r="6"
            fill="#e60012"
          />
        </svg>
      </div>
    </section>
  );
}

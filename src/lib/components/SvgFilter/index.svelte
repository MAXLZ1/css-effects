<style lang="less">
  .hidden {
    display: none;
  }
</style>

<svg class="hidden">
  <defs>
    <filter id="filter-1">
      <feTurbulence type="fractalNoise" baseFrequency="0" numOctaves="1" result="warp"></feTurbulence>
      <feOffset result="warpOffset"></feOffset>
      <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="30" in="SourceGraphic" in2="warpOffset"></feDisplacementMap>
    </filter>
    <filter id="filter-2">
      <feTurbulence type="fractalNoise" baseFrequency="0.15 0.02" numOctaves="3" result="warp"></feTurbulence>
      <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="0" in="SourceGraphic" in2="warp"></feDisplacementMap>
    </filter>
    <filter id="filter-3">
      <feTurbulence type="fractalNoise" baseFrequency="0" numOctaves="5" result="warp"></feTurbulence>
      <feOffset dx="-90" result="warpOffset"></feOffset>
      <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="35" in="SourceGraphic" in2="warpOffset"></feDisplacementMap>
    </filter>
    <filter id="filter-4">
      <feTurbulence type="fractalNoise" baseFrequency="0.01 0.7" numOctaves="5" result="warp"></feTurbulence>
      <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="0" in="SourceGraphic" in2="warp"></feDisplacementMap>
    </filter>
    <filter id="filter-5">
      <feTurbulence type="fractalNoise" baseFrequency="1" numOctaves="5" result="warp"></feTurbulence>
      <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="90" in="SourceGraphic" in2="warp"></feDisplacementMap>
    </filter>
  </defs>
</svg>

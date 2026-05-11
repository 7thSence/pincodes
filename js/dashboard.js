/* ============================================
   GSK Agent Hub — Shared Dashboard Logic
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  // Staggered entrance animations for dashboard tiles
  const tiles = document.querySelectorAll('.dashboard-tile');
  tiles.forEach((tile, i) => {
    tile.style.animationDelay = `${i * 0.08}s`;
  });

  // Add ripple effect on tile click
  document.querySelectorAll('.dashboard-tile').forEach(tile => {
    tile.addEventListener('click', function (e) {
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(139, 92, 246, 0.15);
        border-radius: 50%;
        transform: scale(0);
        animation: rippleEffect 0.6s ease-out;
        pointer-events: none;
      `;
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });

  // Inject ripple keyframes
  const style = document.createElement('style');
  style.textContent = `
    @keyframes rippleEffect {
      to {
        transform: scale(2.5);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
});

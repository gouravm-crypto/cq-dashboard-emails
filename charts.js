function initCharts() {
  const font = { family: "'Segoe UI',Arial,sans-serif" };
  const tooltip = {
    backgroundColor: '#1c2a3a',
    titleFont: { ...font, size: 12 },
    bodyFont: { ...font, size: 11 },
    padding: 10,
    cornerRadius: 8
  };

  // ── 1. CQ Score vs Target ──
  new Chart(document.getElementById('scoreChart'), {
    type: 'bar',
    data: {
      labels: ['Ansari_S', 'Jinal_K', 'Ghouse_M', 'Preethi_V', 'Surbhi_A'],
      datasets: [
        {
          label: 'CQ Score',
          data: [90, 88, 87, 87, 76],
          backgroundColor: ['#c8a846','#3a9e50','#3a9e50','#3a9e50','#e07030'],
          borderRadius: 6,
          barPercentage: 0.55
        },
        {
          label: 'Team Target (95%)',
          data: [95,95,95,95,95],
          type: 'line',
          borderColor: '#dc2626',
          borderWidth: 2,
          borderDash: [6,4],
          pointRadius: 0,
          fill: false
        },
        {
          label: 'Individual Target (85%)',
          data: [85,85,85,85,85],
          type: 'line',
          borderColor: '#f59e0b',
          borderWidth: 1.5,
          borderDash: [3,3],
          pointRadius: 0,
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: { duration: 1200, easing: 'easeOutQuart' },
      plugins: {
        tooltip,
        legend: { display: true, labels: { font: { ...font, size: 11 }, boxWidth: 12, padding: 10 } }
      },
      scales: {
        y: { min: 60, max: 100, ticks: { callback: v => v + '%', font: { ...font, size: 11 } }, grid: { color: 'rgba(0,0,0,.06)' } },
        x: { ticks: { font: { ...font, size: 11 } }, grid: { display: false } }
      }
    },
    plugins: [{
      id: 'barLabels',
      afterDatasetsDraw(chart) {
        const ctx = chart.ctx;
        const meta = chart.getDatasetMeta(0);
        ctx.save();
        meta.data.forEach((bar, i) => {
          const val = chart.data.datasets[0].data[i];
          ctx.fillStyle = '#fff';
          ctx.font = 'bold 11px Segoe UI,Arial,sans-serif';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'bottom';
          ctx.fillText(val + '%', bar.x, bar.y + bar.height * 0.85);
        });
        ctx.restore();
      }
    }]
  });

  // ── 2. Error Distribution Doughnut ──
  new Chart(document.getElementById('errorChart'), {
    type: 'doughnut',
    data: {
      labels: ['Solution & Rec.','Soft Skills','Probing','Tagging','Follow Up'],
      datasets: [{
        data: [16,11,12,8,5],
        backgroundColor: ['#dc2626','#ea580c','#2563eb','#7c3aed','#16a34a'],
        borderWidth: 2,
        borderColor: '#fff',
        hoverOffset: 8
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: { animateRotate: true, animateScale: true, duration: 1200, easing: 'easeOutQuart' },
      plugins: {
        tooltip,
        legend: { display: true, position: 'right', labels: { font: { ...font, size: 11 }, boxWidth: 12, padding: 10 } }
      },
      cutout: '55%'
    },
    plugins: [{
      id: 'doughnutLabels',
      afterDatasetsDraw(chart) {
        const ctx = chart.ctx;
        const meta = chart.getDatasetMeta(0);
        const total = chart.data.datasets[0].data.reduce((a,b)=>a+b,0);
        ctx.save();
        meta.data.forEach((arc, i) => {
          const val = chart.data.datasets[0].data[i];
          const pct = Math.round((val/total)*100);
          if (pct < 8) return;
          const angle = (arc.startAngle + arc.endAngle) / 2;
          const r = (arc.innerRadius + arc.outerRadius) / 2;
          const x = arc.x + r * Math.cos(angle);
          const y = arc.y + r * Math.sin(angle);
          ctx.fillStyle = '#fff';
          ctx.font = 'bold 11px Segoe UI,Arial,sans-serif';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(pct + '%', x, y);
        });
        ctx.restore();
      }
    }]
  });

  // ── 3. Errors per Agent ──
  new Chart(document.getElementById('agentErrorChart'), {
    type: 'bar',
    data: {
      labels: ['Surbhi_A','Preethi_V','Jinal_K','Ghouse_M','Ansari_S'],
      datasets: [{
        label: 'Total Errors',
        data: [18,10,9,8,7],
        backgroundColor: ['#dc2626','#ea580c','#ea580c','#2563eb','#2563eb'],
        borderRadius: 6,
        barPercentage: 0.55
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: 'y',
      animation: { duration: 1200, easing: 'easeOutQuart' },
      plugins: { tooltip, legend: { display: false } },
      scales: {
        x: { ticks: { font: { ...font, size: 11 } }, grid: { color: 'rgba(0,0,0,.06)' } },
        y: { ticks: { font: { ...font, size: 11 } }, grid: { display: false } }
      }
    },
    plugins: [{
      id: 'hbarLabels',
      afterDatasetsDraw(chart) {
        const ctx = chart.ctx;
        const meta = chart.getDatasetMeta(0);
        ctx.save();
        meta.data.forEach((bar, i) => {
          const val = chart.data.datasets[0].data[i];
          ctx.fillStyle = '#fff';
          ctx.font = 'bold 11px Segoe UI,Arial,sans-serif';
          ctx.textAlign = 'right';
          ctx.textBaseline = 'middle';
          ctx.fillText(val, bar.x - 6, bar.y);
        });
        ctx.restore();
      }
    }]
  });

  // ── 4. Parameter Radar ──
  new Chart(document.getElementById('paramRadar'), {
    type: 'radar',
    data: {
      labels: ['Solution & Rec.','Soft Skills','Probing','Tagging','Follow Up'],
      datasets: [{
        label: 'Error Count',
        data: [16,11,12,8,5],
        backgroundColor: 'rgba(124,58,237,.15)',
        borderColor: '#a855f7',
        borderWidth: 2,
        pointBackgroundColor: '#a855f7',
        pointRadius: 5,
        pointHoverRadius: 7
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: { duration: 1400, easing: 'easeOutQuart' },
      plugins: { tooltip, legend: { display: false } },
      scales: {
        r: {
          ticks: { stepSize: 4, font: { ...font, size: 10 }, backdropColor: 'transparent' },
          pointLabels: { font: { ...font, size: 11 } },
          grid: { color: 'rgba(0,0,0,.1)' },
          angleLines: { color: 'rgba(0,0,0,.1)' }
        }
      }
    },
    plugins: [{
      id: 'radarLabels',
      afterDatasetsDraw(chart) {
        const ctx = chart.ctx;
        const meta = chart.getDatasetMeta(0);
        const data = chart.data.datasets[0].data;
        ctx.save();
        meta.data.forEach((point, i) => {
          ctx.fillStyle = '#1c2a3a';
          ctx.font = 'bold 11px Segoe UI,Arial,sans-serif';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(data[i], point.x, point.y - 10);
        });
        ctx.restore();
      }
    }]
  });
}

document.addEventListener('DOMContentLoaded', initCharts);

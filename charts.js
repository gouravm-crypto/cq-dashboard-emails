function initCharts() {
  const base = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {display: false},
      tooltip: {
        backgroundColor: '#1c2a3a',
        titleFont: {family: "'Segoe UI',Arial,sans-serif", size: 12},
        bodyFont: {family: "'Segoe UI',Arial,sans-serif", size: 11},
        padding: 10,
        cornerRadius: 8
      }
    }
  };

  // CQ Score vs Target
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
          label: 'Target 95%',
          data: [95, 95, 95, 95, 95],
          type: 'line',
          borderColor: '#dc2626',
          borderWidth: 2,
          borderDash: [6, 4],
          pointRadius: 0,
          fill: false
        }
      ]
    },
    options: {
      ...base,
      plugins: {...base.plugins, legend: {display: true, labels: {font: {family:"'Segoe UI',Arial,sans-serif", size:11}, boxWidth:12, padding:10}}},
      scales: {
        y: {min: 60, max: 100, ticks: {callback: v => v + '%', font: {family:"'Segoe UI',Arial,sans-serif", size:11}}, grid: {color:'rgba(0,0,0,.06)'}},
        x: {ticks: {font: {family:"'Segoe UI',Arial,sans-serif", size:11}}, grid: {display:false}}
      }
    }
  });

  // Error Distribution Doughnut
  new Chart(document.getElementById('errorChart'), {
    type: 'doughnut',
    data: {
      labels: ['Solution & Rec.', 'Soft Skills', 'Probing', 'Tagging', 'Follow Up'],
      datasets: [{
        data: [16, 11, 12, 8, 5],
        backgroundColor: ['#dc2626','#ea580c','#2563eb','#7c3aed','#16a34a'],
        borderWidth: 0,
        hoverOffset: 8
      }]
    },
    options: {
      ...base,
      plugins: {
        ...base.plugins,
        legend: {display: true, position: 'right', labels: {font: {family:"'Segoe UI',Arial,sans-serif", size:11}, boxWidth:12, padding:10}}
      },
      cutout: '60%'
    }
  });

  // Errors per Agent (horizontal bar)
  new Chart(document.getElementById('agentErrorChart'), {
    type: 'bar',
    data: {
      labels: ['Surbhi_A', 'Preethi_V', 'Jinal_K', 'Ghouse_M', 'Ansari_S'],
      datasets: [{
        label: 'Errors',
        data: [18, 10, 9, 8, 7],
        backgroundColor: ['#dc2626','#ea580c','#ea580c','#2563eb','#2563eb'],
        borderRadius: 6,
        barPercentage: 0.55
      }]
    },
    options: {
      ...base,
      indexAxis: 'y',
      scales: {
        x: {ticks: {font: {family:"'Segoe UI',Arial,sans-serif", size:11}}, grid: {color:'rgba(0,0,0,.06)'}},
        y: {ticks: {font: {family:"'Segoe UI',Arial,sans-serif", size:11}}, grid: {display:false}}
      }
    }
  });

  // Parameter Radar
  new Chart(document.getElementById('paramRadar'), {
    type: 'radar',
    data: {
      labels: ['Solution & Rec.', 'Soft Skills', 'Probing', 'Tagging', 'Follow Up'],
      datasets: [{
        label: 'Error Count',
        data: [16, 11, 12, 8, 5],
        backgroundColor: 'rgba(200,168,70,.15)',
        borderColor: '#c8a846',
        borderWidth: 2,
        pointBackgroundColor: '#c8a846',
        pointRadius: 4
      }]
    },
    options: {
      ...base,
      scales: {
        r: {
          ticks: {stepSize: 4, font: {family:"'Segoe UI',Arial,sans-serif", size:10}},
          pointLabels: {font: {family:"'Segoe UI',Arial,sans-serif", size:11}},
          grid: {color:'rgba(0,0,0,.1)'}
        }
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', initCharts);

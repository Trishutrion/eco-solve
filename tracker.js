const metrics = [
      { key: "electricity", label: "Electricity Usage (kWh)", color: "orange" },
      { key: "water", label: "Water Consumption (liters)", color: "blue" },
      { key: "carMileage", label: "Car Mileage (km)", color: "purple" },
      { key: "publicTransport", label: "Public Transport Trips", color: "cyan" },
      { key: "waste", label: "Waste Generation (kg)", color: "green" },
      { key: "plastic", label: "Plastic Usage (count)", color: "red" },
      { key: "meat", label: "Meat Consumption (meals)", color: "brown" },
      { key: "paper", label: "Paper Usage (sheets)", color: "gray" },
      { key: "heatingCooling", label: "Heating/Cooling Usage (hours)", color: "magenta" },
      { key: "foodWaste", label: "Food Waste (kg)", color: "teal" }
    ];

    let userId = localStorage.getItem('userId');
    if (!userId) {
      userId = 'user-' + Math.random().toString(36).substr(2, 9);
      localStorage.setItem('userId', userId);
    }
    document.getElementById('userId').textContent = userId;

    function loadUserData() {
      const raw = localStorage.getItem(userId);
      return raw ? JSON.parse(raw) : {};
    }

    function saveUserData(data) {
      localStorage.setItem(userId, JSON.stringify(data));
    }

    function getMostRecentValue(data, metric) {
      if (!data[metric] || data[metric].length === 0) return '';
      return data[metric].sort((a, b) => b.timestamp - a.timestamp)[0].value;
    }

    function startSurvey() {
      const data = loadUserData();
      metrics.forEach(m => {
        const input = document.querySelector(`input[name="${m.key}"]`);
        if (input) input.value = getMostRecentValue(data, m.key);
      });
      document.getElementById('survey').style.display = 'block';
      document.getElementById('updateSection').style.display = 'none';
      document.getElementById('goalSection').style.display = 'none';
    }

    document.getElementById('surveyForm').addEventListener('submit', e => {
      e.preventDefault();
      const form = new FormData(e.target);
      const data = loadUserData();
      const now = Date.now();

      for (const [key, val] of form.entries()) {
        const v = parseFloat(val);
        if (isNaN(v)) continue; // skip empty fields

        const latest = getMostRecentValue(data, key);
        if (latest === '' || latest !== v) { 
          // Only push if value changed
          if (!data[key]) data[key] = [];
          data[key].push({ value: v, timestamp: now });
        }
      }

      saveUserData(data);
      document.getElementById('survey').style.display = 'none';
      updateCharts();
    });

    function showUpdate() {
      document.getElementById('updateSection').style.display = 'block';
      document.getElementById('survey').style.display = 'none';
      document.getElementById('goalSection').style.display = 'none';
      document.getElementById('updateForm').style.display = 'none';
      document.getElementById('customDataForm').style.display = 'none';
    }

    document.getElementById('metricSelect').addEventListener('change', e => {
      const metric = e.target.value;
      if (!metric) return document.getElementById('updateForm').style.display = 'none';
      const data = loadUserData();
      document.getElementById('updateLabel').textContent = `Update ${metrics.find(m => m.key === metric).label}:`;
      document.getElementById('updateInput').value = getMostRecentValue(data, metric);
      document.getElementById('updateForm').style.display = 'block';
    });

    document.getElementById('updateForm').addEventListener('submit', e => {
      e.preventDefault();
      const metric = document.getElementById('metricSelect').value;
      const value = parseFloat(document.getElementById('updateInput').value);
      if (isNaN(value)) return alert('Invalid number.');
      const data = loadUserData();
      if (!data[metric]) data[metric] = [];
      data[metric].push({ value: value, timestamp: Date.now() });
      saveUserData(data);
      updateCharts();
      alert(`${metrics.find(m => m.key === metric).label} updated.`);
      document.getElementById('updateForm').style.display = 'none';
      document.getElementById('metricSelect').value = '';
    });

    function showGoalForm() {
      const data = loadUserData();
      const goals = data.goals || {};
      metrics.forEach(m => {
        const input = document.getElementById('goal' + capitalize(m.key));
        if (input) input.value = goals[m.key] || '';
      });
      document.getElementById('goalSection').style.display = 'block';
      document.getElementById('survey').style.display = 'none';
      document.getElementById('updateSection').style.display = 'none';
    }

    document.getElementById('goalForm').addEventListener('submit', e => {
      e.preventDefault();
      const data = loadUserData();
      data.goals = {};
      metrics.forEach(m => {
        const val = parseFloat(document.getElementById('goal' + capitalize(m.key)).value);
        if (!isNaN(val)) data.goals[m.key] = val;
      });
      saveUserData(data);
      alert('Goals saved.');
      updateCharts();
    });

    function clearData() {
      localStorage.removeItem(userId);
      alert('Data cleared.');
      updateCharts();
      document.getElementById('updateSection').style.display = 'none';
      document.getElementById('survey').style.display = 'none';
      document.getElementById('goalSection').style.display = 'none';
      document.getElementById('updateForm').style.display = 'none';
      document.getElementById('customDataForm').style.display = 'none';
      document.getElementById('options').value = '';
    }

    function capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const ctx = document.getElementById('combinedChart').getContext('2d');

    // Dynamically create datasets for metrics and their goals
    const datasets = [];
    metrics.forEach(m => {
      datasets.push({
        label: m.label,
        data: [],
        borderColor: m.color,
        borderWidth: 2,
        fill: false,
        spanGaps: true // <--- This draws lines between actual updates
      });
      datasets.push({
        label: `Goal (${m.label})`,
        data: [],
        borderColor: m.color,
        borderDash: [5, 5],
        borderWidth: 1,
        fill: false,
        pointRadius: 0,
        hidden: true
      });
    });

    const combinedChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [],
        datasets: datasets
      },
      options: {
  plugins: {
    legend: {
      labels: {
        generateLabels: function(chart) {
          return chart.data.datasets
            .map((ds, i) => ({
              text: ds.label,
              fillStyle: ds.backgroundColor,
              strokeStyle: ds.borderColor,
              lineWidth: ds.borderWidth,
              hidden: ds.hidden,
              index: i
            }))
            .filter(ds => !ds.hidden); // Only show visible datasets
        }
      }
    }
  }
}

    });

    function updateCharts() {
      const data = loadUserData();
      const selected = document.getElementById('seriesSelect').value;

      // Gather all entries for chosen metric(s)
      let entries = [];
      if (selected === 'all') {
        metrics.forEach(m => {
          (data[m.key] || []).forEach(e => entries.push({ ...e, metric: m.key }));
        });
      } else {
        (data[selected] || []).forEach(e => entries.push({ ...e, metric: selected }));
      }

      // Sort all entries by timestamp ascending
      entries.sort((a, b) => a.timestamp - b.timestamp);

      // Create a unified timeline of timestamps (sorted, unique)
      const uniqueTimestamps = [...new Set(entries.map(e => e.timestamp))].sort();

      // Labels are dates of unique timestamps
      const labels = uniqueTimestamps.map(ts => new Date(ts).toLocaleString());

      combinedChart.data.labels = labels;

      // For each metric, build data array aligned with labels
      metrics.forEach((m, idx) => {
        if (selected !== 'all' && selected !== m.key) {
          // Hide datasets if metric not selected
          combinedChart.data.datasets[idx * 2].hidden = true;
          combinedChart.data.datasets[idx * 2 + 1].hidden = true;
          combinedChart.data.datasets[idx * 2].data = [];
          combinedChart.data.datasets[idx * 2 + 1].data = [];
          return;
        }

        combinedChart.data.datasets[idx * 2].hidden = false;
        combinedChart.data.datasets[idx * 2 + 1].hidden = false;

        // Build array of values at each timestamp or null
        const metricData = [];
        let lastValue = null;
        const sortedMetricData = (data[m.key] || []).sort((a, b) => a.timestamp - b.timestamp);
        uniqueTimestamps.forEach(ts => {
          const exactEntry = sortedMetricData.find(x => x.timestamp === ts);
          if (exactEntry) {
            metricData.push(exactEntry.value);
          } else {
            metricData.push(null);
          }
        });
        combinedChart.data.datasets[idx * 2].data = metricData;

        // Goals line
        const goalVal = (data.goals && data.goals[m.key]) || null;
        if (goalVal !== null) {
          combinedChart.data.datasets[idx * 2 + 1].data = Array(uniqueTimestamps.length).fill(goalVal);
          combinedChart.data.datasets[idx * 2 + 1].hidden = false;
        } else {
          combinedChart.data.datasets[idx * 2 + 1].data = [];
          combinedChart.data.datasets[idx * 2 + 1].hidden = true;
        }
      });

      combinedChart.update();
    }

    document.getElementById('seriesSelect').addEventListener('change', updateCharts);

    function showCustomDataForm() {
  document.getElementById('customDataForm').style.display = 'block';
}

document.getElementById('customDataForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const metric = document.getElementById('customMetric').value;
  const date = document.getElementById('customDate').value;
  const time = document.getElementById('customTime').value;
  const value = parseFloat(document.getElementById('customValue').value);

  if (!metric || !date || !time || isNaN(value)) {
    alert("Please fill in all fields correctly.");
    return;
  }

  const timestamp = new Date(`${date}T${time}`).getTime();
  const data = loadUserData();
  if (!data[metric]) data[metric] = [];

  data[metric].push({ value: value, timestamp: timestamp });
  saveUserData(data);
  updateCharts();

  alert(`${metrics.find(m => m.key === metric).label} entry added.`);

  // Optionally reset and hide form
  document.getElementById('customDataForm').reset();
  document.getElementById('customDataForm').style.display = 'none';
});

  function handleSurveyAction(select) {
    const action = select.value;

    if (action === "enter") {
      startSurvey();
    } else if (action === "update") {
      showUpdate();
    } else if (action === "clear") {
      if (confirm("Are you sure you want to clear the survey data?")) {
        clearData();
      }
    } else if (action === "goal") {
      showGoalForm();
    }
  }

    updateCharts();
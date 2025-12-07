---
layout: default
title: Airflow Calculator | BonnieByte PC
---
<section class="section section-airflow">
  <div class="container airflow-container">
    <header class="section-header airflow-header">
      <h1>PC Airflow Calculator</h1>
      <p>
        Visualise how air moves through your case, balance intake vs exhaust,
        and see pressure estimates using real-world fan and case presets.
      </p>
    </header>
    <!-- Mode Toggle -->
    <div class="airflow-mode-toggle" role="tablist" aria-label="Airflow calculator mode">
      <button class="airflow-mode-btn active" data-mode="beginner" role="tab" aria-selected="true">
        Beginner
      </button>
      <button class="airflow-mode-btn" data-mode="advanced" role="tab" aria-selected="false">
        Advanced
      </button>
    </div>
    <div class="airflow-layout">
      <!-- Controls Panel -->
      <div class="airflow-controls">
        <!-- Beginner Panel -->
        <div class="airflow-panel airflow-panel-beginner active" data-panel="beginner">
          <h2>Beginner Settings</h2>
          <div class="af-field">
            <label for="af-case-preset">Case preset</label>
            <select id="af-case-preset">
              <option value="generic">Generic mid-tower</option>
              <option value="nzxt-h510">NZXT H510 / H5 Flow</option>
              <option value="lancool-215">Lian Li Lancool 215</option>
              <option value="meshify-c">Fractal Meshify C</option>
              <option value="bb-custom">Custom / Other</option>
            </select>
            <p class="af-help">
              Case presets tweak internal restriction and suggested layouts.
            </p>
          </div>
          <div class="af-field">
            <label for="af-fan-preset">Fan preset</label>
            <select id="af-fan-preset">
              <option value="bb-nw120">BonnieByte Northern Wind 120 ARGB (est.)</option>
              <option value="noctua-nf12">Noctua NF-F12</option>
              <option value="p12">Arctic P12</option>
              <option value="generic-50">Generic 120mm (50 CFM)</option>
              <option value="custom">Custom (set in Advanced)</option>
            </select>
          </div>
          <div class="af-field af-field-inline">
            <div>
              <label for="af-intake-count">Intake fans</label>
              <input id="af-intake-count" type="number" min="0" max="9" value="3">
            </div>
            <div>
              <label for="af-exhaust-count">Exhaust fans</label>
              <input id="af-exhaust-count" type="number" min="0" max="9" value="2">
            </div>
          </div>
          <div class="af-field">
            <label for="af-rad-position">Radiator</label>
            <select id="af-rad-position">
              <option value="none">No radiator</option>
              <option value="front-240">Front 240mm</option>
              <option value="front-360">Front 360mm</option>
              <option value="top-240">Top 240mm</option>
              <option value="top-360">Top 360mm</option>
            </select>
            <p class="af-help">
              Radiators add restriction and change effective airflow.
            </p>
          </div>
          <div class="af-field">
            <label for="af-room-temp">Room temperature (°C)</label>
            <input id="af-room-temp" type="number" min="5" max="40" value="22">
          </div>
        </div>
        <!-- Advanced Panel -->
        <div class="airflow-panel airflow-panel-advanced" data-panel="advanced">
          <h2>Advanced Settings</h2>
          <div class="af-field">
            <label for="af-advanced-cfm">Fan airflow (CFM per fan)</label>
            <input id="af-advanced-cfm" type="number" min="10" max="120" value="60">
            <p class="af-help">
              Use manufacturer spec (e.g. 58–70 CFM for many 120mm performance fans).
            </p>
          </div>
          <div class="af-field">
            <label for="af-static-pressure">Static pressure (mm H₂O)</label>
            <input id="af-static-pressure" type="number" min="0.5" max="4.0" step="0.1" value="1.8">
          </div>
          <div class="af-field">
            <label for="af-filter-restriction">Dust filter restriction</label>
            <select id="af-filter-restriction">
              <option value="low">Low (mesh front)</option>
              <option value="medium" selected>Medium (fine mesh / removable filter)</option>
              <option value="high">High (solid front / heavy filter)</option>
            </select>
          </div>
          <div class="af-field">
            <label for="af-case-restriction">Case restriction</label>
            <select id="af-case-restriction">
              <option value="open">Open (mesh front, open top)</option>
              <option value="balanced" selected>Balanced (partial mesh, some solid)</option>
              <option value="tight">Tight (solid front, limited vents)</option>
            </select>
          </div>
          <div class="af-field af-field-inline">
            <div>
              <label for="af-adv-intake">Intake fans</label>
              <input id="af-adv-intake" type="number" min="0" max="9" value="3">
            </div>
            <div>
              <label for="af-adv-exhaust">Exhaust fans</label>
              <input id="af-adv-exhaust" type="number" min="0" max="9" value="2">
            </div>
          </div>
        </div>
        <button id="af-recalculate" class="button button-secondary af-recalc-btn">
          Recalculate airflow
        </button>
        <div class="af-summary">
          <h3>Summary</h3>
          <p><strong>Intake airflow:</strong> <span id="af-intake-cfm">–</span> CFM</p>
          <p><strong>Exhaust airflow:</strong> <span id="af-exhaust-cfm">–</span> CFM</p>
          <p><strong>Estimated pressure:</strong> <span id="af-pressure-label">–</span></p>
          <p><strong>Suggestion:</strong> <span id="af-suggestion-text">Adjust settings to see recommendations.</span></p>
        </div>
      </div>
      <!-- Visual Panel -->
      <div class="airflow-visual">
        <h2>Airflow Visualisation</h2>
        <div class="af-case-wrapper">
          <div class="af-case">
            <div class="af-case-front af-zone">
              <div class="af-fan-stack af-fans-intake"></div>
            </div>
            <div class="af-case-top af-zone">
              <div class="af-fan-stack af-fans-top"></div>
            </div>
            <div class="af-case-back af-zone">
              <div class="af-fan-stack af-fans-exhaust"></div>
            </div>
            <div class="af-case-bottom af-zone">
              <div class="af-fan-stack af-fans-bottom"></div>
            </div>
            <div class="af-flow-layer">
              <div class="af-flow-line af-flow-intake"></div>
              <div class="af-flow-line af-flow-exhaust"></div>
            </div>
            <div class="af-case-centre">
              <div class="af-pressure-indicator">
                <span id="af-pressure-pill">Neutral</span>
              </div>
              <p class="af-case-note">
                Colours and flow lines represent approximate airflow and pressure.
              </p>
            </div>
          </div>
        </div>
        <div class="af-legend">
          <span class="af-legend-item">
            <span class="af-legend-swatch af-sw-intake"></span> Intake airflow
          </span>
          <span class="af-legend-item">
            <span class="af-legend-swatch af-sw-exhaust"></span> Exhaust airflow
          </span>
          <span class="af-legend-item">
            <span class="af-legend-swatch af-sw-positive"></span> Positive pressure
          </span>
          <span class="af-legend-item">
            <span class="af-legend-swatch af-sw-negative"></span> Negative pressure
          </span>
        </div>
      </div>
    </div>
    <footer class="airflow-footer-note">
      <p>
        This tool uses simplified estimates based on typical 120mm fan performance and case restriction.
        It’s designed for planning and education, not lab-grade CFD. Always test temps in your own build.
      </p>
    </footer>
  </div>
</section>

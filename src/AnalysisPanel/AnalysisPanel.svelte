<script>
  import { fly } from "svelte/transition";
  import News from "./News.svelte";
  import Statistics from "./Statistics.svelte";
  import Contracts from "./Contracts.svelte";
  import TotalPropositions from "./TotalPropositions.svelte";
</script>

<style>
  .analysis-panel {
    flex: 1;
    background-color: #ffffff69;
    display: flex;
    flex-direction: column;
  }
  .news-wrapper,
  .contracts-wrapper {
    flex: 0.3;
    display: flex;
    max-height: 400px;
    overflow: auto;
    margin-right: 20px;
  }
  .statistics-wrapper, .total-propositions-wrapper {
    flex: 0.7;
    display: flex;
    max-height: 400px;
  }
  .top-data,
  .bottom-data {
    display: flex;
    flex: 1;
  }
</style>

<div class="paper analysis-panel" in:fly={{ x: 100 }}>
  <div class="top-data">
    <div class="news-wrapper">
      <News />
    </div>
    <div class="statistics-wrapper">
      <Statistics />
    </div>
  </div>
  <div class="bottom-data">
    <div class="contracts-wrapper">
      <Contracts />
    </div>
    <div class="total-propositions-wrapper">
      <TotalPropositions />
    </div>
  </div>
</div>

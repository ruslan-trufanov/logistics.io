<script>
  import { fly } from "svelte/transition";

  import DiscussionsIcon from "./DiscussionsIcon.svelte";
  import PositionsIcon from "./PositionsIcon.svelte";
  import DashboardIcon from "./DashboardIcon.svelte";
  import ContractsIcon from "./ContractsIcon.svelte";
  import SettingsIcon from "./SettingsIcon.svelte";
  import NewsIcon from "./NewsIcon.svelte";

  import LogOutIcon from "./LogOutIcon.svelte";
</script>

<style>
  .sideBar {
    max-width: 17%;
    flex-basis: 17%;
    flex-direction: column;
    display: flex;
    padding: 0;
  }
  .logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 250px;
    flex-direction: column;
    padding: 24px 16px;
  }
  .logo-container img {
    border-radius: 50%;
  }
  .full-name-container {
    padding: 20px 10px;
    text-align: center;
  }
  .full-name-divider {
    width: 100%;
    height: 2px;
    background-color: #009983;
    margin-top: 10px;
  }
  .position {
    font-size: 13px;
    color: #ccc;
  }
  .menu {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 24px 0;
  }
  .menu-item {
    padding: 12px;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .menu-item:hover {
    background-color: #e4dfdf78;
  }
  .menu-item-text {
    margin-left: 20px;
  }
  .action-buttons {
    padding: 10px
  }
</style>

<div class="paper sideBar" in:fly={{ x: -100 }}>
  <div class="logo-container">
    <img src="/images/test-logo.png" alt="logo" />
    <div class="full-name-container">
      <div class="full-name">Andrey Lomakin</div>
      <div class="position">(Trader)</div>
      <div class="full-name-divider" />
    </div>
  </div>
  <div class="menu">
    <div class="menu-item">
      <DashboardIcon />
      <span class="menu-item-text">Dashboard</span>
    </div>
    <div class="menu-item">
      <PositionsIcon />
      <span class="menu-item-text">Positions</span>
    </div>
    <div class="menu-item">
      <DiscussionsIcon />
      <span class="menu-item-text">Discussions</span>
    </div>
    <div class="menu-item">
      <NewsIcon />
      <span class="menu-item-text">News</span>
    </div>
    <div class="menu-item">
      <ContractsIcon />
      <span class="menu-item-text">Contracts</span>
    </div>
    <div class="menu-item">
      <SettingsIcon />
      <span class="menu-item-text">Settings</span>
    </div>
  </div>

  <div class="action-buttons">
    <LogOutIcon />
  </div>
</div>

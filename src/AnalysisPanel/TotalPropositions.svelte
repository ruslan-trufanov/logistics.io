<style>
  .container {
    display: flex;
    overflow: auto;
    flex: 1;
    flex-direction: column;
  }
  .card-item-03 {
    flex: 0.3;
    padding: 10px 16px;
  }
  .card-item-04 {
    flex: 0.4;
    padding: 10px 16px;
  }
  .card-item-02 {
    flex: 0.2;
    padding: 10px 16px;
  }
  .card-list {
    display: flex;
    justify-content: space-between;
    flex: 0.4
  }
  .bottom-card-list {
    flex: 0.6;
  }
</style>

<div class="container">
  <div class="card-list">
    <div class="paper card-item-03">
      <div class="heading">Week activity</div>
    </div>
    <div class="paper card-item-03">
      <div class="heading">Earning summary</div>
    </div>
    <div class="paper card-item-03">
      <div class="heading">Total earning</div>
    </div>
  </div>
  <div class="card-list bottom-card-list">
    <div class="paper card-item-04">
      <div class="heading">Earning Type</div>
    </div>
    <div class="paper card-item-02">
      <div class="heading">Diagram</div>
    </div>
    <div class="paper card-item-03">
      <div class="heading">Announcments</div>
    </div>
  </div>

</div>

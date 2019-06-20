<script>
  const items = [
    {
      title: "Task",
      value:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, incidunt distinctio culpa reiciendis perspiciatis quae dolore laborum magnam nihilnisi error deleniti, molestias voluptatem corporis tempore ipsum ipsapariatur quas."
    },
    {
      title: "Task",
      value:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, incidunt distinctio culpa reiciendis perspiciatis quae dolore laborum magnam nihilnisi error deleniti, molestias voluptatem corporis tempore ipsum ipsapariatur quas."
    },
    {
      title: "Task",
      value:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, incidunt distinctio culpa reiciendis perspiciatis quae dolore laborum magnam nihilnisi error deleniti, molestias voluptatem corporis tempore ipsum ipsapariatur quas."
    }
  ];
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
    overflow: auto;
    padding: 10px 16px;
  }
  .title {
    font-size: 19px;
    text-transform: uppercase;
    color: #9e90b2;
  }
  .value {
    font-size: 13px;
    text-align: justify;
  }
  .content {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .newsItem {
    margin-bottom: 15px;
    flex: 1;
    display: flex;
    padding-right: 15px;
  }
  .square {
    width: 13px;
    height: 13px;
    background-color: #009983;
    display: flex;
    margin-top: 8px;
    margin-right: 10px;
  }
  .newsList {
    overflow: auto;
  }
</style>

<div class="container paper">
  <div class="heading">Your news</div>
  <div class="newsList">
    {#each items as item}
      <div class="newsItem">
        <div class="square" />
        <div class="content">
          <div class="title">{item.title}</div>
          <div class="value"> {item.value} </div>
        </div>
      </div>
    {/each}
  </div>
</div>

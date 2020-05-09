<script>
  let dateStart = new Date().getTime();
  let dateEnd = new Date("2020-07-15").getTime();
  let diff = dateEnd - dateStart;
  let date = Math.round(diff / (1000 * 60 * 60 * 24));
</script>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");

  :global(*) {
    box-sizing: border-box;
  }

  :global(body) {
    margin: 0;
    padding: 0;
    font-family: "Pacifico", cursive;
  }

  #myVideo {
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
  }

  .App {
    position: absolute;
    bottom: 0;
    color: #f1f1f1;
    width: 100%;
    background: rgba(24, 96, 179, 0.5);
  }
  .App-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .App img {
    width: 600px;
    height: auto;
    text-align: right;
  }
  h1 {
    color: #f8cf2d;
    font-size: 80px;
    margin: 0;
    padding: 0;
    letter-spacing: 2px;
    text-shadow: 6px 6px 0px rgba(0, 0, 0, 0.2);
  }
  p {
    font-size: 40px;
    margin: 0;
    padding: 0;
    letter-spacing: 1.2px;
    text-shadow: 3px 3px 0px rgba(0, 0, 0, 0.1);
  }
  .App-title {
    margin: 0 0 0 10em;
  }
</style>

<video autoplay muted loop id="myVideo">
  <source src="https://arepa.s3.amazonaws.com/baby-bg.mp4" type="video/mp4" />
  Your browser does not support HTML5 video.
</video>

<div class="App">
  <div class="App-container">
    <div class="App-content">
      <div class="App-title">
        <h1>Oscar Barajas Jr.</h1>
        <p>Días estimados para nacer: {date}</p>
      </div>
      <img
        src="https://arepa.s3.amazonaws.com/bg-bebeloper.png"
        alt="Oscar Barajas" />
    </div>
  </div>
</div>

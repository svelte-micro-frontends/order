<script>
  let promise  = fetch('https://api.jsonbin.io/b/5fbded3990e7c66167f6aa01', {
    headers: {
      'secret-key': '$2b$10$WgrEnl6Ev9ry0rK.KNhgo.lGZjT0PEuOnXTSfRAd61nH5SOrvoPz.'
    }
  }).then(r => r.json()).then(data => {
    const [,,id] = location.pathname.split('/');
    const _restaurant =  data.find(r => r.id === id);
    console.log(_restaurant);
    return _restaurant;

  });

</script>

<main id="order">

  {#await promise}
    <h2>Loading...</h2>
  {:then restaurant}
    <div class="sc-jzJRlG cDoAnW">
      <div class="order-wrapper">
        <section class="menu-section">
          <div class="sc-bwzfXH bMKTbk">
            <h2 class="sc-bdVaJa iirVBG">Menu:</h2>
            <ol class="sc-htpNat hNeiyA">
              <li class="menu-item">
                <span><span style="width: 55px;" class="sc-EHOje jZHygc">$9</span>
                  <span class="sc-EHOje jZHygc">Cheeseburger</span>
                </span><span class="sc-ifAKCX jZzfvq">
                  <span class="sc-EHOje jZHygc">
                    <button disabled="" class="sc-bZQynM bzHnOF">-</button>
                  </span><span class="sc-EHOje jZHygc">x0</span>
                  <span class="sc-EHOje jZHygc"><button class="sc-bZQynM bzHnOF">+</button></span>
                  <span class="sc-EHOje jZHygc">$0</span></span>
              </li>
              <li class="sc-bxivhb jKIXFz">
                <span><span style="width: 55px;" class="sc-EHOje jZHygc">$4</span>
                  <span class="sc-EHOje jZHygc">Milkshake</span></span><span class="sc-ifAKCX jZzfvq"><span class="sc-EHOje jZHygc"><button disabled="" class="sc-bZQynM bzHnOF">-</button></span><span class="sc-EHOje jZHygc">x0</span><span class="sc-EHOje jZHygc"><button class="sc-bZQynM bzHnOF">+</button></span><span class="sc-EHOje jZHygc">$0</span></span></li><li class="sc-bxivhb jKIXFz"><span><span style="width: 55px;" class="sc-EHOje jZHygc">$15</span><span class="sc-EHOje jZHygc">Meal (burger, fries, and shake)</span></span><span class="sc-ifAKCX jZzfvq"><span class="sc-EHOje jZHygc"><button disabled="" class="sc-bZQynM bzHnOF">-</button></span><span class="sc-EHOje jZHygc">x0</span><span class="sc-EHOje jZHygc"><button class="sc-bZQynM bzHnOF">+</button></span><span class="sc-EHOje jZHygc">$0</span></span>
              </li>
            </ol>
          </div>
          <div class="sc-jTzLTM eVcixw">Total: $0</div>
          <button class="sc-fjdhpX ioFrMz">Order now</button>
        </section>
        <section class="restaurant-section">
          <h1 class="sc-iwsKbI dJgGYT">{restaurant.name}</h1>
          <figure class="sc-gqjmRU iXXjRT"><img src="https://content.demo.microfrontends.com/images/1-burger.jpg" alt="A photo of a burger with fries and a milkshake" class="sc-gZMcBi uxjla">
            <figcaption class="sc-VigVT crfTJo">{restaurant.description}</figcaption>
          </figure>
        </section>
      </div>
    </div>

  {:catch error}
    <h2>Some unknown error occurred, can't able to fetch the restaurant menu.</h2>
  {/await}
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  #order {
    max-width: 1150px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }

  .order-wrapper {
    display: flex;
    justify-content: space-around;
  }

  .menu-section {
    display: flex;
    max-width: 100%;
    flex-direction: column;
  }

  .restaurant-section {
    max-width: 100%;
  }

  .menu-item {
    list-style: none;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: 100%;
  }
</style>

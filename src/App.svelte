<script>
  let cart = { menu: [] };

  let promise  = fetch('https://api.jsonbin.io/b/5fbded3990e7c66167f6aa01', {
    headers: {
      'secret-key': '$2b$10$WgrEnl6Ev9ry0rK.KNhgo.lGZjT0PEuOnXTSfRAd61nH5SOrvoPz.'
    }
  }).then(r => r.json()).then(data => {
    const [,,id] = location.pathname.split('/');
    const _restaurant =  data.find(r => r.id === id);
    console.log(_restaurant);
    cart.menu = _restaurant.menu;
    cart.menu.forEach(m => {
      m.quantity = 0;
    });
    return _restaurant;

  });

  let quantity = 0;
  let amount = 0;

  function addItem(ev) {
    const dish = Number(ev.target.dataset.dish);
    cart.menu[dish].quantity++;
  }

  function removeItem(ev) {
    const dish = Number(ev.target.dataset.dish);
    cart.menu[dish].quantity--;
  }

  $: total = cart.menu.reduce((prev, next) => {
    return prev + next.price * next.quantity;
  }, 0 );

  function displayCart() {
    const bill = `
    ${cart.menu.map(m => {
      return `${m.item} x ${m.quantity} =  $${m.price * m.quantity}`;
    }).join('\n')}
    ----------------------------------------------------------------

                                                 Total =  $${total}
    `;
    alert(bill);
  }

</script>

<main id="order">

  {#await promise}
    <h2>Loading...</h2>
  {:then restaurant}
    <div class="">
      <div class="order-wrapper">
        <section class="menu-section">
          <div class="">
            <h2>Menu:</h2>
            <ol class="">
              {#each restaurant.menu as dish, index}
              <li class="menu-item">
                <span><span style="width: 55px;" class="dish-price">${dish.price}</span>
                  <span class="">{dish.item}Cheeseburger</span>
                </span><span class="">
                  <span class="quantity-buttons">
                    <button disabled="{cart.menu[index].quantity > 0 ? false : true}" class="quantity" data-dish="{index}" on:click={removeItem}>-</button>
                  </span><span class="quantity">x{cart.menu[index].quantity}</span>
                  <span class="quantity"><button class="quantity" data-dish="{index}" on:click={addItem}>+</button></span>
                  <span class="amount">${cart.menu[index].quantity * cart.menu[index].price}</span></span>
              </li>
              {/each}
            </ol>
          </div>
          <div class="total">Total: ${total}</div>
          <button class="order-button" on:click={displayCart}>Order now</button>
        </section>
        <section class="restaurant-section">
          <h2 class="restaurant-name">{restaurant.name}</h2>
          <figure class="">
            <img src="https://content.demo.microfrontends.com{restaurant.imageSrc}" alt="A photo of a burger with fries and a milkshake" class="">
            <figcaption class="">{restaurant.description}</figcaption>
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

  .restaurant-name {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 2em;
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
    font-size: 25px;
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

  .dish-price {
    display: inline-block;
    padding: 0px 5px;
    margin-bottom: 10px;
  }

  .order-button {
    padding: 10px 15px;
    margin-top: 15px;
    align-self: flex-end;
    border: none;
    background-color: rgb(231, 150, 82);
    font-size: 25px;
    cursor: pointer;
  }

  .quantity-buttons {
    margin-left: 20px;
  }

  .quantity {
    display: inline-block;
    padding: 0px 5px;
    margin-bottom: 10px;
  }

  .amount {
    display: inline-block;
    padding: 0px 5px;
    margin-bottom: 10px;
    min-width: 55px;
  }

  .total {
    align-self: flex-end;
    font-size: 30px;
    margin: 50px 0px 0px;
  }
</style>

<template>
  <div id="gallery">
    <div class="search">
      <div class="search__box">
        <label>
          <input
              type="text"
              class="search__input"
              placeholder="Поиск коллекции"
              v-model="inputQuery"
              v-on:keyup.enter="getSearch"
          />
        </label>
        <button
            class="btn btn--block card__btn btn__secondary"
            @click="getSearch"
        >
          Поиск
        </button>
      </div>
    </div>

    <ul class="cards">
      <li class="cards__item" v-if="isRandomCard">
        <div class="card">
          <img class="card__image" :src="randomCard.url" alt="randomCard" />
          <div class="card__content">
            <div class="card__title">{{randomCard.description}}</div>
            <p class="card__text">{{randomCard.user}}</p>
          </div>
        </div>
      </li>

      <template v-for="c in collections" v-bind:key="c">
        <li class="cards__item" v-for="m in c.preview_photos" v-bind:key="m">
          <div class="card">
            <img class="card__image" :src="m.urls.small" alt="randomCard" />
            <div class="card__content">
              <div class="card__title">{{c.title}}</div>
              <p class="card__text">{{c.user}}</p>
            </div>
          </div>
        </li>
      </template>
    </ul>
  </div>

</template>

<script>

import axios from "axios";

export default {
  name: "GallerySection",
  data() {
    return {
      randomCard: {
        description: null,
        url: null,
        user: null,
      },
      isRandomCard: true,
      inputQuery: null,
      collections: null,
    }
  },
  methods: {
    async getRandomCard() {
      const randomCard =
          "https://api.unsplash.com/photos/random?client_id=tlzRN1hxSp_9wH-R5d6Ps6CFJWCo8EbXyuL0Xu1fSqg&Accept-Version=v1";
      await axios
          .get(randomCard)
          .then((response) => {
            this.randomCard.description =
                response.data.description || "Без Названия";
            this.randomCard.url = response.data.urls.small;
            this.randomCard.user = response.data.user.name || "Без Имени автора";
          })
          .catch((error) => {
            console.log(error);
          });
    },

    async getSearch() {
      const query = `https://api.unsplash.com/search/collections?client_id=tlzRN1hxSp_9wH-R5d6Ps6CFJWCo8EbXyuL0Xu1fSqg&Accept-Version=v1&query=${this.inputQuery}&per_page=35 `;
      // eslint-disable-next-line no-undef
      await axios
          .get(query)
          .then((response) => {
            this.isRandomCard = false;
            this.collections = this.getResults(response.data.results);
          })
          .catch((error) => {
            console.log(error);
          });
    },

    getResults(results) {
      let res = [];
      for (let i = 0; i < results.length; i++) {
        res.push({
          title: results[i].title || "Без Названия",
          description: results[i].description || "Без описания",
          preview_photos: results[i].preview_photos,
          user: results[i].user.name,
        });
      }

      return res;
    },
  },

  beforeMount() {
    this.getRandomCard();
  },
}
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  font-family: "Segoe UI", sans-serif;
}


 #gallery{
  background-color: #f0f0f0;
   width: 100%;
   margin: 0 auto;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
}


:root {
  --primary-light: #8abdff;
  --white: #ffffff;
  --greyLight-1: #e4ebf5;
  --greyLight-2: #c8d0e7;
  --greyLight-3: #bec8e4;
  --greyDark: #9baacf;
}


img {
  height: auto;
  max-width: 100%;
  vertical-align: middle;
}

.btn--block {
  display: block;
  width: 100%;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  align-items: center;
  justify-content: center;
}

.cards__item {
  display: flex;
  padding: 1rem;
}

@media (min-width: 60rem) {
  .cards__item {
    width: 50%;
  }
}

.card {
  background: none;
  border-radius: 1rem;
  box-shadow: 0.3rem 0.3rem 0.6rem var(--greyLight-2),
  -0.2rem -0.2rem 0.5rem var(--white);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
}

.card__content {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: 1rem;
}

.card__image {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  overflow: hidden;
  position: relative;
  transition: filter 0.5s cubic-bezier(0.43, 0.41, 0.22, 0.91);
  object-fit: cover;
  height: 24rem;
  width: 100%;
}

.card__image::before {
  content: "";
  display: block;
  padding-top: 56.25%;
}

@media (min-width: 40rem) {
  .card__image::before {
    padding-top: 66.6%;
  }
}

@media (max-width: 1000px) {
  #app {
    width: auto;
  }
}

@media (max-width: 400px) {
  .card__image {
    height: auto;
    align-self: center;
  }

  #app {
    width: auto;
  }
}

.card__title {
  color: #696969;
  font-size: 1.25rem;
  font-weight: 300;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.card__text {
  flex: 1 1 auto;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1.25rem;
}

.search {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.search__box {
  background: #f0f0f0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  box-shadow: 0.3rem 0.3rem 0.6rem var(--greyLight-2),
  -0.2rem -0.2rem 0.5rem var(--white);
  border-radius: 1rem;
}

.search__input {
  height: 3rem;
  border: none;
  font-size: 1.4rem;
  background: none;
  color: var(--greyDark);
  text-align: center;
  border-radius: 1rem;
  margin: 1rem;
}

.search__input::placeholder {
  color: var(--greyLight-3);
}

.search__input:focus {
  outline: none;
  box-shadow: inset 0.2rem 0.2rem 0.5rem var(--greyLight-2),
  inset -0.2rem -0.2rem 0.5rem var(--white);
}

.search__icon {
  height: 2rem;
  position: absolute;
  font-size: 2rem;
  padding: 0 1rem;
  display: flex;
  color: var(--greyDark);
  transition: 0.3s ease;
}

.btn {
  margin: 1rem;
  width: 7rem;
  height: 3rem;
  border-radius: 1rem;
  justify-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s ease;
  font-size: 1.25rem;
  border: none;
  background: #9baacf;
  box-shadow: inset 0.2rem 0.2rem 0.5rem var(--greyLight-2),
  inset -0.2rem -0.2rem 0.5rem var(--greyLight-2);
  color: #ffffff;
}

.btn__secondary {
  grid-column: 0.5;
  grid-row: 0.83333333333333;
}

.btn__secondary:active {
  box-shadow: -0.2rem -0.2rem 0.5rem var(--white);
  background: #8abdff;
}

</style>
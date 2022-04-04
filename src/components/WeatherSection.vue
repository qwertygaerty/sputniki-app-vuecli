<template>
  <!-- Определение города-->

  <section class="get-city" v-if="isGetCity">
    <h2 class="get-city__heading">Введите имя вашего города</h2>
    <div class="get-city__container">
      <div class="get-city__item">
        <div class="wrapper">
          <section class="input-part">
            <p class="info-txt"></p>
            <div class="content">
              <input
                  type="text"
                  spellcheck="false"
                  placeholder="Название города или области"
                  required
                  v-model="city"
              />
              <div class="separator"></div>
              <button @click="setCity(city)">Отправить</button>
              <div class="separator-text"></div>
              <button @click="getLocationCoords($event.target)">
                Мы определим ваше местоположение
              </button>
              <div class="separator"></div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </section>

  <!-- Preloader -->

  <section class="load" v-if="isLoading">
    <div class="preloader" style="opacity: 1">
      <svg
          version="1.1"
          id="sun"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="10px"
          height="10px"
          viewBox="0 0 10 10"
          enable-background="new 0 0 10 10"
          xml:space="preserve"
          style="opacity: 1; margin-left: 0px; margin-top: 0px"
      >
            <g>
              <path
                  fill="none"
                  d="M6.942,3.876c-0.4-0.692-1.146-1.123-1.946-1.123c-0.392,0-0.779,0.104-1.121,0.301c-1.072,0.619-1.44,1.994-0.821,3.067C3.454,6.815,4.2,7.245,5,7.245c0.392,0,0.779-0.104,1.121-0.301C6.64,6.644,7.013,6.159,7.167,5.581C7.321,5,7.243,4.396,6.942,3.876z M6.88,5.505C6.745,6.007,6.423,6.427,5.973,6.688C5.676,6.858,5.34,6.948,5,6.948c-0.695,0-1.343-0.373-1.69-0.975C2.774,5.043,3.093,3.849,4.024,3.312C4.32,3.14,4.656,3.05,4.996,3.05c0.695,0,1.342,0.374,1.69,0.975C6.946,4.476,7.015,5,6.88,5.505z"
              ></path>
              <path
                  fill="none"
                  d="M8.759,2.828C8.718,2.757,8.626,2.732,8.556,2.774L7.345,3.473c-0.07,0.041-0.094,0.132-0.053,0.202C7.319,3.723,7.368,3.75,7.419,3.75c0.025,0,0.053-0.007,0.074-0.02l1.211-0.699C8.774,2.989,8.8,2.899,8.759,2.828z"
              ></path>
              <path
                  fill="none"
                  d="M1.238,7.171c0.027,0.047,0.077,0.074,0.128,0.074c0.025,0,0.051-0.008,0.074-0.02l1.211-0.699c0.071-0.041,0.095-0.133,0.054-0.203S2.574,6.228,2.503,6.269l-1.21,0.699C1.221,7.009,1.197,7.101,1.238,7.171z"
              ></path>
              <path
                  fill="none"
                  d="M6.396,2.726c0.052,0,0.102-0.026,0.13-0.075l0.349-0.605C6.915,1.976,6.89,1.885,6.819,1.844c-0.07-0.042-0.162-0.017-0.202,0.054L6.269,2.503C6.228,2.574,6.251,2.666,6.322,2.706C6.346,2.719,6.371,2.726,6.396,2.726z"
              ></path>
              <path
                  fill="none"
                  d="M3.472,7.347L3.123,7.952c-0.041,0.07-0.017,0.162,0.054,0.203C3.2,8.169,3.226,8.175,3.25,8.175c0.052,0,0.102-0.027,0.129-0.074l0.349-0.605c0.041-0.07,0.017-0.16-0.054-0.203C3.603,7.251,3.513,7.276,3.472,7.347z"
              ></path>
              <path
                  fill="none"
                  d="M3.601,2.726c0.025,0,0.051-0.007,0.074-0.02C3.746,2.666,3.77,2.574,3.729,2.503l-0.35-0.604C3.338,1.828,3.248,1.804,3.177,1.844C3.106,1.886,3.082,1.976,3.123,2.047l0.35,0.604C3.5,2.7,3.549,2.726,3.601,2.726z"
              ></path>
              <path
                  fill="none"
                  d="M6.321,7.292c-0.07,0.043-0.094,0.133-0.054,0.203l0.351,0.605c0.026,0.047,0.076,0.074,0.127,0.074c0.025,0,0.051-0.006,0.074-0.02c0.072-0.041,0.096-0.133,0.055-0.203l-0.35-0.605C6.483,7.276,6.393,7.253,6.321,7.292z"
              ></path>
              <path
                  fill="none"
                  d="M2.202,5.146c0.082,0,0.149-0.065,0.149-0.147S2.284,4.851,2.202,4.851H1.503c-0.082,0-0.148,0.066-0.148,0.148s0.066,0.147,0.148,0.147H2.202z"
              ></path>
              <path
                  fill="none"
                  d="M8.493,4.851H7.794c-0.082,0-0.148,0.066-0.148,0.148s0.066,0.147,0.148,0.147l0,0h0.699c0.082,0,0.148-0.065,0.148-0.147S8.575,4.851,8.493,4.851L8.493,4.851z"
              ></path>
              <path
                  fill="none"
                  d="M5.146,2.203V0.805c0-0.082-0.066-0.148-0.148-0.148c-0.082,0-0.148,0.066-0.148,0.148v1.398c0,0.082,0.066,0.149,0.148,0.149C5.08,2.352,5.146,2.285,5.146,2.203z"
              ></path>
              <path
                  fill="none"
                  d="M4.85,7.796v1.396c0,0.082,0.066,0.15,0.148,0.15c0.082,0,0.148-0.068,0.148-0.15V7.796c0-0.082-0.066-0.148-0.148-0.148C4.917,7.647,4.85,7.714,4.85,7.796z"
              ></path>
              <path
                  fill="none"
                  d="M2.651,3.473L1.44,2.774C1.369,2.732,1.279,2.757,1.238,2.828C1.197,2.899,1.221,2.989,1.292,3.031l1.21,0.699c0.023,0.013,0.049,0.02,0.074,0.02c0.051,0,0.101-0.026,0.129-0.075C2.747,3.604,2.722,3.514,2.651,3.473z"
              ></path>
              <path
                  fill="none"
                  d="M8.704,6.968L7.493,6.269c-0.07-0.041-0.162-0.016-0.201,0.055c-0.041,0.07-0.018,0.162,0.053,0.203l1.211,0.699c0.023,0.012,0.049,0.02,0.074,0.02c0.051,0,0.102-0.027,0.129-0.074C8.8,7.101,8.776,7.009,8.704,6.968z"
              ></path>
            </g>
          </svg>

      <svg
          version="1.1"
          id="cloud"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="10px"
          height="10px"
          viewBox="0 0 10 10"
          enable-background="new 0 0 10 10"
          xml:space="preserve"
      >
            <path
                fill="none"
                d="M8.528,5.624H8.247c-0.085,0-0.156-0.068-0.156-0.154c0-0.694-0.563-1.257-1.257-1.257c-0.098,0-0.197,0.013-0.3,0.038C6.493,4.259,6.45,4.252,6.415,4.229C6.38,4.208,6.356,4.172,6.348,4.131C6.117,3.032,5.135,2.235,4.01,2.235c-1.252,0-2.297,0.979-2.379,2.23c-0.004,0.056-0.039,0.108-0.093,0.13C1.076,4.793,0.776,5.249,0.776,5.752c0,0.693,0.564,1.257,1.257,1.257h6.495c0.383,0,0.695-0.31,0.695-0.692S8.911,5.624,8.528,5.624z"
            ></path>
          </svg>

      <div class="rain">
        <span class="drop"></span>
        <span class="drop"></span>
        <span class="drop"></span>
        <span class="drop"></span>
        <span class="drop"></span>
        <span class="drop"></span>
        <span class="drop"></span>
        <span class="drop"></span>
        <span class="drop"></span>
        <span class="drop"></span>
      </div>

      <div class="text">Загрузка</div>
    </div>
  </section>

  <div class="location-and-date">
    <h1 class="location-and-date__location">
      {{ city }}
      <a class="location-and-date__choose" @click="getCity"
      ><img
          src="../../public/img/location.png"
          alt="location"
          class="location-and-date__icon"
      /></a>
    </h1>
    <div>{{ state }} {{ today }}</div>
  </div>

  <!-- Погода прямо сейчас -->

  <div class="current-temperature">
    <div class="current-temperature__icon-container">
      <img :src="main.image" class="current-temperature__icon" alt=""/>
    </div>

    <div class="current-temperature__content-container" v-if="main.weather">
      <div class="current-temperature__value">
        {{ Math.round(main.temp - 273.15) }}&deg;
      </div>
      <div class="current-temperature__summary">
        {{ main.weather[0].description }}
      </div>
    </div>
  </div>

  <div class="current-stats">
    <div>
      <div class="current-stats__value">
        {{ Math.round(temp_max - 273.15) }}&deg;
      </div>
      <div class="current-stats__label">Макс</div>
      <div class="current-stats__value">
        {{ Math.floor(temp_min - 273.15) }}&deg;
      </div>
      <div class="current-stats__label">Мин</div>
    </div>
    <div>
      <div class="current-stats__value">{{ main.wind_speed }} м/с</div>
      <div class="current-stats__label">Ветер</div>
      <div class="current-stats__value">{{ main.humidity }}%</div>
      <div class="current-stats__label">Влажность</div>
    </div>
    <div>
      <div class="current-stats__value">{{ main.sunrise }}</div>
      <div class="current-stats__label">Восход</div>
      <div class="current-stats__value">{{ main.sunset }}</div>
      <div class="current-stats__label">Закат</div>
    </div>
  </div>

  <!-- Погода на сегодня -->

  <div class="weather-by-hour">
    <h2 class="weather-by-hour__heading">Погода на следующие 12 часов</h2>
    <div
        class="weather-by-hour__container"
        v-bind:class="{up: refCount === 0}"
    >
      <div
          class="weather-by-hour__item"

          v-for="i of hourly" :key="i"
      >
        <div class="weather-by-hour__hour">{{ getDateUnix(i.dt) }}</div>
        <img :src="i.image" alt="Mostly sunny"/>
        <div>{{ Math.round(i.temp - 273.15) }}&deg;</div>
      </div>
    </div>
  </div>

  <!-- Погода на следующую неделю-->

  <div class="week">
    <h2 class="week__heading">Погода на следующую неделю</h2>
    <div class="week__container" v-bind:class="{up: refCount === 0}">
      <div class="week__row" v-for="el of daily" :key="el">
        <div class="week__date">
          {{ getWeekDay(new Date(el.dt * 1000)) }}
          <div class="week__label">
            {{
              (new Date(el.dt * 1000)).toLocaleString('ru', {
                day:
                    '2-digit', month: '2-digit',
              })
            }}
          </div>
        </div>

        <div class="week__low">
          {{ Math.round(el.temp.min - 273.15) }}&deg;
          <div class="week__label">Мин</div>
        </div>

        <div class="week__high">
          {{ Math.floor(el.temp.max - 273.15) }}&deg;
          <div class="week__label">Макс</div>
        </div>

        <div class="week__icon">
          <img
              :src="`http://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`"
              alt="Sunny">
        </div>

        <div class="week__rain">
          {{ el.humidity }}%
          <div class="week__label">Влажность</div>
        </div>

        <div class="week__wind">
          {{ Math.round(el.wind_speed) }} м/с
          <div class="week__label">Ветер</div>
        </div>
      </div>
    </div>
  </div>


  <nasa-section></nasa-section>

</template>

<script>

import axios from 'axios';
import NasaSection from "@/components/NasaSection";

export default {
  name: "WeatherSection",
  components: {
    NasaSection
  },

  data() {
    return {
      city: 'Томск',
      state: 'Томская область',
      today: new Date().toLocaleString('ru', {
        hour: '2-digit',
        minute: '2-digit',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      cords: {
        lon: null,
        lat: null,
      },
      main: {},
      hourly: [],
      daily: [],
      temp_max: null,
      temp_min: null,
      refCount: 0,
      isLoading: false,
      country: null,
      isGetCity: false,
    }
  },
  methods: {
    async getCoords() {
      const coords = `https://api.openweathermap.org/geo/1.0/direct?q=${this.city}&appid=54b5f11039f5546975e7028ae4a4a043&lang=ru`;
      // eslint-disable-next-line no-undef
      await axios
          .get(coords)
          .then((response) => {
            if (!response) return;
            this.city = response.data[0].name;
            this.state = response.data[0].state;
            this.cords.lat = response.data[0].lat;
            this.cords.lon = response.data[0].lon;
            this.country = response.data[0].country;
            this.getWeather();
          })
          .catch(() => {
            this.city = 'Tomsk';
            alert('Город не существует: ');
            this.getCity();
          });
    },
    async getWeather() {
      const weatherToday = `https://api.openweathermap.org/data/2.5/onecall?lat=${this.cords.lat}&lon=${this.cords.lon}&appid=54b5f11039f5546975e7028ae4a4a043&lang=ru`;
      // eslint-disable-next-line no-undef
      await axios
          .get(weatherToday)
          .then((response) => {
            this.main = response.data.current;
            this.main.sunrise = this.getDateUnix(this.main.sunrise);
            this.main.sunset = this.getDateUnix(this.main.sunset);

            this.hourly = response.data.hourly.filter((_, i) => i % 2 === 0);

            this.hourly.length = 7;
            this.daily = response.data.daily;

            this.hourly.forEach((el) => {
              // eslint-disable-next-line no-param-reassign
              el.image = `http://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`;
            });

            this.main.image = `http://openweathermap.org/img/wn/${this.main.weather[0].icon}@2x.png`;
            this.getMinMax();
          })
          .catch((error) => {
            console.log(error);
          });
    },
    async getMinMax() {
      const minMaxTemp = `https://api.openweathermap.org/data/2.5/weather?lat=${this.cords.lat}&lon=${this.cords.lon}&appid=54b5f11039f5546975e7028ae4a4a043&lang=ru`;
      // eslint-disable-next-line no-undef
      await axios
          .get(minMaxTemp)
          .then((response) => {
            this.temp_max = Number(response.data.main.temp_max);
            this.temp_min = Number(response.data.main.temp_min);
          })
          .catch((error) => {
            console.log(error);
          });
    },
    async getCityAndState() {
      const Temp = `https://api.openweathermap.org/data/2.5/weather?lat=${this.cords.lat}&lon=${this.cords.lon}&appid=54b5f11039f5546975e7028ae4a4a043&lang=ru`;
      // eslint-disable-next-line no-undef
      await axios
          .get(Temp)
          .then((response) => {
            this.city = response.data.name;
            this.getCoords();
          })
          .catch((error) => {
            console.log(error);
          });
    },
    getDateUnix(el) {
      return new Date(el * 1000).toLocaleString('ru', {
        hour: '2-digit',
        minute: '2-digit',
      });
    },
    getWeekDay(date) {
      const days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

      return days[date.getDay()];
    },
    setLoading(isLoading) {
      if (isLoading) {
        this.refCount += 1;
        this.isLoading = true;
        document.getElementsByTagName('body')[0].style.overflow = 'hidden';
      } else if (this.refCount > 0) {
        this.refCount -= 1;
        this.isLoading = this.refCount > 0;
        document.getElementsByTagName('body')[0].style.overflow = 'auto';
      }
    },
    getTheme() {
      this.main.dt = new Date(this.main.dt * 1000).toLocaleString('ru', {
        hour: '2-digit',
      });
      if (this.main.dt > 16 || (this.main.dt < 6 && this.main.dt > 16)) {
        const body = document.getElementsByTagName('body')[0];
        body.classList.add('dark');
      }
    },
    getCity() {
      this.isGetCity = true;
    },
    setCity() {
      this.getCoords();
      this.isGetCity = false;
    },
    getLocationCoords(el) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.setNavigation, () => {
          el.setAttribute('disabled', 'true');
        });
      }
    },
    setNavigation(position) {
      this.cords.lon = position.coords.longitude;
      this.cords.lat = position.coords.latitude;
      this.getCityAndState();
      this.isGetCity = false;
    },
  },
  beforeMount() {
    this.getCoords();
  },
  created() {
    // eslint-disable-next-line no-undef
    axios.interceptors.request.use(
        (config) => {
          this.setLoading(true);
          return config;
        },
        (error) => {
          this.setLoading(false);
          return Promise.reject(error);
        },
    );

    // eslint-disable-next-line no-undef
    axios.interceptors.response.use(
        (response) => {
          this.setLoading(false);
          return response;
        },
        (error) => {
          this.setLoading(false);
          return Promise.reject(error);
        },
    );
  },

}
</script>

<style >
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
}

body {
  margin: 12px;
  font-size: 100%;
  font-family: "Segoe UI", sans-serif;
  color: white;
  height: 100%;
  background: linear-gradient(
      to bottom,
      rgb(40 136 204) 0%,
      rgb(40 136 204 / 67%) 100%
  )
  no-repeat fixed;
}

.dark {
  background: #241e20 no-repeat fixed;
}

@media screen and (min-width: 700px) {
  body {
    margin: 20px;
  }
}

.main-container {
  display: flex;
  flex-wrap: wrap;
}

@media screen and (min-width: 920px) {
  .main-container {
    width: 880px;
    margin: 8px auto;
    font-size: 1.1em;
  }
}

.up {
  -webkit-animation: up 0.2s cubic-bezier(0.39, 0, 0.38, 1) 0.2s;
}

@-webkit-keyframes up {
  0% {
    opacity: 0;
    -webkit-transform: translateY(15px);
  }
  50% {
    opacity: 0;
    -webkit-transform: translateY(15px);
  }
  99% {
    -webkit-animation-play-state: paused;
  }
  100% {
    opacity: 1;
  }
}



/* location-and-date */
.location-and-date {
  width: 100%;
}

.location-and-date__location {
  margin: 0;
  font-size: 2em;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
}

.location-and-date__icon {
  height: 1em;
  width: auto;
}

.location-and-date__choose {
  cursor: pointer;
}

/* current-temperature */
.current-temperature {
  display: flex;
  margin-top: 0.25em;
  width: 100%;
}

.current-temperature__icon-container {
  flex-grow: 1.25;
  text-align: center;
}

.current-temperature__content-container {
  flex-grow: 1;
  text-align: center;
}

.current-temperature__icon {
  width: 9.5em;
}

.current-temperature__value {
  font-size: 5.25em;
  font-weight: 300;
}

.current-temperature__summary {
  margin-top: -0.5em;
  margin-left: -0.6em;
  text-align: center;
  font-size: 1.125em;
}

/* current-stats */
.current-stats {
  display: flex;
  justify-content: space-around;
  padding-bottom: 1em;
  width: 100%;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
}

@media screen and (min-width: 700px) {
  .current-stats {
    margin-bottom: 1em;
    padding-bottom: 0;
    border-top: none;
    border-bottom: none;
    border-left: 1px solid rgba(255, 255, 255, 0.5);
  }
}

.current-stats__value {
  margin-top: 1em;
  font-size: 1.44em;
}

.current-stats__label {
  color: rgba(255, 255, 255, 0.6);
}

@media screen and (min-width: 700px) {
  .current-temperature,
  .current-stats {
    width: 50%;
  }
}

/* weather-by-hour */
.weather-by-hour {
  display: none;
  width: 100%;
}

@media screen and (min-width: 700px) {
  .weather-by-hour {
    display: block;
  }
}

.weather-by-hour__container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.weather-by-hour__heading,
.week__heading {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1em;
  font-weight: normal;
}

@media screen and (min-width: 768px) {
  .weather-by-hour__heading,
  .week__heading {
    font-size: 1.125em;
  }
}

.weather-by-hour__item {
  padding: 0.8em 0;
  width: 13%;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.15);
  font-size: 1.125em;
  text-align: center;
  transition: 1s;
}

.weather-by-hour__item img,
.week__row img {
  width: auto;
  height: 5rem;
}

@media screen and (min-width: 880px) {
  .weather-by-hour__item {
    width: 6.05em;
  }
}

.weather-by-hour__hour {
  margin-bottom: 0.5em;
}

/* nasa */
.nasa {
  width: 100%;
}

.nasa_container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.nasa__heading,
.nasa {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1em;
  font-weight: normal;
}

@media screen and (min-width: 768px) {
  .nasa__heading,
  .nasa__heading {
    font-size: 1.125em;
  }
  .nasa__text {
    margin: 0;
  }
}

.nasa__item {
  padding: 0.8em 0;
  width: 100%;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.15);
  font-size: 1.125em;
  text-align: center;
  transition: 1s;
}

.nasa__item img,
.week__row img {
  width: 100%;
  height: auto;
}

.nasa__title {
  margin-bottom: 0.5em;
}

.nasa__text {
  margin: 0 0.5em;
  text-align: justify;
}

/* get-city */

.get-city {
  position: fixed;
  overflow: hidden;
  width: 100%;
  height: 100%;
  text-align: center;
  background: #241e20;
  top: 0;
  left: 0;
}

.get-city_container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.get-city__heading,
.get-city {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1em;
  font-weight: normal;
}

@media screen and (min-width: 768px) {
  .get-city__heading,
  .get-city__heading {
    font-size: 1.125em;
  }
  .get-city__text {
    margin: 0;
  }
}

.get-city__item {
  padding: 0.8em 0;
  width: 100%;
  border-radius: 5px;
  background-color: #241e20;
  font-size: 1.125em;
  text-align: center;
  transition: 1s;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  display: flex;
}

.get-city__item img {
  width: 100%;
  height: auto;
}

.get-city__title {
  margin-bottom: 0.5em;
}

.get-city__text {
  margin: 0 0.5em;
  text-align: justify;
}

/* input */

.wrapper {
  width: 400px;
  background: #fff;
  border-radius: 7px;
  box-shadow: 7px 7px 20px rgba(0, 0, 0, 0.05);
}

.wrapper .input-part {
  margin: 20px 25px 30px;
}
.wrapper.active .input-part {
  display: none;
}
.input-part .info-txt {
  display: none;
  font-size: 17px;
  text-align: center;
  padding: 12px 10px;
  border-radius: 7px;
  margin-bottom: 15px;
}
.input-part .info-txt.error {
  color: #721c24;
  display: block;
  background: #f8d7da;
  border: 1px solid #f5c6cb;
}
.input-part .info-txt.pending {
  color: #0c5460;
  display: block;
  background: #d1ecf1;
  border: 1px solid #bee5eb;
}
.input-part :where(input, button) {
  width: 100%;
  height: 55px;
  border: none;
  outline: none;
  font-size: 18px;
  border-radius: 7px;
}
.input-part input {
  text-align: center;
  padding: 0 15px;
  border: 1px solid #ccc;
}
.input-part input:is(:focus, :valid) {
  border: 2px solid #1d9ffc;
}
.input-part input::placeholder {
  color: #bfbfbf;
}
.input-part .separator,
.input-part .separator-text {
  height: 1px;
  width: 100%;
  margin: 25px 0;
  background: #ccc;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.separator-text::before {
  content: "или";
  color: #b3b3b3;
  font-size: 19px;
  padding: 0 15px;
  background: #fff;
}
.input-part button {
  color: #fff;
  cursor: pointer;
  background: #0c5460;
  transition: 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 0;
}

.input-part .separator-text ~ button {
  background: #48484a;
}

.input-part button::before {
  content: "";
  position: absolute;
  left: -100px;
  bottom: 0;
  width: 400px;
  height: 400px;
  transform: scale(0);
  background: #1d9ffc;
  transition: 0.4s;
  z-index: -1;
  border-radius: 50%;
}

.input-part button:hover::before {
  transform: scale(2);
}

/* week */
.week {
  width: 100%;
  margin-top: 1em;
}

.week__container {
  display: flex;
  flex-wrap: wrap;
}

.week__row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 0.3em;
  padding: 0.8em 0;
  width: 100%;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.2);
  font-size: 1.19em;
  text-align: center;
}

.week__label {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.83em;
}

.week__date,
.week__high,
.week__low,
.week__icon,
.week__rain,
.week__wind {
  width: 33.33333%;
  font-size: 0.95em;
}

.week__date,
.week__high,
.week__low {
  margin-bottom: 0.6em;
}

/*PRELOADER*/

.load {
  position: fixed;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background: linear-gradient(
      to bottom,
      rgb(40 136 204) 0%,
      rgb(40 136 204) 100%
  )
  no-repeat fixed;
  top: 0;
  left: 0;
}

.preloader {
  position: absolute;
  margin-left: -55px;
  margin-top: -100px;
  height: 110px;
  width: 110px;
  left: 50%;
  top: 50%;
}
svg {
  width: 110px;
  height: 110px;
}
path {
  stroke: #48484a;
  stroke-width: 0.25;
  fill: #241e20;
}
#cloud {
  position: relative;
  z-index: 2;
}
#cloud path {
  fill: #efefef;
}
#sun {
  margin-left: -10px;
  margin-top: 6px;
  opacity: 0;
  width: 60px;
  height: 60px;
  position: absolute;
  left: 45px;
  top: 15px;
  z-index: 1;
  animation-name: rotate;
  animation-duration: 16000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
#sun path {
  stroke-width: 0.18;
  fill: #241e20;
}
@keyframes rotate {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
/* Rain */
.rain {
  position: absolute;
  width: 70px;
  height: 70px;
  margin-top: -32px;
  margin-left: 19px;
}
.drop {
  opacity: 1;
  background: #9ea1a4;
  display: block;
  float: left;
  width: 3px;
  height: 10px;
  margin-left: 4px;
  border-radius: 0px 0px 6px 6px;
  animation-name: drop;
  animation-duration: 350ms;
  animation-iteration-count: infinite;
}
.drop:nth-child(1) {
  animation-delay: -130ms;
}
.drop:nth-child(2) {
  animation-delay: -240ms;
}
.drop:nth-child(3) {
  animation-delay: -390ms;
}
.drop:nth-child(4) {
  animation-delay: -525ms;
}
.drop:nth-child(5) {
  animation-delay: -640ms;
}
.drop:nth-child(6) {
  animation-delay: -790ms;
}
.drop:nth-child(7) {
  animation-delay: -900ms;
}
.drop:nth-child(8) {
  animation-delay: -1050ms;
}
.drop:nth-child(9) {
  animation-delay: -1130ms;
}
.drop:nth-child(10) {
  animation-delay: -1300ms;
}
@keyframes drop {
  50% {
    height: 45px;
    opacity: 0;
  }
  51% {
    opacity: 0;
  }
  100% {
    height: 1px;
    opacity: 0;
  }
}

@keyframes preloader {
  99% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

.text {
  font-family: "Segoe UI", sans-serif;
  letter-spacing: 1px;
  text-align: center;
  margin-left: -43px;
  margin-top: 0;
  color: #efefef;
  width: 200px;
}

@media screen and (min-width: 450px) {
  .week__date,
  .week__high,
  .week__low,
  .week__icon,
  .week__rain,
  .week__wind {
    width: 16.666666%;
    margin-bottom: initial;
  }

  .week__date {
    order: -2;
  }

  .week__icon {
    order: -1;
  }
}

</style>
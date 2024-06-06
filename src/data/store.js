import { reactive } from 'vue';

let store = reactive({
  // sezione dei data generali che serviranno più o meno a tutti possibilmente da non toccare
  posts: {
    rice: {
      title: 'Hygenic Recipe To Prepare Rice',
      date: 'December 26, 2022',
      badge: ['Food'],
      img: 'food-3.webp',
    },
    meal: {
      title: 'The Best Time To Have A Meal',
      date: 'December 26, 2022',
      badge: ['Food'],
      img: 'food-2.webp',
    },
    healthy: {
      title: 'The Best Healty Foods',
      date: 'December 26, 2022',
      badge: ['Food'],
      img: 'food.webp',
    },
    winter: {
      title: 'The Best Winter Outfits',
      date: 'December 26, 2022',
      badge: ['Fashion'],
      img: 'winter.webp',
    },
    photographer: {
      title: "Beginner Photographer's Mistakes",
      date: 'December 26, 2022',
      badge: ['Fashion'],
      img: 'photographer.webp',
    },
    ideas: {
      title: 'Live Ideas You Might Be Anime',
      date: 'December 26, 2022',
      badge: ['Culture', 'Stories'],
      img: 'stories.webp',
    },
    visit: {
      title: 'Reasons To Visit France',
      date: 'December 26, 2022',
      badge: ['Lifestyle', 'Travel'],
      img: 'visit.webp',
    },
    travel: {
      title: 'Traveling Alone Is Awesome',
      date: 'December 26, 2022',
      badge: ['Stories', 'Travel'],
      img: 'travel.webp',
    },
    success: {
      title: 'The Best Success Stories',
      date: 'December 26, 2022',
      badge: ['Culture', 'Stories'],
      img: 'success.webp',
    },
    trip: {
      title: 'Places For A Road Trip',
      date: 'December 26, 2022',
      badge: ['Lifestyle', 'Stories', 'Travel'],
      img: 'landscape.webp',
    },
    music: {
      title: 'Music The Love Of My Life',
      date: 'December 26, 2022',
      badge: ['Culture', 'Lifestyle'],
      img: 'music.webp',
    },
    fashion: {
      title: 'Fashion Trend Now A Days',
      date: 'December 26, 2022',
      badge: ['Fashion', 'Lifestyle'],
      img: 'fashion.webp',
    },
  },
  logos: {
    logoImg: 'anime-logo.webp',
    logoImgWhite: 'anime-logo-white.webp',
    icon: 'logo-icon.webp',
    channel: 'channel.webp',
  },
  banners: {
    headerBanner: 'header-banner.webp',
    pageBanner: 'page-banner.webp',
  },
  imgTrailer: {
    trailerImg1: 'trailer-img-1.webp',
    trailerImg2: 'trailer-img-2.webp',
  },
  error: {
    errorImg: '404.webp',
  },
  // ---------------> sezione dedicata ad header e footer di Francesco <--------------
  header: {
    // da riempire all'occorrenza
  },
  // ---------------> sezione dedicata ai caroselli di Arnaldo <--------------
  carousel: {
    // da riempire all'occorrenza
  },
  // ---------------> sezione dedicata al main di Giacomo <--------------
  main: {
    mainPost: '',
    temporaryPost: [
      {
        title: 'Live Ideas You Might Be Anime',
        date: 'December 26, 2022',
        badge: ['Culture', 'Stories'],
        img: 'stories.webp',
      },
      {
        title: 'Reasons To Visit France',
        date: 'December 26, 2022',
        badge: ['Lifestyle', 'Travel'],
        img: 'visit.webp',
      },
      {
        title: 'Traveling Alone Is Awesome',
        date: 'December 26, 2022',
        badge: ['Stories', 'Travel'],
        img: 'travel.webp',
      },
      {
        title: 'The Best Success Stories',
        date: 'December 26, 2022',
        badge: ['Culture', 'Stories'],
        img: 'success.webp',
      },
      {
        title: 'Places For A Road Trip',
        date: 'December 26, 2022',
        badge: ['Lifestyle', 'Stories', 'Travel'],
        img: 'landscape.webp',
      },
      {
        title: 'Music The Love Of My Life',
        date: 'December 26, 2022',
        badge: ['Culture', 'Lifestyle'],
        img: 'music.webp',
      },
      {
        title: 'Fashion Trend Now A Days',
        date: 'December 26, 2022',
        badge: ['Fashion', 'Lifestyle'],
        img: 'fashion.webp',
      },
    ],
  },
  // ---------------> sezione dedicata ai video trailer di Samian <--------------
  trailers: {
    // da riempire all'occorrenza
  },
});

export default store;

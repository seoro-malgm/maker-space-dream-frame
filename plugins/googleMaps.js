// plugins/google-maps.js

import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.API_KEY,
    libraries: "places", // Add any additional libraries you need
  },
});

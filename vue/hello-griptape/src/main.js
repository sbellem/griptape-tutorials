import { createApp } from 'vue';
import App from './App.vue';
import {
  gripApp,
  getKeplrAccountProvider
} from '@stakeordie/griptape.js';

// Define node to connect to.
// See https://github.com/scrtlabs/api-registry for endpoint URLs
// const restUrl = 'https://api.pulsar.griptapejs.com';
const restUrl = 'https://api.pulsar.scrttestnet.com';

// Get the Keplr provider.
const provider = getKeplrAccountProvider();

// Define how the app is going to be mounted.
function runApp() {
  createApp(App)
    .mount('#app');
}

// Grip (AKA initialize) your application.
gripApp(restUrl, provider, runApp);

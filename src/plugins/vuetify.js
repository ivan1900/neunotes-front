import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import es from 'vuetify/lib/locale/es';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        primary: '#1ab394',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        background: '#f3f3f4',
        logoTitle: '#E6E6E6',
        subtitle: '#676a6c',
        greyText: '#999c9e',
        menuBackground: '#2f4050'
      },
    },
  },
    lang: {
      locales: { es },
      current: 'es',
    },
});

import { type Preview, setup, Decorator } from "@storybook/vue3";
import { type App, ref, h } from "vue";
import skLocale from "../src/lang/sk.json";
import enLocale from "../src/lang/en.json";
import { createI18n , useI18n } from "vue-i18n";



setup((app: App) => {
  const i18n = createI18n({
    useScope: "global",
    locale: 'sk',
    legacy: false,
    globalInjection: true,
    messages: {
      sk: skLocale,
      en: enLocale,
    },
  });
  app.use(i18n);
});
const locale = ref('sk');
const withLocale: Decorator = (Story, context) => {
  locale.value = context.globals.locale || 'en'
  useI18n().locale = locale.value
  const story = Story()
  return () => {
    h('div',{locale},{ story: ()=> h(story,{...context.args})})
  }
};

const preview: Preview = {
  decorators: [withLocale],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "background",
      values: [{ name: "background", value: "#F0F0F0" }],
    },
  },
  globalTypes: {
    
    //https://github.com/storybookjs/storybook/issues/22900
    locale: {
      name: "Locale",
      defaultValue: "sk",
      description: "Internationalization locale",
      toolbar: {
        icon: "globe",
        items: [
          {
            value: "sk",
            title: "Slovak",
          },
          {
            value: "en",
            title: "English",
          },
        ],
        dynamicTitle: true,
      },
    },
  },
};

export default preview;

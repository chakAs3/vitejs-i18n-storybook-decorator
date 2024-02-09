import ButtonComponent from './ButtonComponent.vue';
import { useI18n } from 'vue-i18n';

export default {
    component: ButtonComponent,
};

export const Primary = {
    render: (args) => ({
        components: { ButtonComponent },
        setup() {
            return { args };
        },
        template: `<ButtonComponent v-bind="args" />`
    }),
};
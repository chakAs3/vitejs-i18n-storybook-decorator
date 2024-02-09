<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();

function onClick() {
  console.log(locale.value);
  if (locale.value === 'sk') {
    locale.value = 'en';
  } else if (locale.value === 'en') {
    locale.value = 'sk';
  }
}
</script>

<template>
  <button type="button" class="storybook-button--primary" @click="onClick">
    {{ $t('language') }}
  </button>
  <div>
    {{ t('language') }}
  </div>
</template>

<style scoped></style>

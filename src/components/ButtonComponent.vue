<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();


</script>

<template>

  <h1>
    {{ t('language') }}
  </h1>
  <h2>
    {{ t('hello') }}
  </h2>
  <p>
  [Story]  Current Language :{{ locale }}
  </p>
</template>

<style scoped></style>

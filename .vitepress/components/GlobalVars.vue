<template>
  <span v-if="value">{{ value }}</span>
  <span v-else>[Unknown variable: {{ name }}]</span>
</template>

<script>
import { getCurrentConfig } from '../config/instances.js'

const currentConfig = getCurrentConfig()

export default {
  name: 'GlobalVars',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    value() {
      return currentConfig[this.name] || null
    }
  }
}
</script>

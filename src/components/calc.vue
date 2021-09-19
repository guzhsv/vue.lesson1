<template>
  <div>
    <div class="calc">
      <input v-model.number="operand1" type="number" class="indent">
      <input v-model.number="operand2" type="number">
      = {{result}}
    </div>
    <div class="keyboard">
      <button v-on:click = "result = operand1 + operand2">+</button>
      <button v-on:click = "subtract(operand1, operand2)">-</button>
      <button v-on:click = "divide(operand1, operand2)">/</button>
      <button v-on:click = "mult(operand1, operand2)">*</button>
      <button v-on:click = "degree(operand1, operand2)">Возведение в степень</button>
      <button v-on:click = "integer(operand1, operand2)">Целочисленное деление</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Calculator',
  data () {
    return {
      operand1: 0,
      operand2: 0,
      result: 0
    }
  },
  methods: {
    subtract (operand1, operand2) {
      this.result = operand1 - operand2
    },
    divide () {
      const { operand1, operand2 } = this
      this.result = operand1 / operand2
    },
    mult () {
      const { operand1, operand2 } = this
      this.result = operand1 * operand2
    },
    degree () {
      const { operand1, operand2 } = this
      this.result = Math.pow(operand1, operand2)
    },
    integer () {
      this.result = Math.trunc(this.operand1 / this.operand2)
    }
  }
}

</script>

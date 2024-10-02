<script>
export default {
  name: 'mental-state-exam-analytics',
  props: {
    examCount: Number,
    highestScore: Number,
    lowestScore: Number,
    averageScore: Number
  }
};
</script>

<template>
  <div class="card">
    <h2>Mental State Exam Analytics</h2>
    <h3>Score Analytics</h3>
    <ul>
      <li>Exam Count: {{ examCount }}</li>
      <li>Highest Score: {{ highestScore }}</li>
      <li>Lowest Score: {{ lowestScore }}</li>
      <li>Average Score: {{ averageScore }}</li>
    </ul>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
}
</style>
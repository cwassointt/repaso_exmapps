<!-- src/nursing/components/examiner-item.component.vue -->
<script>
export default {
  name: "examiner-item",
  props: {
    examiner: {
      type: Object,
      required: true,
      default: () => ({
        fullName: '',
        nationalProviderIdentifier: '',
        exams: []
      })
    }
  },
  computed: {
    currentExamCount() {
      return this.examiner.exams ? this.examiner.exams.length : 0;
    },
    averageTotalScore() {
      if (!this.examiner.exams || this.examiner.exams.length === 0) return 0;
      const totalScores = this.examiner.exams.map(exam =>
          exam.orientationScore +
          exam.registrationScore +
          exam.attentionAndCalculationScore +
          exam.recallScore +
          exam.languageScore
      );
      return totalScores.reduce((a, b) => a + b, 0) / totalScores.length;
    }
  }
}
</script>

<template>
  <pv-card class="card">
    <template #header>{{ examiner.firstName }} {{ examiner.lastName }}</template>
    <template #title>NPI: {{ examiner.nationalProviderIdentifier }}</template>
    <template #subtitle>{{$t('examinerItem.subtitle')}}</template>
    <template #content>
      <ul>
        <li>{{ $t('examinerItem.currentExamCount') }} {{ currentExamCount }}</li>
        <li>{{ $t('examinerItem.averageExamTotal') }} {{ averageTotalScore.toFixed(2) }}</li>
      </ul>
    </template>
  </pv-card>
</template>

<style scoped>
.card {
  background: #D1E4FA;
  border-radius: 10px;
  color: black;
  margin: 10px;
  width: calc(50% - 20px);
  display: inline-block;
  vertical-align: top;
}
</style>
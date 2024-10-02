<script>
import { MentalStateExamService } from "../../shared/services/mental-state-exam.service.js";
import { MentalStateExam } from "../../shared/model/mental-state-exam.entity.js";

export default {
  name: "home",
  data() {
    return {
      exams: [],
      totalScores: [],
      exam: new MentalStateExam({}),
      mentalStateExamService: new MentalStateExamService(),
    };
  },
  methods: {
    calculateTotalScores() {
      this.totalScores = this.exams.map(exam =>
          exam.orientationScore +
          exam.registrationScore +
          exam.attentionAndCalculationScore +
          exam.recallScore +
          exam.languageScore
      );
    },
    getHighestScore() {
      return this.totalScores.length ? Math.max(...this.totalScores) : 0;
    },
    getLowestScore() {
      return this.totalScores.length ? Math.min(...this.totalScores) : 0;
    },
    getAverageScore() {
      return this.totalScores.length ? this.totalScores.reduce((a, b) => a + b, 0) / this.totalScores.length : 0;
    }
  },
  created() {
    this.mentalStateExamService.getAll().then(response => {
      if (Array.isArray(response.data)) {
        this.exams = response.data.map(exam => new MentalStateExam(exam));
        this.calculateTotalScores();
      } else {
        console.error('Unexpected response format:', response.data);
      }
      console.log(this.exams);
    }).catch(error => console.error(error));
  }
}
</script>

<template>
  <h1>{{$t('homeCard.title')}}</h1>
  <p>{{$t('homeCard.message')}}</p>
  <pv-card class="card">
    <template #title>{{ $t('homeCard.cardTitle') }}</template>
    <template #subtitle>{{ $t('homeCard.cardSubtitle') }}</template>
    <template #content>
      <ul>
        <li>{{ $t('homeCard.examCount') }} {{ exams.length }}</li>
        <li>{{ $t('homeCard.highestScore') }} {{ getHighestScore() }}</li>
        <li>{{ $t('homeCard.lowestScore') }} {{ getLowestScore() }}</li>
        <li>{{ $t('homeCard.averageScore') }} {{ getAverageScore() }}</li>
      </ul>
    </template>
  </pv-card>
</template>

<style scoped>
.card {
  background: #D1E4FA;
  border-radius: 10px;
  color: black;
}
</style>
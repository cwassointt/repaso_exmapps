<script>
import axios from 'axios';

export default {
  name: 'examiner-performance-overview',
  data() {
    return {
      examiners: [],
      exams: []
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const [examinersResponse, examsResponse] = await Promise.all([
          axios.get('http://localhost:3000/examiners'),
          axios.get('http://localhost:3000/mental-state-exams')
        ]);
        this.examiners = examinersResponse.data;
        this.exams = examsResponse.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    getExaminerExams(examinerId) {
      return this.exams.filter(exam => exam.examinerId === examinerId);
    },
    calculateAverageScore(exams) {
      if (exams.length === 0) return 0;
      const totalScore = exams.reduce((sum, exam) => sum + (exam.orientationScore + exam.registrationScore + exam.attentionAndCalculationScore + exam.recallScore + exam.languageScore), 0);
      return (totalScore / exams.length).toFixed(2);
    }
  }
};
</script>

<template>
  <div class="w-full">
    <h1>Examiner Performance Overview</h1>
    <div class="cards">
      <div v-for="examiner in examiners" :key="examiner.id" class="card">
        <div class="card-header">{{ examiner.firstName }} {{ examiner.lastName }}</div>
        <div class="card-title">NPI: {{ examiner.nationalProviderIdentifier }}</div>
        <div class="card-subtitle">Mental State Exam Performance</div>
        <div class="card-content">
          <p>Current Assigned Mental State Exam Count: {{ getExaminerExams(examiner.id).length }}</p>
          <p>Average Assigned Mental State Exam Total Score: {{ calculateAverageScore(getExaminerExams(examiner.id)) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cards {
  display: flex;
  flex-wrap: wrap;
}
.card {
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 10px;
  width: calc(50% - 20px);
}
</style>
<script>
import {ExamService} from '../../nursing/services/exam.service';
import MentalStateExamAnalytics from "../../nursing/components/mental-state-examn-analytics.component.vue";
export default {
  name: 'home',
  components: {
    MentalStateExamAnalytics
  },
  data() {
    return {
      exams: [],
      examCount: 0,
      highestScore: 0,
      lowestScore: 0,
      averageScore: 0
    };
  },
  created() {
    this.fetchExamData();
  },
  methods: {
    async fetchExamData() {
      try {
        const response = await ExamService.getExams();
        this.exams = response.data;
        this.calculateAnalytics();
      } catch (error) {
        console.error('Error fetching exam data:', error);
      }
    },
    calculateAnalytics() {
      if (this.exams.length > 0) {
        this.examCount = this.exams.length;
        this.highestScore = Math.max(...this.exams.map(exam => exam.orientationScore + exam.registrationScore + exam.attentionAndCalculationScore + exam.recallScore + exam.languageScore));
        this.lowestScore = Math.min(...this.exams.map(exam => exam.orientationScore + exam.registrationScore + exam.attentionAndCalculationScore + exam.recallScore + exam.languageScore));
        this.averageScore = (this.exams.reduce((sum, exam) => sum + (exam.orientationScore + exam.registrationScore + exam.attentionAndCalculationScore + exam.recallScore + exam.languageScore), 0) / this.examCount).toFixed(2);
      }
    }
  }
};
</script>

<template>
  <div class="w-full">
    <h1>Home</h1>
    <p>Welcome to HIGN</p>
    <mental-state-exam-analytics
        :examCount="examCount"
        :highestScore="highestScore"
        :lowestScore="lowestScore"
        :averageScore="averageScore"
    />
  </div>
</template>

<style scoped>
</style>
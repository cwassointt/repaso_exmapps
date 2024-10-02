<!-- src/nursing/components/ExaminerPerformanceOverview.vue -->
<script>
import ExaminerItemComponent from "./examiner-item.component.vue";
import { ExaminerService } from "../services/examiner.service.js"
import { MentalStateExamService } from "../../shared/services/mental-state-exam.service.js";

export default {
  name: "examiner-list",
  components: {
    ExaminerItemComponent
  },
  data() {
    return {
      examiners: []
    };
  },
  created() {
    const examinerService = new ExaminerService();
    const mentalStateExamService = new MentalStateExamService();

    examinerService.getAll().then(response => {
      if (Array.isArray(response.data)) {
        this.examiners = response.data;

        // Fetch exams and assign them to the respective examiners
        mentalStateExamService.getAll().then(examResponse => {
          if (Array.isArray(examResponse.data)) {
            const exams = examResponse.data;
            this.examiners.forEach(examiner => {
              examiner.exams = exams.filter(exam => exam.examinerId === examiner.id);
            });
          } else {
            console.error('Unexpected response format:', examResponse.data);
          }
        }).catch(error => console.error(error));
      } else {
        console.error('Unexpected response format:', response.data);
      }
    }).catch(error => console.error(error));
  }
}
</script>

<template>
  <div>
    <h1>{{$t('examinerList.title')}}</h1>
    <div class="cards-container">
      <ExaminerItemComponent v-for="examiner in examiners" :key="examiner.id" :examiner="examiner" />
    </div>
  </div>
</template>

<style scoped>
.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
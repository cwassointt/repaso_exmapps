import http from '../../shared/services/http-common';

export class ExaminerService {
    resourceEndpoint = '/mental-state-exams';
    getAll() {
        return http.get(this.resourceEndpoint);
    }

    getById(id) {
        return http.get(`${this.resourceEndpoint}/${id}`);
    }
}


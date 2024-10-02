import http from '../../shared/services/http-common';

export class ExamService {
    resourceEndpoint = '/mental-state-exams';
    getAll() {
        return http.get(this.resourceEndpoint);
    }

    getById(id) {
        return http.get(`${this.resourceEndpoint}/${id}`);
    }
}


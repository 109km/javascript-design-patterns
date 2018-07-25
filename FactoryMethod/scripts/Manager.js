import {
  Developer,
  Designer
} from './Interviewer.js';

class HiringManager {
  takeInterview(name) {
    const interviewer = this.makeInterviewer();
    interviewer.askQuestions(name);
  }
}

export class DevelopmentManager extends HiringManager {
  constructor(name) {
    super();
    this.name = name;
  }
  makeInterviewer() {
    return new Developer(this.name);
  }
}

export class DesignerManager extends HiringManager {
  constructor(name) {
    super();
    this.name = name;
  }
  makeInterviewer() {
    return new Designer(this.name);
  }
}
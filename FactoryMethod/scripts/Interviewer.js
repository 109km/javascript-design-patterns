export class Developer{
  constructor(name){
    this.name = name;
  }
  askQuestions(intervieweeName){
    console.log(`${this.name} is asking ${intervieweeName} about tree search.`);
  }
}

export class Designer{
  constructor(name){
    this.name = name;
  }
  askQuestions(intervieweeName){
    console.log(`${this.name} is asking ${intervieweeName} about painting skills`);
  }
}


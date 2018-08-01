export default class ComputerFacade {
  constructor(computer) {
    this.computer = computer;
  }
  turnOn() {
    this.computer.startCPU();
    this.computer.startGPU();
    this.computer.connectInternet();
  }
  turnOff() {
    this.computer.closeAllSoftwares();
    this.computer.closeOperationSystem();
  }
}
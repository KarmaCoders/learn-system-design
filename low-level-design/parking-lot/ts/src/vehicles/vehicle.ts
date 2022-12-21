import { VehicleType } from "./vehicle.type";

export abstract class Vehicle {
  private vehicleRegisterNumber: string;
  private vehicleType: VehicleType;

  constructor(vehicleRegisterNumber: string, vehicleType: VehicleType) {
    this.vehicleRegisterNumber = vehicleRegisterNumber;
    this.vehicleType = vehicleType;
  }

  public getVehicleType() {
    return this.vehicleType;
  }

  public getVehicleRegisterNumber() {
    return this.vehicleRegisterNumber;
  }
}

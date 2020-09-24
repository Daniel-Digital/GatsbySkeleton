export default function getTruckTitle(truck: any, truckMake?: string) {
  return `${truck.modelYear || ''} ${truck.make?.name || truckMake || ''} ${
    truck.model || ''
  }`;
}

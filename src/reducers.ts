import { UPDATE_CHARGER_DETAIL } from "./actions";
export interface SystemState {
  installations: [
    {
      chargers: [
        {
          id: string;
          name: string;
          installationId: string;
          connectedVehicle: {
            batteryCapacityWh: number;
            charging: false;
            chargeCurrent: 0;
            availableCurrent: number;
            batteryChargeWh: number;
          };
          allocatedCurrent: number;
        }
      ];
      id: string;
      name: string;
      circuitBreakerCurrent: number;
      circuitBreakerTripped: string;
    }
  ];
}


function reducer(state = {installation:[]}, action: any) {
  switch (action.type) {
    case UPDATE_CHARGER_DETAIL:
      return {
        ...state,
        installations: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;

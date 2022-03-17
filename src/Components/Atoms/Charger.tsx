import React, { useCallback, useContext, useState } from "react";
import Button from "./Button";
import ApiServiceContext from "../../Contexts/ApiContext";
import { updateChargerDetails } from "../../actions";
import { useDispatch } from "react-redux";
//import { SystemState } from "../../reducers";

export interface ChargerProps {
  chargerDetail?: any;
}

const Charger: React.FC<ChargerProps> = ({ chargerDetail }) => {
  const { apiService } = useContext(ApiServiceContext);
  const [state, setState] = useState(chargerDetail);
  const dispatch = useDispatch();
  /*   const installations = useSelector(
    (state: SystemState) => state.installations
  ); */

  const URL = "installations";
debugger;
  const connectCharge = useCallback(
    (id, chargingStatus) => {
      const url = `chargers/${id}/${chargingStatus}`;
      apiService
        .post(url)
        .then((response: any) => {
          /*    installations.map((i: any) => {
          return i.chargers.map((j: any, k: number) => {
            if (j.id === response.data.id) {
              i.chargers[k] = response.data;
            }
          });
        }); */
          setState(response.data); //update local state
          //dispatch(updateChargerDetails(installations));
        })
        .then(() => { //Repeating code can be import from common fuction
          apiService
            .fetch(URL)
            .then((response: any) => {
              if (response.status >= 400 && response.status < 600)
                throw new Error(response.statusText);
              else return response.data;
            })
            .then((data: any) => {
              dispatch(updateChargerDetails(data));
            });
        });
    },
    [apiService, dispatch]
  );
  const chargingStatus = state.connectedVehicle ? "disconnect" : "connect";

  return (
    <div id={state.id}>
      <strong>{state.name}</strong>
      <div>
        Charging:{" "}
        <strong>
          {state?.connectedVehicle?.batteryChargeWh &&
            state?.connectedVehicle?.batteryChargeWh / 1000}
        </strong>
        <Button
          text={chargingStatus}
          onClick={() => connectCharge(state.id, chargingStatus)}
        ></Button>
      </div>
    </div>
  );
};

export default Charger;

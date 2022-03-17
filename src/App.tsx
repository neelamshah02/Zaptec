import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateChargerDetails } from "./actions";
import { SystemState } from "./reducers";
import "./App.css";
import Charger from "./Components/Atoms/Charger";
import ApiServiceContext from "./Contexts/ApiContext";
import styled from "styled-components";

function App() {
  const URL = "installations";
  const { apiService } = useContext(ApiServiceContext);
  const dispatch = useDispatch();
  const installations = useSelector(
    (state: SystemState) => state.installations
  );

  useEffect(() => {
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
  }, [apiService, dispatch]);

  return (
    <div className="App">
      <div className="App-header">Zaptec</div>
      {installations &&
        installations.map((i: any, n: any) => {
          return (
            <div id={n}>
              {i.circuitBreakerTripped && (
                <ErrorDiv>Circuit breaker has been tripped!</ErrorDiv>
              )}

              {i.name}
              {i.chargers.map((detail: any) => (
                <Charger chargerDetail={detail}></Charger>
              ))}
            </div>
          );
        })}
    </div>
  );
}
const ErrorDiv = styled.div`
  color: red;
`;
export default App;

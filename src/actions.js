export const UPDATE_CHARGER_DETAIL = "UPDATE_CHARGER_DETAIL";

export function updateChargerDetails(chargerDetails) {
  return { type: UPDATE_CHARGER_DETAIL, payload: chargerDetails };
}

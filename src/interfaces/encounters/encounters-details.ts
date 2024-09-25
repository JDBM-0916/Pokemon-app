import { Encounter } from "./encounter";
import { EncounterCondition } from "./encounter-conditions";
import { ValuesCondition } from "./values-encounter";

export interface EncounterDetails {
  details: Encounter;
  conditions: EncounterCondition;
  valuesConditions: ValuesCondition;
}

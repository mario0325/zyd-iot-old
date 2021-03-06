import {SystemManufacturer, SystemType} from "@/constants";
import {IBuilding} from "@interfaces/building";
import {IDatabaseUser} from "@interfaces/user";

export interface ISystem {
  id?: number,
  building?: IBuilding,
  building_name?: string,
  building_street?: string,
  building_city?: string,
  users?: IDatabaseUser[],
  name: string,
  type: SystemType,
  hpwh_primary_manufacturer: SystemManufacturer,
  hpwh_primary_number: number,
  hpwh_primary_model: string,
  hpwh_primary_btuhr: number,
  hpwh_recirc_manufacturer: SystemManufacturer,
  hpwh_recirc_number: number,
  hpwh_recirc_model: string,
  hpwh_recirc_btuhr: number,
  storage_primary_number: number,
  storage_primary_total_gallon: number,
  storage_recirc_number: number,
  storage_recirc_total_gallon: number,
  storage_locus_total_gallon: number,
  resistance_primary_kw: number,
  resistance_recirc_kw: number,
  hybrid_hpwh_gas: boolean,
  location: string,
  notes?: string,
  default_temp_params? : string,
  default_flow_params? : string,
  active: boolean,
  created_at: Date,
  updated_at: Date,
}
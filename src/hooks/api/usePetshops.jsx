import useAsync from '../useAsync';

import * as petshopApi from "../../services/petshopsApi"


export default function usePetshop() {
  const {
    data,
    loading,
    error,
    act: getPetshops,
  } = useAsync(petshopApi.getPetshops, true);

  return {
    data,
    loading,
    error,
    getPetshops,
  };
}
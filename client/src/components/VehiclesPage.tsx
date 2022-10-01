import React from 'react';
import { useLoaderData } from 'react-router-dom';

function VehiclesPage() {
  const vehicles = useLoaderData();
  console.log(vehicles)
  return (<div>VEHICLES PAGE</div> );
}

export default VehiclesPage;
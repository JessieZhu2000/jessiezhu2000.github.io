// Centralised pricing constants (GBP)
export const SERVICE_PRICES = {
  WALKING: 25,
  WEEKLY_WALKING: 100, // 5 x walks (Mon–Fri) discounted ~20%
  BOARDING: 50,
  CAT_VISIT: 30,
};

export function computeSelectedServicesTotal(services){
  if(!services) return 0;
  let total = 0;
  if(services.weeklyWalking){
    total += SERVICE_PRICES.WEEKLY_WALKING;
  } else if(services.walking){
    total += SERVICE_PRICES.WALKING;
  }
  if(services.boarding){
    total += SERVICE_PRICES.BOARDING;
  }
  if(services.catVisit){
    total += SERVICE_PRICES.CAT_VISIT;
  }
  return total;
}

export function selectedServicesBreakdown(services){
  if(!services) return [];
  const rows = [];
  if(services.weeklyWalking){
    rows.push({ label:'Weekly walking plan', price:SERVICE_PRICES.WEEKLY_WALKING });
  } else if(services.walking){
    rows.push({ label:'Dog walking (60 mins)', price:SERVICE_PRICES.WALKING });
  }
  if(services.boarding){ rows.push({ label:'Dog boarding (per day)', price:SERVICE_PRICES.BOARDING }); }
  if(services.catVisit){ rows.push({ label:'Cat / small pet visit', price:SERVICE_PRICES.CAT_VISIT }); }
  return rows;
}

export const formatGBP = (n)=> new Intl.NumberFormat('en-GB',{ style:'currency', currency:'GBP', minimumFractionDigits:2 }).format(n);

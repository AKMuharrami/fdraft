import Icon from '@mdi/react';
import { mdiPodiumSilver } from '@mdi/js';
export const Ingredient = {
    icon: "",
    label: ""
  }
  
  export const allIngredients = [
    { icon: "🥉", label: "البرونزية",col:'#6D4534',sha:'1px 1px 7px rgb(256 176 46 / 80%)', price:"70 ريال" ,body:"في هذه الباقة نوفر موقعا ثابتا غير تفاعلي، مع كونه قابلا للتأقلم مع مختلف أحجام الشاشات، وكذلك نوفر صفحات متعددة للموقع كالظاهرة في هذا الموقع أو على حسب طلب الزبون"},
    { icon: "🥈", label: "الفضية",col:'#636363',sha:'1px 1px 7px rgb(190 190 190 / 80%)', price:"200 ريال" ,body:"في هذه الباقة نوفر موقعا تفاعليا مع خصائص عرض تفاعلية مختلفة، مع كونه قابلا للتأقلم مع مختلف أحجام الشاشات، وكذلك نوفر صفحات متعددة للموقع كالظاهرة في هذا الموقع أو على حسب طلب الزبون" },
    { icon: "🥇", label: "الذهبية",col:'#402A32',sha:'1px 1px 7px rgb(211 136 62 / 80%)', price:"250 ريال" ,body:"في هذه الباقة نوفر موقعا تفاعليا مع خصائص عرض تفاعلية مختلفة، مع إمكانية تغيير لغة الموقع على حسب اللغة الإضافية التي يريدها الزبون، مع كونه قابلا للتأقلم مع مختلف أحجام الشاشات، وكذلك نوفر صفحات متعددة للموقع كالظاهرة في هذا الموقع أو على حسب طلب الزبون" }
  ];
  
  const [tomato, lettuce, cheese] = allIngredients;
  export const initialTabs = [tomato, lettuce, cheese];
  
  export function getNextIngredient(
    ingredients= Ingredient[""]
  ) {
    const existing = new Set(ingredients);
    return allIngredients.find((ingredient) => !existing.has(ingredient));
  }
import Icon from '@mdi/react';
import { mdiPodiumSilver } from '@mdi/js';
export const Ingredient = {
    icon: "",
    label: ""
  }
  
  export const allIngredients = [
    { icon: "🥉", label: "Bronze",col:'#6D4534',sha:'1px 1px 7px rgb(256 176 46 / 80%)', price:"70 omr" ,body:"In this package we offer a static site with no interactive features although it's a responsive design (suitable for multiple devices), and also multiple pages for the website like the ones you see on this website or according to your request."},
    { icon: "🥈", label: "Silver",col:'#636363',sha:'1px 1px 7px rgb(190 190 190 / 80%)', price:"200 omr" ,body:"In this package we offer an interactive site with multiple responsive features, as well as a responsive design (suitable for multiple devices), and also multiple pages for the website like the ones you see on this website or according to your request." },
    { icon: "🥇", label: "Golden",col:'#402A32',sha:'1px 1px 7px rgb(211 136 62 / 80%)', price:"250 omr" ,body:"In this package we offer an interactive site with multiple responsive features, plus the ability to change the site's language (basically having two languages) as well as a responsive design (suitable for multiple devices), and also multiple pages for the website like the ones you see on this website or according to your request." }
  ];
  
  const [tomato, lettuce, cheese] = allIngredients;
  export const initialTabs = [tomato, lettuce, cheese];
  
  export function getNextIngredient(
    ingredients= Ingredient[""]
  ) {
    const existing = new Set(ingredients);
    return allIngredients.find((ingredient) => !existing.has(ingredient));
  }
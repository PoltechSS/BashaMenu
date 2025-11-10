import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Menu } from '../menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
  ,
   animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(20px)' }),
            stagger('250ms', [
              animate(
                '500ms ease-out',
                style({ opacity: 1, transform: 'translateY(0)' })
              )
            ])
          ],
          { optional: true }
        )
      ])
    ])
  ]
})
export class MenuComponent {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
 categories: string[] = [
    'Biryani', 'Budget Biryani', 'Basha Bhai Combo', 'Soup',
    'South Indian Starter','Chinese Starter','Egg',
    'Chinese Rice&Noodles', 'Sizzlers','Gravy','Tiffin', 
    'Desserts', 'Evening Special', 'Fresh Fruit Juice'
  ];

  categoryIcons: { [key: string]: string } = {
        
   'Evening Special': 'bi-basket',          
           
};

  categoryImages: { [key: string]: string } = {

       'Fresh Fruit Juice':'assets/img/juice.png',
     'Desserts':'assets/img/desserts.png',
       'Tiffin':'assets/img/tiffin.png',
      'Chinese Starter':'assets/img/chinesstarer.png',
    'South Indian Starter':'assets/img/indianstarter.png',
    'Egg':'assets/img/egg.png',
    'Sizzlers':'assets/img/Sizzlers.png',
      'Basha Bhai Combo':'assets/img/combo.png',
        'Soup':'assets/img/soup.png',
  'Budget Biryani':'assets/img/BudgetBiryani.png',
      'Gravy': 'assets/img/gravy.png',
    'Biryani': 'assets/img/biryaniicon.png',
    'Chinese Rice&Noodles': 'assets/img/ChineseRice&Noodles.png',
  };

  // Default selected category
  selectedCategory: string = 'Biryani';

  // Full menu list
  menuItems: Menu[] = [

    // === Biryani ===
    {
      name: 'Madras Mutton Biryani', price: 24, image: 'assets/img/briyani/MADRASMUTTON.png', category: 'Biryani',
      types: 'Banana leaf/Container'
    },
    {
      name: 'Madras Chicken Biryani', price: 18, image: 'assets/img/briyani/MADRASCHICKEN.png', category: 'Biryani',
      types: 'Banana leaf/Container'
    },
    {
      name: 'Dindukkal Mutton Biryani', price: 25, image: 'assets/img/briyani/DindigulMutton.jpg', category: 'Biryani',
      types: 'Seeraga samba,Banana leaf/Container'
    },
    {
      name: 'Dindukkal Chicken Biryani', price: 19, image: 'assets/img/briyani/DindigulChicken1.JPG', category: 'Biryani',
      types: 'Seeraga samba,Banana leaf/Container'
    },
    {
      name: 'Covai Angannan Mutton Biryani', price: 24, image: 'assets/img/briyani/CovaiAngannanMuttonBiryaniMini.jpg', category: 'Biryani',
      types: 'Banana leaf/Container'
    },
    {
      name: 'Covai Angannan Chicken Biryani', price: 18, image: 'assets/img/briyani/Covai Angannan Chicken Biryani.png', category: 'Biryani',
      types: 'Banana leaf/Container'
    },
    {
      name: 'Egg Biryani', price: 14, image: 'assets/img/briyani/EggBiryani.jpg', category: 'Biryani',
      types: 'Bahmathi/Seeraga samba'
    },
    {
      name: 'King Fish Biryani', price: 28, image: 'assets/img/briyani/KingFishBiryani.jpg', category: 'Biryani',
      types: ''
    },
    {
      name: 'Chicken 65 Biryani', price: 22, image: 'assets/img/briyani/Chicken65Biryani.jpeg', category: 'Biryani',
      types: 'Bahmathi/Seeraga samba'
    },

     {
      name: 'Mixed Veg Biryani', price: 15, image: 'assets/img/briyani/MixedVegBiryani.jpg', category: 'Biryani',
      types: 'Bahmathi/Seeraga samba'
    },
     {
      name: 'Paneer Biryani', price: 15, image: 'assets/img/briyani/PaneerBiryani.jpg', category: 'Biryani',
      types: ''
    },
     {
      name: 'Mushroom Biryani', price: 15, image: 'assets/img/briyani/PaneerBiryani.jpg', category: 'Biryani',
      types: ''
    },
     {
      name: 'Paneer PULAO', price: 16, image: 'assets/img/briyani/PaneerBiryani.jpg', category: 'Biryani',
      types: ''
    },
     {
      name: 'VEG PULAO', price: 16, image: 'assets/img/briyani/VEGPULAO.png', category: 'Biryani',
      types: ''
    },
       {
      name: 'CASHEWNUT PULAO', price: 14, image: 'assets/img/briyani/CASHEWNUTPULAO.png', category: 'Biryani',
      types: ''
    },

    // === Budget Biryani's ==

   {
      name: 'Madras Mutton Biryani-Mini', price: 16, image: 'assets/img/BudgetBiryani/Madras Mutton Biryani.png', category: 'Budget Biryani',
      types: ''
    },
    {
      name: 'Madras Chicken Biryani-Mini', price: 12, image: 'assets/img/BudgetBiryani/Madras Chicken Biryani.png', category: 'Budget Biryani',
      types: ''
    },
    {
      name: 'Dindukkal Mutton Biryani-Mini', price: 16, image: 'assets/img/BudgetBiryani/Dindigul Mutton.png', category: 'Budget Biryani',
      types: 'Seeraga samba'
    },
    {
      name: 'Dindukkal Chicken Biryani-Mini', price: 12, image: 'assets/img/BudgetBiryani/Dindigul Chicken.png', category: 'Budget Biryani',
      types: 'Seeraga samba'
    },
    {
      name: 'Covai Angannan Mutton Biryani-Mini', price: 16, image: 'assets/img/BudgetBiryani/Covai Angannan Mutton Biryani.jpg', category: 'Budget Biryani',
      types: ''
    },
    {
      name: 'Covai Angannan Chicken Biryani-Mini', price: 12, image: 'assets/img/briyani/Covai Angannan Chicken Biryani.png', category: 'Budget Biryani',
      types: ''
    },

    // ===Basha Bhai Combo===
      {
      name: 'Chicken Biryani Combo', price: 23, image: 'assets/img/Basha Bhai Combo/Madras Chicken Biryani.jpg', category: 'Basha Bhai Combo',
      types: 'Madras / Dindukkal Chicken Biryani (1/4)+ Chicken 65 (2) + Chicken Gravy+ Parotta / Idiyappam (1) + Raitha + Sweet+ Brinjal Gravy/Dalcha'
    },
     {
      name: 'Mutton Biryani Combo', price: 25, image: 'assets/img/Basha Bhai Combo/Dindukal Mutton Biryani.jpg', category: 'Basha Bhai Combo',
      types: 'Madras / Dindukkal Mutton Biryani (1/4)+ Mutton Chukka + Mutton Gravy+ Parotta / Idiyappam (1)+ Raitha + Sweet + Brinjal Gravy/Dalcha'
    },
     {
      name: '50/50 Chicken Biryani Combo', price: 25, image: 'assets/img/Basha Bhai Combo/Madras Chicken Biryani -Meal for 2.png', category: 'Basha Bhai Combo',
      types: 'Madras Chicken Biryani (1/4) +Dindukkal Chicken Biryani (1/4)+ Chicken 65 (2) + Raitha + Sweet+ Brinjal Gravy+ Dalchaa'
    },
       {
      name: '50/50 Mutton Biryani Combo', price: 29, image: 'assets/img/Basha Bhai Combo/Madras Mutton Biryani - Meal for 2.png', category: 'Basha Bhai Combo',
      types: 'Madras Mutton Biryani (1/4) +Dindukkal Mutton Biryani (1/4)+ Mutton Chukka + Raitha + Sweet+ Brinjal Gravy+ Dalcha'
    },
     {
      name: 'Chinese Veg. Combo', price: 23, image: 'assets/img/Basha Bhai Combo/Chinese Veg. Combo.jpg', category: 'Basha Bhai Combo',
      types: 'Veg Fried Rice / Noodels+ Paneer / Mushroom Manchurian+ Gobi Fry + Raitha + Sweet'
    },
     {
      name: 'Chinese Non Veg. Combo', price: 23, image: 'assets/img/Basha Bhai Combo/Chinese Non Veg. Combo.jpg', category: 'Basha Bhai Combo',
      types: 'Chicken Fried Rice / Noodels+ Chicken Manchurian+ Chicken Fry + Raitha + Sweet'
    },


    // === SOUPS ===

     {
      name: 'Cheettinad Soup', price: '7/8', image: 'assets/img/soup/ChettinadSoup.png', category: 'Soup',
      types: 'Chicken/Mutton'
    },
     {
      name: 'Milagu Thani Soup', price: '10/12/13', image: 'assets/img/soup/MilaguThaniSoup.jpeg', category: 'Soup',
      types: 'Veg/Chicken/Mutton'
    },
      {
      name: 'Hot & Sour Soup', price: '10/12/13', image: 'assets/img/soup/Hot & Sour Soup.JPG', category: 'Soup',
      types: 'Veg/Chicken'
    },
     {
      name: 'Mushroom Soup', price: '10', image: 'assets/img/soup/Mushroom Soup.jpg', category: 'Soup',
      types: ''
    },
     {
      name: 'Manchow Soup', price: '9/11', image: 'assets/img/soup/ManchowSoup.JPG', category: 'Soup',
      types: 'Veg/Chicken'
    },
     {
      name: 'Sweet Corn Soup', price: '8/10', image: 'assets/img/soup/Sweet Corn Soup.jpg', category: 'Soup',
      types: 'Veg/Chicken'
    },
     {
      name: 'Sea Food Soup', price: '14', image: 'assets/img/soup/SEAFOODSOUP.png', category: 'Soup',
      types: ''
    },

    // === South Indian Starter==
    {
      name: 'Paneer 65', price: '15', image: 'assets/img/Indian  Starters/Paneer 65.jpg', category: 'South Indian Starter',
      types: ''
    },
     {
      name: 'Gobi 65', price: '13', image: 'assets/img/Indian  Starters/Gobi 65.jpg', category: 'South Indian Starter',
      types: ''
    },
     {
      name: 'Potato crispy Fry', price: '13', image: 'assets/img/Indian  Starters/Potato crispy Fry.jpg', category: 'South Indian Starter',
      types: ''
    },
     {
      name: 'Chicken Lollipop ', price: '18', image: 'assets/img/Indian  Starters/Chicken Lollipop.jpg', category: 'South Indian Starter',
      types: 'Deep Fry'
    },
     {
      name: 'Chicken 65', price: '16', image: 'assets/img/Indian  Starters/CHICKEN 65.jpg', category: 'South Indian Starter',
      types: '8 pieces'
    },
     {
      name: 'Chicken Bonless 65', price: '18', image: 'assets/img/Indian  Starters/Chicken Bonless 65.jpg', category: 'South Indian Starter',
      types: '8 pieces'
    },
     {
      name: 'Andhra Chicken 65', price: '18', image: 'assets/img/Indian  Starters/Andhra Chicken 65.jpg', category: 'South Indian Starter',
      types: '8 pieces'
    },
     {
      name: 'Chicken Milagu Pirattal', price: '17', image: 'assets/img/Indian  Starters/Chicken Milagu Pirattal.jpg', category: 'South Indian Starter',
      types: ''
    },
     {
      name: 'Chicken Chukka Fry', price: '17', image: 'assets/img/Indian  Starters/Chicken Chukka Fry.jpg', category: 'South Indian Starter',
      types: ''
    },
     {
      name: 'Mutton Kola Urundai', price: '20', image: 'assets/img/Indian  Starters/Mutton Kola Urundai.jpg', category: 'South Indian Starter',
      types: ''
    },
     {
      name: 'Mutton Chukka Fry', price: '20', image: 'assets/img/Indian  Starters/Mutton Chukka Fry.jpg', category: 'South Indian Starter',
      types: ''
    },
     {
      name: 'Mutton Milagu Pirattal', price: '20', image: 'assets/img/Indian  Starters/Mutton Milagu Pirattal.jpg', category: 'South Indian Starter',
      types: ''
    },
     {
      name: 'Mutton Suvarotti', price: '20', image: 'assets/img/Indian  Starters/Mutton Suvarotti.jpg', category: 'South Indian Starter',
      types: ''
    },
     {
      name: 'Mutton Nalli Fry', price: '25', image: 'assets/img/Indian  Starters/Mutton Nalli Fry.jpg', category: 'South Indian Starter',
      types: ''
    },
       {
      name: 'Mutton Boti Fry', price: '13', image: 'assets/img/Indian  Starters/Mutton Boti Fry.jpg', category: 'South Indian Starter',
      types: ''
    },
       {
      name: 'Prawn 65', price: '16', image: 'assets/img/Indian  Starters/Prawn 65.jpg', category: 'South Indian Starter',
      types: ''
    },
       {
      name: 'Prawn Thokku', price: '20', image: 'assets/img/Indian  Starters/Prawn Thokku.jpg', category: 'South Indian Starter',
      types: ''
    },
       {
      name: 'Nandu Varuval', price: '20', image: 'assets/img/Indian  Starters/Nandu Varuval.jpg', category: 'South Indian Starter',
      types: ''
    },
     {
      name: 'Sherry Fish Fry', price: '10', image: 'assets/img/Indian  Starters/Sherry Fish Fry.jpg', category: 'South Indian Starter',
      types: ''
    },
     {
      name: 'King Fish Fry', price: '18', image: 'assets/img/Indian  Starters/King Fish Fry.jpg', category: 'South Indian Starter',
      types: ''
    },
     {
      name: 'Nethili Fry', price: '20', image: 'assets/img/Indian  Starters/Nethili Fry.jpg', category: 'South Indian Starter',
      types: ''
    },

    // === Chinese Starter ==

     {
      name: 'Paneer Salt & Pepper Fry', price: '15', image: 'assets/img/Chinese Starters/Paneer Salt & Pepper Fry.jpg', category: 'Chinese Starter',
      types: ''
    },
     {
      name: 'Gobi Manchurian', price: '13', image: 'assets/img/Chinese Starters/Gobi Manchurian.jpg', category: 'Chinese Starter',
      types: ''
    },
     {
      name: 'Mushroom Pepper Salt', price: '13', image: 'assets/img/Chinese Starters/Mushroom Pepper Salt.jpg', category: 'Chinese Starter',
      types: ''
    },
     {
      name: 'Baby Corn Mushroom pepper salt', price: '15', image: 'assets/img/Chinese Starters/Baby Corn Mushroom pepper salt.jpg', category: 'Chinese Starter',
      types: ''
    },
     {
      name: 'Ladies Finger Pepper Salt', price: '13', image: 'assets/img/Chinese Starters/Ladies Finger Pepper Salt.jpg', category: 'Chinese Starter',
      types: ''
    },
     {
      name: 'Chicken Lollipop', price: '18', image: 'assets/img/Chinese Starters/Chicken Lollipop.jpg', category: 'Chinese Starter',
      types: 'Chinese Style'
    },
     {
      name: 'Dragon Chicken', price: '18', image: 'assets/img/Chinese Starters/Dragon Chicken.jpg', category: 'Chinese Starter',
      types: ''
    },
     {
      name: 'Hot Chicken Wings', price: '17', image: 'assets/img/Chinese Starters/Hot Chicken Wings.jpg', category: 'Chinese Starter',
      types: ''
    },
     {
      name: 'Black Pepper Chicken Fry', price: '17', image: 'assets/img/Chinese Starters/Black Pepper Chicken.jpg', category: 'Chinese Starter',
      types: ''
    },
     {
      name: 'Spicy Fried Chicken', price: '18', image: 'assets/img/Chinese Starters/Spicy Fried Chicken.jpg', category: 'Chinese Starter',
      types: 'Boneless'
    },
     {
      name: 'Crispy Chicken', price: '20', image: 'assets/img/Chinese Starters/Crispy Chicken.jpg', category: 'Chinese Starter',
      types: ''
    },
     {
      name: 'Chicken', price: '17', image: 'assets/img/Chinese Starters/Chicken.jpg', category: 'Chinese Starter',
      types: 'Chilly/Manchurian/Ginger/Garlic'
    },
     {
      name: 'Strips Chicken Green Pepper', price: '18', image: 'assets/img/Chinese Starters/Strips Chicken Green Pepper.jpg', category: 'Chinese Starter',
      types: ''
    },
      {
      name: 'Kung Pao Chicken', price: '17', image: 'assets/img/Chinese Starters/Kung Pao Chicken.jpg', category: 'Chinese Starter',
      types: ''
    },
      {
      name: 'Butterfly Prawns', price: '23', image: 'assets/img/Chinese Starters/BUTTERFLY PRAWNS.png', category: 'Chinese Starter',
      types: ''
    },
      {
      name: 'Fish Finger', price: '23', image: 'assets/img/Chinese Starters/Fish Finger.jpg', category: 'Chinese Starter',
      types: ''
    },
      {
      name: 'Chilly Prawns', price: '22', image: 'assets/img/Chinese Starters/Chilly Prawns.jpg', category: 'Chinese Starter',
      types: 'Gravy/Fry'
    },
      {
      name: 'Fish Dawa Fry', price: '20', image: 'assets/img/Chinese Starters/Fish Dawa Fry.jpg', category: 'Chinese Starter',
      types: 'Chianese'
    },
      {
      name: 'Phuket Fish', price: '20', image: 'assets/img/Chinese Starters/Phuket Fish.jpg', category: 'Chinese Starter',
      types: ''
    },
      {
      name: 'Fish', price: '18', image: 'assets/img/Chinese Starters/Fish.jpg', category: 'Chinese Starter',
      types: 'Manchurian/Chilly/Ginger/Garlic'
    },

    // === Egg ==
    {
      name: 'Boiled Egg', price: 2, image: 'assets/img/Egg/Boiled Egg.jpg', category: 'Egg',
      types: ''
    },
    {
      name: 'Masala Omlet', price: 4, image: 'assets/img/Egg/Masala Omlet.jpg', category: 'Egg',
      types: ''
    },
    {
      name: 'Karandi Omlet', price: 6, image: 'assets/img/Egg/Karandi Omlet.jpg', category: 'Egg',
      types: ''
    },
      {
      name: 'Kalaki', price: 4, image: 'assets/img/Egg/Kalaki.jpg', category: 'Egg',
      types: ''
    },
      {
      name: 'Half Boil / Full Boil', price: 3, image: 'assets/img/Egg/Half Boil.jpg', category: 'Egg',
      types: ''
    },
      {
      name: 'Egg Burji', price: 8, image: 'assets/img/Egg/Egg Burji.jpg', category: 'Egg',
      types: ''
    },
      {
      name: 'Chilly Egg', price: 10, image: 'assets/img/Egg/Chilly Egg.jpg', category: 'Egg',
      types: ''
    },
      {
      name: 'Egg Pepper', price: 10, image: 'assets/img/Egg/Egg Pepper.jpg', category: 'Egg',
      types: ''
    },
      {
      name: 'Egg Masala', price: 10, image: 'assets/img/Egg/Egg Masala.jpg', category: 'Egg',
      types: ''
    },

    // ===Chinese Rice & Noodles ==
     {
      name: 'Fried Rice', price: '14/15/17/20/22/23', image: 'assets/img/ChineseRice&Noodles/CHICKEN FRIED RICE.png', category: 'Chinese Rice&Noodles',
      types: 'Veg/Egg/Chicken/Mutton/Seafoods/Mixed)'
    },
      {
      name: 'Schezwan Fried Rice', price: '15/16/18/21/23/24', image: 'assets/img/ChineseRice&Noodles/SCHEZWAN CHICKEN FRIED RICE.png', category: 'Chinese Rice&Noodles',
      types: 'Veg/Egg/Chicken/Mutton/Seafoods/Mixed)'
    },
     {
      name: 'Chicken Triple Schezwan Fried Rice', price: '25', image: 'assets/img/ChineseRice&Noodles/Chicken Triple Schezwan Fried Rice.jpg', category: 'Chinese Rice&Noodles',
      types: 'Veg/Egg/Chicken/Mutton/Seafoods/Mixed)'
    },
     {
      name: 'American Chopsuey (Veg/Chicken)', price: '16/18', image: 'assets/img/ChineseRice&Noodles/American Chopsuey.jpg', category: 'Chinese Rice&Noodles',
      types: 'Veg/Chicken)'
    },
     {
      name: 'Hakka Noodles', price: '14/15/17/20/22/23', image: 'assets/img/ChineseRice&Noodles/Hakka Noodles.JPG', category: 'Chinese Rice&Noodles',
      types: 'Veg/Egg/Chicken/Mutton/Seafoods/Mixed)'
    },
     {
      name: 'Schezwan Noodles', price: '15/16/18/21/23/24', image: 'assets/img/ChineseRice&Noodles/Schezwan Noodles.jpg', category: 'Chinese Rice&Noodles',
      types: 'Veg/Egg/Chicken/Mutton/Seafoods/Mixed)'
    },

    // === 'Sizzlers' ==

     {
      name: 'Chicken Sizzlers', price: '30', image: 'assets/img/Sizzlers/Chicken Sizzlers.jpg', category: 'Sizzlers',
      types: ''
    },

     {
      name: 'Sea Food Sizzlers', price: '39', image: 'assets/img/Sizzlers/Sea Food Sizzlers.jpg', category: 'Sizzlers',
      types: ''
    },
     {
      name: 'Prawn Sizzlers', price: '39', image: 'assets/img/Sizzlers/Prawn Sizzlers.jpg', category: 'Sizzlers',
      types: ''
    },
     {
      name: 'Fish Sizzlers', price: '35', image: 'assets/img/Sizzlers/Fish Sizzlers.jpg', category: 'Sizzlers',
      types: ''
    },

    // ==='Gravy' ==

      {
      name: 'Panner Butter Masala', price: '14', image: 'assets/img/Gravy/Panner Butter Masala.jpg', category: 'Gravy',
      types: ''
    },
     {
      name: 'Mix Veg Kadai', price: '14', image: 'assets/img/Gravy/Mix Veg Kadai.jpg', category: 'Gravy',
      types: ''
    },
     {
      name: 'Kadai Panner', price: '14', image: 'assets/img/Gravy/Kadai Panner.jpg', category: 'Gravy',
      types: ''
    },
     {
      name: 'Mushroom Pepper Gravy', price: '14', image: 'assets/img/Gravy/Mushroom Pepper Gravy.jpg', category: 'Gravy',
      types: ''
    },
     {
      name: 'Kadai Chicken', price: '17', image: 'assets/img/Gravy/Kadai Chicken.jpg', category: 'Gravy',
      types: ''
    },
     {
      name: 'Butter Chicken', price: '17', image: 'assets/img/Gravy/Butter Chicken.jpg', category: 'Gravy',
      types: ''
    },
     {
      name: 'Chettinad Chicken', price: '17', image: 'assets/img/Gravy/Chettinad Chicken.JPG', category: 'Gravy',
      types: ''
    },
     {
      name: 'Karaikudi Chicken', price: '17', image: 'assets/img/Gravy/Karaikudi Chicken.jpg', category: 'Gravy',
      types: ''
    },
     {
      name: 'Chettinad Kalimirchi', price: '20', image: 'assets/img/Gravy/Chettinad Kalimirchi.png', category: 'Gravy',
      types: 'Mutton'
    },
     {
      name: 'Mutton Masala', price: '20', image: 'assets/img/Gravy/Mutton Masala.jpg', category: 'Gravy',
      types: ''
    },
     {
      name: 'Kadai Mutton', price: '20', image: 'assets/img/Gravy/Kadai Mutton.jpg', category: 'Gravy',
      types: ''
    },
     {
      name: 'Mutton Boti Gravy', price: '13', image: 'assets/img/Gravy/Mutton Boti Gravy.jpg', category: 'Gravy',
      types: ''
    },
     {
      name: 'Mutton Paya', price: '10', image: 'assets/img/Gravy/Mutton Paya.jpg', category: 'Gravy',
      types: ''
    },
     {
      name: 'Mutton Chukka Gravy', price: '22', image: 'assets/img/Gravy/Mutton Chukka Gravy.jpg', category: 'Gravy',
      types: ''
    },
      {
      name: 'Mutton Pepper Gravy', price: '22', image: 'assets/img/Gravy/Mutton Pepper Gravy.jpg', category: 'Gravy',
      types: ''
    },
     {
      name: 'Prawn pepper Gravy', price: '22', image: 'assets/img/Gravy/Prawn pepper Gravy.jpg', category: 'Gravy',
      types: ''
    },

    // ==='Tiffin' ==
    
    {
      name: 'Veetu Dosa', price: '4', image: 'assets/img/Tiffin/Veetu Dosa.jpg', category: 'Tiffin',
      types: '1 pieces'
    },
     {
      name: 'Plain Dosa', price: '7', image: 'assets/img/Tiffin/PLAIN DOSA.png', category: 'Tiffin',
      types: ''
    },
     {
      name: 'Set Dosa', price: '7', image: 'assets/img/Tiffin/Set Dosa.jpg', category: 'Tiffin',
      types: ''
    },
     {
      name: 'Podi Dosa', price: '9', image: 'assets/img/Tiffin/Podi Dosa.jpg', category: 'Tiffin',
      types: ''
    },
     {
      name: 'Onion Dosa', price: '10', image: 'assets/img/Tiffin/Onion Dosa.jpg', category: 'Tiffin',
      types: ''
    },
     {
      name: 'Masala Dosa', price: '11', image: 'assets/img/Tiffin/Masala Dosa.jpg', category: 'Tiffin',
      types: ''
    },
     {
      name: 'Ghee Dosa', price: '11', image: 'assets/img/Tiffin/Ghee Dosa.jpg', category: 'Tiffin',
      types: ''
    },
     {
      name: 'Rava Dosa', price: '11', image: 'assets/img/Tiffin/Rava Dosa.jpg', category: 'Tiffin',
      types: ''
    },
     {
      name: 'Rava Onion Dosa', price: '12', image: 'assets/img/Tiffin/Rava Onion Dosa.jpg', category: 'Tiffin',
      types: ''
    },
     {
      name: 'Rava Masala Dosa', price: '13', image: 'assets/img/Tiffin/Rava Masala Dosa.jpg', category: 'Tiffin',
      types: ''
    },
     {
      name: 'Egg Dosa / Uthappam', price: '9', image: 'assets/img/Tiffin/Egg Dosa.jpg', category: 'Tiffin',
      types: ''
    },
     {
      name: 'Onion Uthappam', price: '10', image: 'assets/img/Tiffin/Onion Uthappam.jpg', category: 'Tiffin',
      types: ''
    },
     {
      name: 'Kari Dosa Madurai', price: '14/16', image: 'assets/img/Tiffin/Kari Dosa Madurai.jpg', category: 'Tiffin',
      types: 'Chicken/Mutton'
    },
     {
      name: 'Andra Kara Dosa', price: '10', image: 'assets/img/Tiffin/Andra Kara Dosa.jpg', category: 'Tiffin',
      types: ''
    },
     {
      name: 'Prawn Thokku bulsai dosa', price: '15', image: 'assets/img/Tiffin/Prawn Thokku bulsai dosa.jpg', category: 'Tiffin',
      types: ''
    },
     {
      name: 'Keema Egg Dosa', price: '13', image: 'assets/img/Tiffin/Keema Egg Dosa.jpg', category: 'Tiffin',
      types: ''
    },
     {
      name: 'Kudal kari set dosa', price: '11', image: 'assets/img/Tiffin/Kudal kari set dosa.jpg', category: 'Tiffin',
      types: ''
    },
     {
      name: 'Idly set', price: '7/11', image: 'assets/img/Tiffin/Idly set.jpg', category: 'Tiffin',
      types: '2/3 with non veg gravy'
    },
     {
      name: 'Mini Idly', price: '13/13/14', image: 'assets/img/Tiffin/Mini Idly.jpg', category: 'Tiffin',
      types: 'dipped in Mean Kuzhambu/dipped in Chicken Kuzhambu/dipped in Mutton Kuzhambu'
    },
    
   // 'Desserts' == 
   {
      name: 'Sweet of the day (200 grams)', price: '5', image: 'assets/img/Desserts/Sweet of the day (200 grams).jpg', category: 'Desserts',
      types: ''
    },
     {
      name: 'Fried Ice Cream', price: '12', image: 'assets/img/Desserts/Fried Ice Cream.jpg', category: 'Desserts',
      types: ''
    },
     {
      name: 'Gulab Jamun With Icecream', price: '10', image: 'assets/img/Desserts/Gulab Jamun With Icecream.jpg', category: 'Desserts',
      types: ''
    },
     {
      name: 'Choice Of Ice Cream', price: '10', image: 'assets/img/Desserts/Choice Of Ice Cream.jpg', category: 'Desserts',
      types: ''
    },
     {
      name: 'Brownie with Icecream', price: '12', image: 'assets/img/Desserts/Brownie with Icecream.jpg', category: 'Desserts',
      types: ''
    },
     {
      name: 'Tea', price: '2', image: 'assets/img/Desserts/Tea.jpg', category: 'Desserts',
      types: ''
    },
     {
      name: 'Coffee', price: '4', image: 'assets/img/Desserts/Coffee.jpg', category: 'Desserts',
      types: ''
    },

   // 'Evening Special' ==
    {
      name: 'Parotta', price: '1.5/3.5', image: 'assets/img/Evening Special/Parotta.jpg', category: 'Evening Special',
      types: 'without Salna / with Salna'
    },
     {
      name: 'Chappathi', price: '1.5/3.5', image: 'assets/img/Evening Special/Chappathi.jpg', category: 'Evening Special',
      types: 'without Salna / with Salna'
    },
     {
      name: 'Chappathi', price: '10', image: 'assets/img/Evening Special/Chappathi1.jpg', category: 'Evening Special',
      types: 'set with Veg Kurma'
    },
     {
      name: 'Parotta', price: '10', image: 'assets/img/Evening Special/Parotta1.jpg', category: 'Evening Special',
      types: 'set with Veg Kurma'
    },
     {
      name: 'Chappathi', price: '7', image: 'assets/img/Evening Special/CHAPATI WITH SALNA.png', category: 'Evening Special',
      types: 'set with Salna'
    },
     {
      name: 'Parotta', price: '7', image: 'assets/img/Evening Special/parotta2.jpg', category: 'Evening Special',
      types: 'set with Salna'
    },
     {
      name: 'Ghee Parotta', price: '2/4', image: 'assets/img/Evening Special/Ghee Parotta.jpg', category: 'Evening Special',
      types: 'without Salna / with Salna'
    },
     {
      name: 'Ada Koli Parotta', price: '14', image: 'assets/img/Evening Special/Ada Koli Parotta.jpg', category: 'Evening Special',
      types: 'set with Salna'
    },
       {
      name: 'Chilly Parotta', price: '14', image: 'assets/img/Evening Special/Chilly Parotta.jpg', category: 'Evening Special',
      types: 'Veg'
    },
       {
      name: 'Kothu Parotta', price: '11/13/16', image: 'assets/img/Evening Special/KOTHU PAROTTA CHICKEN.png', category: 'Evening Special',
      types: 'Egg/Chicken/Mutton'
    },
     {
      name: 'Wheat Parotta ', price: '2/4', image: 'assets/img/Evening Special/Wheat Parotta.jpg', category: 'Evening Special',
      types: 'without Salna / with Salna'
    },
     {
      name: 'Ceylon Parotta', price: '11/13/16', image: 'assets/img/Evening Special/CEYLON PAROTTA.png', category: 'Evening Special',
      types: 'Egg/Chicken/Mutton'
    },
     {
      name: 'Murthappa', price: '13/16', image: 'assets/img/Evening Special/Murthappa.jpg', category: 'Evening Special',
      types: 'Chicken/Mutton'
    },
     {
      name: 'Kizhi Parotta', price: '14/17', image: 'assets/img/Evening Special/Kizhi Parotta.jpg', category: 'Evening Special',
      types: 'Chicken/Mutton'
    },
     {
      name: 'Veechu Parotta', price: '6/8', image: 'assets/img/Evening Special/Veechu Parotta.jpg', category: 'Evening Special',
      types: 'Normal/Egg'
    },
     {
      name: 'Nool Parotta', price: '3/5', image: 'assets/img/Evening Special/Nool Parotta.jpg', category: 'Evening Special',
      types: ' without Salna / with Salna'
    },
     {
      name: 'Bun Parotta', price: '3/5', image: 'assets/img/Evening Special/BUN PAROTTA.jpg', category: 'Evening Special',
      types: 'without Salna / with Salna'
    },
     {
      name: 'Coin Parotta', price: '7', image: 'assets/img/Evening Special/Coin Parotta.jpg', category: 'Evening Special',
      types: ''
    },
     {
      name: 'Idiyappam', price: '1.5/3.5', image: 'assets/img/Evening Special/Idiyappam.jpg', category: 'Evening Special',
      types: 'without Salna / with Salna'
    },
     {
      name: 'Idiyappam', price: '10', image: 'assets/img/Evening Special/Idiyappam1.jpg', category: 'Evening Special',
      types: 'set with Veg Kurma'
    },
     {
      name: 'Idiyappam', price: '7', image: 'assets/img/Evening Special/Idiyappam.jpg', category: 'Evening Special',
      types: 'set with Salna'
    },
     {
      name: 'Kothu Idiyappam', price: '11/13/16', image: 'assets/img/Evening Special/KOTHU IDIYAPPAM.png', category: 'Evening Special',
      types: 'Egg/Chicken/Mutton'
    },

   //  'Fresh Fruit Juice'

    {
      name: 'Lime', price: '6', image: 'assets/img/Juice/Lime.jpg', category: 'Fresh Fruit Juice',
      types: ''
    },
    {
      name: 'Lemon Soda ', price: '7', image: 'assets/img/Juice/Lemon Soda.jpg', category: 'Fresh Fruit Juice',
      types: ''
    },
    {
      name: 'Lemon Mint ', price: '7', image: 'assets/img/Juice/Lemon Mint.jpg', category: 'Fresh Fruit Juice',
      types: ''
    },
    {
      name: 'Orange', price: '8', image: 'assets/img/Juice/Orange.jpg', category: 'Fresh Fruit Juice',
      types: ''
    },
    {
      name: 'Apple', price: '12', image: 'assets/img/Juice/Apple.jpg', category: 'Fresh Fruit Juice',
      types: ''
    },
     {
      name: 'Pomegranate', price: '15', image: 'assets/img/Juice/Pomegranate.jpg', category: 'Fresh Fruit Juice',
      types: ''
    },
     {
      name: 'Watermelon', price: '11', image: 'assets/img/Juice/Watermelon.jpg', category: 'Fresh Fruit Juice',
      types: ''
    },
     {
      name: 'Muskmelon', price: '11', image: 'assets/img/Juice/Muskmelon.jpg', category: 'Fresh Fruit Juice',
      types: ''
    },
  {
      name: 'Mojitos', price: '11', image: 'assets/img/Juice/Mojitos.jpg', category: 'Fresh Fruit Juice',
      types: ''
    },
    

    
  ];

  // get items for selected category
  getItemsBySelectedCategory(): Menu[] {
    return this.menuItems.filter(item => item.category === this.selectedCategory);
  }

  // select category when clicked
  selectCategory(category: string) {
    this.selectedCategory = category;
  }

  ngAfterViewInit() {
    const container = this.scrollContainer.nativeElement;
    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    // Mouse support
    container.addEventListener('mousedown', (e: MouseEvent) => {
      isDown = true;
      container.classList.add('active');
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    });

    container.addEventListener('mouseleave', () => isDown = false);
    container.addEventListener('mouseup', () => isDown = false);
    container.addEventListener('mousemove', (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 1.5; // scroll speed
      container.scrollLeft = scrollLeft - walk;
    });

    // Touch support (mobile)
    let touchStartX = 0;
    let touchScrollLeft = 0;

    container.addEventListener('touchstart', (e: TouchEvent) => {
      touchStartX = e.touches[0].pageX;
      touchScrollLeft = container.scrollLeft;
    });

    container.addEventListener('touchmove', (e: TouchEvent) => {
      const x = e.touches[0].pageX;
      const walk = (x - touchStartX) * 1.2;
      container.scrollLeft = touchScrollLeft - walk;
    });
  }
  

}

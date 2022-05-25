const foodContainer = document.querySelector('#food-container');
const categoryAll = document.querySelector('#category-all');
const foodMenu = [
  {
    Id: '1',
    title: 'Lahmacun',
    category: 'Meat',
    price: '8$',
    img: 'https://cdn.yemek.com/mncrop/940/625/uploads/2020/04/lahmacun-yeni-one-cikan.jpg',
    desc: 'Lahmacun is a Middle Eastern flatbread and meat dish. It consists of a flatbread topped with minced meat, minced vegetables, and herbs including onions, garlic, tomatoes, red peppers, and parsley, flavored with spices such as chili pepper and paprika, then baked.',
  },
  {
    Id: '2',
    title: 'İskender',
    category: 'Fish',
    price: '70$',
    img: 'https://www.diyetkolik.com/site_media/media/2019/11/01/iskender-kebap.jpg',
    desc: "İskender kebap is a Turkish dish that consists of sliced döner kebab meat topped with hot tomato sauce over pieces of pita bread and generously slathered with melted special sheep's milk butter and yogurt. It can be prepared from thinly and carefully cut grilled lamb or chicken.",
  },
  {
    Id: '3',
    title: 'Mantı',
    category: 'Food',
    price: '40$',
    img: 'https://cdn.yemek.com/mncrop/940/625/uploads/2020/08/manti-tarifi-guncelleme-son.jpg',
    desc: "Manti is a type of dumpling popular in most Turkic cuisines, as well as in the cuisines of the South Caucasus and Balkans, Central Asia, Afghanistan and Chinese Muslims. Manti are also consumed throughout Russia and other post-Soviet countries, where the dish spread from the Central Asian republics.",
  },
  {
    Id: '4',
    title: 'Baklava',
    category: 'Desert',
    price: '40$',
    img: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Baklava%281%29.png',
    desc: "Baklava is a layered pastry dessert made of filo pastry, filled with chopped nuts, and sweetened with syrup or honey. It was one of the most popular sweet pastries of Ottoman cuisine.",
  },
  {
    Id: '5',
    title: 'Ayran',
    category: 'Drinks',
    price: '4$',
    img: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Fresh_ayran.jpg',
    desc: 'Ayran, doogh, dhallë, daw or tan is a cold savory yogurt-based beverage of yogurt and water popular across Western Asia, Central Asia, South Asia, Southeastern Europe and Eastern Europe. The principal ingredients are yogurt, water and salt. Herbs such as mint may be optionally added. Some varieties are carbonated.',
  },
  {
    Id: '6',
    title: 'Pide',
    category: 'Meat',
    price: '4$',
    img: 'https://im.haberturk.com/2019/10/30/ver1572512151/acik-pide_2535762_1200x627.jpg',
    desc: 'Ayran, doogh, dhallë, daw or tan is a cold savory yogurt-based beverage of yogurt and water popular across Western Asia, Central Asia, South Asia, Southeastern Europe and Eastern Europe. The principal ingredients are yogurt, water and salt. Herbs such as mint may be optionally added. Some varieties are carbonated.',
  },
  {
    Id: '7',
    title: 'Şalgam',
    category: 'Drinks',
    price: '6$',
    img: 'https://turkishfoodie.com/wp-content/uploads/2018/07/salgam.jpg',
    desc: 'Ayran, doogh, dhallë, daw or tan is a cold savory yogurt-based beverage of yogurt and water popular across Western Asia, Central Asia, South Asia, Southeastern Europe and Eastern Europe. The principal ingredients are yogurt, water and salt. Herbs such as mint may be optionally added. Some varieties are carbonated.',
  },
  {
    Id: '8',
    title: 'Kumpir',
    category: 'Vegetarian',
    price: '15$',
    img: 'https://www.gizlitarif.com/wp-content/uploads/2017/12/kumpir.jpg',
    desc: 'Ayran, doogh, dhallë, daw or tan is a cold savory yogurt-based beverage of yogurt and water popular across Western Asia, Central Asia, South Asia, Southeastern Europe and Eastern Europe. The principal ingredients are yogurt, water and salt. Herbs such as mint may be optionally added. Some varieties are carbonated.',
  },
  {
    Id: '9',
    title: 'Hamsi Tava',
    category: 'Fish',
    price: '15$',
    img: 'https://ykv.s3.eu-central-1.amazonaws.com/img/w/tarif/mgt/ykv2021marthamsi-352.webp',
    desc: 'Ayran, doogh, dhallë, daw or tan is a cold savory yogurt-based beverage of yogurt and water popular across Western Asia, Central Asia, South Asia, Southeastern Europe and Eastern Europe. The principal ingredients are yogurt, water and salt. Herbs such as mint may be optionally added. Some varieties are carbonated.',
  },
  {
    Id: '10',
    title: 'Künefe',
    category: 'Desert',
    price: '15$',
    img: 'https://imgrosetta.mynet.com.tr/file/11674342/11674342-728xauto.jpg',
    desc: 'Ayran, doogh, dhallë, daw or tan is a cold savory yogurt-based beverage of yogurt and water popular across Western Asia, Central Asia, South Asia, Southeastern Europe and Eastern Europe. The principal ingredients are yogurt, water and salt. Herbs such as mint may be optionally added. Some varieties are carbonated.',
  },
  {
    Id: '11',
    title: 'Tulumba',
    category: 'Desert',
    price: '15$',
    img: 'https://i20.haber7.net/resize/1300x788//haber/haber7/photos/2021/41/en_kolay_tulumba_tatlisi_nasil_yapilir_tulumba_tatlisinin_puf_noktalari_1634113303_153.jpg',
    desc: 'Ayran, doogh, dhallë, daw or tan is a cold savory yogurt-based beverage of yogurt and water popular across Western Asia, Central Asia, South Asia, Southeastern Europe and Eastern Europe. The principal ingredients are yogurt, water and salt. Herbs such as mint may be optionally added. Some varieties are carbonated.',
  },
  {
    Id: '12',
    title: 'Hamburger',
    category: 'FastFood',
    price: '15$',
    img: 'https://www.unileverfoodsolutions.com.tr/konsept-uygulamalarimiz/sokak-lezzetleri/hamburger-malzemesi-secerken/jcr:content/parsys/content/textimage_copy_copy_628821058/image.transform/jpeg-optimized/image.1552661787858.jpg',
    desc: 'Ayran, doogh, dhallë, daw or tan is a cold savory yogurt-based beverage of yogurt and water popular across Western Asia, Central Asia, South Asia, Southeastern Europe and Eastern Europe. The principal ingredients are yogurt, water and salt. Herbs such as mint may be optionally added. Some varieties are carbonated.',
  },
  {
    Id: '13',
    title: 'Donut',
    category: 'Desert',
    price: '15$',
    img: 'https://img.acunn.com/uploads/icerikler/2021/11/15/donut-tarifi5896236476192a15a9bfcf.jpg',
    desc: 'Ayran, doogh, dhallë, daw or tan is a cold savory yogurt-based beverage of yogurt and water popular across Western Asia, Central Asia, South Asia, Southeastern Europe and Eastern Europe. The principal ingredients are yogurt, water and salt. Herbs such as mint may be optionally added. Some varieties are carbonated.',
  },
  {
    Id: '14',
    title: 'Ice Cream',
    category: 'Desert',
    price: '15$',
    img: 'https://cdn.britannica.com/50/80550-050-5D392AC7/Scoops-kinds-ice-cream.jpg',
    desc: 'Ayran, doogh, dhallë, daw or tan is a cold savory yogurt-based beverage of yogurt and water popular across Western Asia, Central Asia, South Asia, Southeastern Europe and Eastern Europe. The principal ingredients are yogurt, water and salt. Herbs such as mint may be optionally added. Some varieties are carbonated.',
  },
  {
    Id: '15',
    title: 'Pizza',
    category: 'Fast Food',
    price: '15$',
    img: 'https://cdn.tasteatlas.com//images/dishes/b05a0af72ad845f3a6abe16143d7853a.jpg?w=375&h=280',
    desc: 'Ayran, doogh, dhallë, daw or tan is a cold savory yogurt-based beverage of yogurt and water popular across Western Asia, Central Asia, South Asia, Southeastern Europe and Eastern Europe. The principal ingredients are yogurt, water and salt. Herbs such as mint may be optionally added. Some varieties are carbonated.',
  },
  {
    Id: '16',
    title: 'Churros',
    category: 'Desert',
    price: '15$',
    img: 'https://www.dogrusucarrefoursa.com/wp-content/uploads/2019/11/Churros.jpg',
    desc: 'Ayran, doogh, dhallë, daw or tan is a cold savory yogurt-based beverage of yogurt and water popular across Western Asia, Central Asia, South Asia, Southeastern Europe and Eastern Europe. The principal ingredients are yogurt, water and salt. Herbs such as mint may be optionally added. Some varieties are carbonated.',
  },
  {
    Id: '17',
    title: 'Milkshake',
    category: 'Drinks',
    price: '15$',
    img: 'https://i20.haber7.net/resize/1300x731//haber/haber7/photos/2022/07/en_kolay_milkshake_nasil_yapilir_enfes_ve_pratik_milkshake_tarifi_1644911214_2578.jpg',
    desc: 'Ayran, doogh, dhallë, daw or tan is a cold savory yogurt-based beverage of yogurt and water popular across Western Asia, Central Asia, South Asia, Southeastern Europe and Eastern Europe. The principal ingredients are yogurt, water and salt. Herbs such as mint may be optionally added. Some varieties are carbonated.',
  },
  {
    Id: '18',
    title: 'Tantuni',
    category: 'Meat',
    price: '5$',
    img: 'https://images.deliveryhero.io/image/fd-tr/LH/hzvw-hero.jpg',
    desc: 'Ayran, doogh, dhallë, daw or tan is a cold savory yogurt-based beverage of yogurt and water popular across Western Asia, Central Asia, South Asia, Southeastern Europe and Eastern Europe. The principal ingredients are yogurt, water and salt. Herbs such as mint may be optionally added. Some varieties are carbonated.',
  }
]

document.addEventListener('DOMContentLoaded', createItems(foodMenu));

const categoryBtn = document.querySelectorAll('.category-btn');
categoryBtn.forEach(e => {
  e.addEventListener('click', () => {
    let selectedCategory = e.innerHTML;
    console.log(selectedCategory);
    let selectedFoodMenu = foodMenu.filter(function (food) {
      if (selectedCategory === "All") {
        return food;
      } else {
        return food.category === selectedCategory;
      }
    })
    createItems(selectedFoodMenu);

    if (e.classList.contains('active')) {
      for (let i = 0; i < categoryBtn.length; i++) {
        categoryBtn[i].classList.remove('active');
      }
      e.classList.remove('active');
      categoryBtn[0].classList.add('active');
    } else {
      for (let i = 0; i < categoryBtn.length; i++) {
        categoryBtn[i].classList.remove('active');
      }
      e.classList.add('active');
    }

    if (categoryAll.classList.contains('active')) {
      createItems(foodMenu);
    }

  })
});

function createItems(foodArray) {
  foodContainer.innerHTML = '';
  foodArray.forEach(e => {
    let foodElement = document.createElement('DIV');
    foodElement.innerHTML = `
      <img class="food-img" src="${e.img}" alt="${e.title}">
      <div>
        <h3 class="food-title">
          ${e.title}
          <span class="food-price">${e.price}</span>
        </h3>
        <p class="food-desc">${e.desc}</p>
      </div>
    `
    foodElement.setAttribute('id', `${e.Id}`);
    foodElement.setAttribute('class', `food-card ${e.category}`);
    foodContainer.append(foodElement);
  });
}

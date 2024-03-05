import productImg01 from "../images/double-sofa-01.png";
import productImg02 from "../images/double-sofa-02.png";
import productImg03 from "../images/double-sofa-03.png";

import productImg04 from "../images/single-sofa-01.jpg";
import productImg05 from "../images/single-sofa-02.jpg";
import productImg06 from "../images/single-sofa-03.jpg";
import productImg007 from "../images/single-sofa-04.png";

import productImg07 from "../images/arm-chair-01.jpg";
import productImg08 from "../images/arm-chair-02.jpg";
import productImg09 from "../images/arm-chair-03.jpg";
import productImg10 from "../images/arm-chair-01.jpg";

import productImg13 from "../images/phone-01.jpg";
import productImg14 from "../images/phone-02.jpg";
import productImg15 from "../images/phone-03.png";
import productImg16 from "../images/phone-04.jpg";
import productImg17 from "../images/phone-05.jpg";
import productImg18 from "../images/phone-06.jpg";

import productImg19 from "../images/watch-01.jpg";
import productImg20 from "../images/watch-02.jpg";
import productImg21 from "../images/watch-03.jpg";
import productImg22 from "../images/watch-04.jpg";

import productImg23 from "../images/wireless-01.png";

import productImg25 from "../images/wireless-03.png";
import vacuum from "../images/vacuum.webp";


const products = [
  {
    id: "1",
    productName: "10 In 1 Car Vacuum Cleaner ",
    imgUrl: vacuum,
    category: "vacuum cleaner",
    price: 49.99,
    shortDesc:
      "Portable Car Vacuum Cleaner with Air Compressor Pump, DC 12V Tire Inflator Handheld Car Vacuum with LED Light Wet/Dry Vacuum",
    description:
      "Multi-purpose and Money-saving: Our portable mini car vacuum has both vacuuming and inflation functions. It can also be used as an LED flashlight and tire pressure gauge, buy one product and enjoy 10 functions at one time. Washable Filter: With a three- stage filtering function, it can provide excellent filtering and dust removal effect, washable and more durable, no need to replace it frequently, clean and dry the filter every time to enhance the powerful suction for the next use. Powerful Suction: The mini car vacuum has a powerful suction of 3000 Pa.Forget about dustpans and annoying cramps and dingy spots in your house, car, or shed that you can't reach. Low - noise and Lighting: Our air compressor pump uses a unique turbo system, which is more powerful and less noisy.And the external LED light can also remove dust at night. Lightweight and Portable: The handheld vacuum for cars is and easy to use.It is portable, mini, compact, and lightweight.Your life will become easier with it!",
    reviews: [

    ],
    avgRating: 5,
  },

  // {
  //   id: "2",
  //   productName: "Rivet Bigelow Modern ",
  //   imgUrl: productImg02,
  //   category: "sofa",
  //   price: 253,
  //   shortDesc:
  //     "The Rivet Bigelow Modern Sofa combines sleek design with comfort. Its contemporary style and quality construction make it a standout choice for modern living spaces.",
  //   description:
  //     "Elevate your living room with the Rivet Bigelow Modern Sofa. Featuring clean lines and a chic silhouette, this sofa effortlessly blends style and comfort. Its durable construction and inviting cushions create the perfect centerpiece for a contemporary and cozy home.",
  //   reviews: [
  //     // {
  //     //   rating: 4.8,
  //     //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     // },
  //     // {
  //     //   rating: 4.8,
  //     //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     // },
  //   ],
  //   avgRating: 4.7,
  // },

  // {
  //   id: "3",
  //   productName: "Amazon Brand Modern Sofa",
  //   imgUrl: productImg03,
  //   category: "sofa",
  //   price: 173,
  //   shortDesc:
  //     "The Amazon Brand Modern Sofa brings contemporary flair to your space. Sleek design and quality construction make it a versatile and stylish choice for any home.",
  //   description:
  //     "Elevate your living space with the Amazon Brand Modern Sofa. With its chic design and durable build, this sofa seamlessly integrates into various decor styles. Comfort meets style, making it the perfect centerpiece for a modern and welcoming home.",
  //   reviews: [
  //     // {
  //     //   rating: 4.6,
  //     //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     // },
  //     // {
  //     //   rating: 4.9,
  //     //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     // },
  //   ],
  //   avgRating: 4.7,
  // },
  // {
  //   id: "26",
  //   productName: "Rivet Bigelow Modern ",
  //   imgUrl: productImg02,
  //   category: "sofa",
  //   price: 253,
  //   shortDesc:
  //     "The Rivet Bigelow Modern Sofa combines sleek design with comfort, creating a chic centerpiece for your living space, blending contemporary style and quality construction.",
  //   description:
  //     "Elevate your home with the Rivet Bigelow Modern Sofa. With its clean lines, chic silhouette, and inviting cushions, this sofa seamlessly merges style and comfort. The durable construction ensures a long-lasting, modern centerpiece for your living room, embodying sophistication and relaxation.",
  //   reviews: [
  //     // {
  //     //   rating: 4.8,
  //     //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     // },
  //     // {
  //     //   rating: 4.8,
  //     //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     // },
  //   ],
  //   avgRating: 4.7,
  // },
  // {
  //   id: "4",
  //   productName: "Fllufy Sheep Sofa",
  //   imgUrl: productImg04,
  //   category: "sofa",
  //   price: 163,
  //   shortDesc:
  //     "The Fluffy Sheep Sofa offers cozy elegance for your living space. Its plush design and inviting comfort make it a charming addition to any home.",
  //   description:
  //     "Indulge in comfort and style with the Fluffy Sheep Sofa. Wrapped in plush upholstery, this sofa embodies warmth and charm. Its inviting design and soft textures create a cozy haven, making it the perfect spot for relaxation and socializing in your home.",
  //   reviews: [
  //     // {
  //     //   rating: 4.6,
  //     //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     // },
  //     // {
  //     //   rating: 4.9,
  //     //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     // },
  //   ],
  //   avgRating: 4.7,
  // },

  // {
  //   id: "5",
  //   productName: "Faux Velvet Sofa",
  //   imgUrl: productImg05,
  //   category: "sofa",
  //   price: 163,
  //   shortDesc:
  //     "The Faux Velvet Sofa exudes luxury with its plush faux velvet upholstery. A chic and comfortable choice to elevate your living space with sophistication.",
  //   description:
  //     "Introduce opulence to your home with the Faux Velvet Sofa. The sumptuous faux velvet upholstery adds a touch of luxury, while the modern design and plush cushions create a stylish and comfortable haven. Elevate your living space with this sophisticated piece.",
  //   reviews: [
  //     // {
  //     //   rating: 4.6,
  //     //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     // },
  //     // {
  //     //   rating: 4.9,
  //     //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     // },
  //   ],
  //   avgRating: 4.7,
  // },

  // {
  //   id: "6",
  //   productName: "Fllufy Sheep Sofa",
  //   imgUrl: productImg06,
  //   category: "sofa",
  //   price: 163,
  //   shortDesc:
  //     "The Fluffy Sheep Sofa offers irresistible coziness with its plush design. A charming addition to any space, this sofa beckons comfort and relaxation.",
  //   description:
  //     "Experience ultimate comfort with the Fluffy Sheep Sofa. Its luxuriously plush design and inviting textures create a haven of relaxation. This sofa not only adds charm to your space but also transforms it into a cozy retreat, perfect for unwinding after a long day.",
  //   reviews: [
  //     // {
  //     //   rating: 4.6,
  //     //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     // },
  //     // {
  //     //   rating: 4.9,
  //     //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     // },
  //   ],
  //   avgRating: 4.7,
  // },
  // {
  //   id: "7",
  //   productName: "Sakarias Armchair",
  //   imgUrl: productImg07,
  //   category: "chair",
  //   price: 99,
  //   shortDesc:
  //     "The Sakarias Armchair combines modern style with comfort. Its sleek design and padded seat make it a perfect accent piece for any contemporary living space.",
  //   description:
  //     "Elevate your home with the Sakarias Armchair. This modern piece blends sophistication with comfort, featuring a sleek silhouette and a generously padded seat. Whether used as a stand-alone accent or part of a seating arrangement, it adds both style and relaxation to your space.",
  //   reviews: [
  //     // {
  //     //   rating: 4.6,
  //     //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     // },
  //     // {
  //     //   rating: 4.9,
  //     //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     // },
  //   ],
  //   avgRating: 4.7,
  // },

  // {
  //   id: "27",
  //   productName: "Modern Arm Sofa",
  //   imgUrl: productImg007,
  //   category: "sofa",
  //   price: 173,
  //   shortDesc:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
  //   reviews: [
  //     // {
  //     //   rating: 4.6,
  //     //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     // },
  //     // {
  //     //   rating: 4.9,
  //     //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     // },
  //   ],
  //   avgRating: 4.7,
  // },

  // {
  //   id: "8",
  //   productName: "Baltsar Chair",
  //   imgUrl: productImg08,
  //   category: "chair",
  //   price: 89,
  //   shortDesc:
  //     "The Baltsar Chair offers a stylish seating solution. With its contemporary design and comfortable build, it enhances the aesthetic appeal of any living space.",
  //   description:
  //     "Upgrade your home with the Baltsar Chair. Its modern aesthetic, clean lines, and comfortable construction make it an ideal addition to your living room or study. This chair not only complements your decor but also provides a cozy spot for relaxation.",
  //   reviews: [
  //     // {
  //     //   rating: 4.6,
  //     //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     // },
  //     // {
  //     //   rating: 4.9,
  //     //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     // },
  //   ],
  //   avgRating: 4.7,
  // },

  // {
  //   id: "9",
  //   productName: "Helmar Chair",
  //   imgUrl: productImg09,
  //   category: "chair",
  //   price: 112,
  //   shortDesc:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
  //   reviews: [
  //     // {
  //     //   rating: 4.6,
  //     //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     // },
  //     // {
  //     //   rating: 4.9,
  //     //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     // },
  //   ],
  //   avgRating: 4.7,
  // },

  // {
  //   id: "10",
  //   productName: "Apple iPhone 12 Pro",
  //   imgUrl: productImg13,
  //   category: "mobile",
  //   price: 799,
  //   shortDesc:
  //     "The iPhone 12 Pro is a powerful and stylish device, featuring a stunning Super Retina XDR display, advanced camera system, and 5G capabilities for seamless performance.",
  //   description:
  //     "Experience the pinnacle of technology with the iPhone 12 Pro. Its Super Retina XDR display delivers vibrant visuals, while the advanced camera system captures stunning photos and videos. With 5G connectivity and the A14 Bionic chip, it provides a smooth and responsive user experience.",
  //   reviews: [
  //     // {
  //     //   rating: 4.8,
  //     //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     // },
  //     // {
  //     //   rating: 4.9,
  //     //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     // },
  //   ],
  //   avgRating: 4.8,
  // },
  // {
  //   id: "25",
  //   productName: "Sakarias Armchair",
  //   imgUrl: productImg10,
  //   category: "chair",
  //   price: 99,
  //   shortDesc:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
  //   reviews: [
  //     // {
  //     //   rating: 4.6,
  //     //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     // },
  //     // {
  //     //   rating: 4.9,
  //     //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     // },
  //   ],
  //   avgRating: 4.7,
  // },
  // {
  //   id: "11",
  //   productName: "Apple iPhone 12 Max",
  //   imgUrl: productImg14,
  //   category: "mobile",
  //   price: 799,
  //   shortDesc:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
  //   reviews: [
  //     // {
  //     //   rating: 4.8,
  //     //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     // },
  //     // {
  //     //   rating: 4.9,
  //     //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     // },
  //   ],
  //   avgRating: 4.8,
  // },

  // {
  //   id: "12",
  //   productName: "Realme 8",
  //   imgUrl: productImg15,
  //   category: "mobile",
  //   price: 599,
  //   shortDesc:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
  //   reviews: [
  //     // {
  //     //   rating: 4.8,
  //     //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     // },
  //     // {
  //     //   rating: 4.9,
  //     //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     // },
  //   ],
  //   avgRating: 4.8,
  // },

  // {
  //   id: "13",
  //   productName: "One Plus Nord",
  //   imgUrl: productImg16,
  //   category: "mobile",
  //   price: 799,
  //   shortDesc:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
  //   reviews: [
  //     // {
  //     //   rating: 4.8,
  //     //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     // },
  //     // {
  //     //   rating: 4.9,
  //     //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     // },
  //   ],
  //   avgRating: 4.8,
  // },

  // {
  //   id: "14",
  //   productName: "Apple iPhone 13 Pro",
  //   imgUrl: productImg17,
  //   category: "mobile",
  //   price: 899,
  //   shortDesc:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
  //   reviews: [
  //     // {
  //     //   rating: 4.8,
  //     //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     // },
  //     // {
  //     //   rating: 4.9,
  //     //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     // },
  //   ],
  //   avgRating: 4.8,
  // },

  // {
  //   id: "15",
  //   productName: "Samsung Galaxy S22",
  //   imgUrl: productImg18,
  //   category: "mobile",
  //   price: 699,
  //   shortDesc:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
  //   reviews: [
  //     // {
  //     //   rating: 4.8,
  //     //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     // },
  //     // {
  //     //   rating: 4.9,
  //     //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     // },
  //   ],
  //   avgRating: 4.8,
  // },

  // {
  //   id: "16",
  //   productName: "Rolex Watch",
  //   imgUrl: productImg19,
  //   category: "watch",
  //   price: 299,
  //   shortDesc:
  //     "A Rolex watch is a symbol of timeless luxury and precision. Crafted with unparalleled attention to detail, it epitomizes elegance and sophistication.",
  //   description:
  //     "Embrace the epitome of luxury with a Rolex watch. Meticulously crafted for precision and enduring style, each timepiece represents a legacy of horological excellence. Imbued with timeless elegance, a Rolex watch is not just an accessory but a symbol of prestige and craftsmanship.",
  //   reviews: [
  //     // {
  //     //   rating: 4.8,
  //     //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     // },
  //     // {
  //     //   rating: 4.9,
  //     //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     // },
  //   ],
  //   avgRating: 4.8,
  // },

  // {
  //   id: "17",
  //   productName: "Timex Easy Reader Watch",
  //   imgUrl: productImg20,
  //   category: "watch",
  //   price: 299,
  //   shortDesc:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
  //   reviews: [
  //     // {
  //     //   rating: 4.8,
  //     //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     // },
  //     // {
  //     //   rating: 4.9,
  //     //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     // },
  //   ],
  //   avgRating: 4.8,
  // },

  // {
  //   id: "18",
  //   productName: "Rolex Watch",
  //   imgUrl: productImg21,
  //   category: "watch",
  //   price: 299,
  //   shortDesc:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
  //   reviews: [
  //     // {
  //     //   rating: 4.8,
  //     //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     // },
  //     // {
  //     //   rating: 4.9,
  //     //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     // },
  //   ],
  //   avgRating: 4.8,
  // },

  // {
  //   id: "19",
  //   productName: "Apple Watch",
  //   imgUrl: productImg22,
  //   category: "watch",
  //   price: 399,
  //   shortDesc:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
  //   reviews: [
  //     // {
  //     //   rating: 4.8,
  //     //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     // },
  //     // {
  //     //   rating: 4.9,
  //     //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     // },
  //   ],
  //   avgRating: 4.8,
  // },

  // {
  //   id: "20",
  //   productName: "Beat Studio Wireless",
  //   imgUrl: productImg23,
  //   category: "wireless",
  //   price: 199,
  //   shortDesc:
  //     "The Beats Studio Wireless headphones offer premium sound quality and sleek design. With Bluetooth connectivity, they provide a wire-free and immersive listening experience.",
  //   description:
  //     "Experience the epitome of audio excellence with the Beats Studio Wireless headphones. Boasting premium sound quality and a stylish design, these Bluetooth-enabled headphones offer a seamless and immersive listening experience. Whether you're at home or on the go, enjoy the freedom of wire-free, high-fidelity sound.",
  //   reviews: [
  //     // {
  //     //   rating: 4.8,
  //     //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     // },
  //     // {
  //     //   rating: 4.9,
  //     //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     // },
  //   ],
  //   avgRating: 4.8,
  // },

  // {
  //   id: "22",
  //   productName: "Beat EP Headphones",
  //   imgUrl: productImg25,
  //   category: "wireless",
  //   price: 199,
  //   shortDesc:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
  //   reviews: [
  //     // {
  //     //   rating: 4.8,
  //     //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     // },
  //     // {
  //     //   rating: 4.9,
  //     //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     // },
  //   ],
  //   avgRating: 4.8,
  // },
];

export default products;

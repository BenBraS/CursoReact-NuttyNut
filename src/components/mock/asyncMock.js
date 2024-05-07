const products = [
    {
      id: 1,
      title: "Nueces",
      price: 1500,
      description:
        "Nueces Frescas",
      image: "https://img.freepik.com/foto-gratis/nuez-fresca_144627-16138.jpg?w=1380&t=st=1703206964~exp=1703207564~hmac=57c460a9c95d7be8f6645649a89f33169e907f271898765a8aa6d9fd92f79006",
      stock: 5,
      category:"nueces",
    },
    {
      id: 2,
      title: "Pistachos",
      price: 1600,
      description:
        "Deliciosos Pistachos",
      image:
        "https://img.freepik.com/foto-gratis/pistachos-cascara-primer-plano_144627-24759.jpg?w=1380&t=st=1703206658~exp=1703207258~hmac=4b5b649a5ba9919839258321da24891619fc78014d243cef536301e3359b2aa4",
      stock: 2,
      category:"pistachos", 
    },
    {
      id: 3,
      title: "Almendras",
      price: 1700,
      description:
        "Almendras tostadas",
      image: "https://img.freepik.com/foto-gratis/recipiente-almendras-sobre-fondo-blanco-vista-superior_1150-37662.jpg?w=1380&t=st=1703207003~exp=1703207603~hmac=eb8a92389880dd6987254ba7a05c38b2dbb06e0477b789f0d1d82de68d30e730",
      stock: 4,
      category: "almendras", 
    },
    {
      id: 4,
      title: "Maní",
      price: 1300,
      description:
        "Surtido de maní",
      image: "https://img.freepik.com/foto-gratis/cacahuetes-puestos-placa-vidrio-sobre-fondo-oscuro_1150-34397.jpg?w=1380&t=st=1703207059~exp=1703207659~hmac=bd2ff92c4768758e4280f739e3a61334c301b083d80ba050d17f9ed2a4face64",
      stock: 10,
      category: "mani", 
    },
    {
      id: 5,
      title:
        "Castanhas de Cajú",
      price: 2000,
      description:
        "Deliciosas Castanhas saladas directamente del norte de Brasil.",
      image: "https://img.freepik.com/foto-gratis/vista-lateral-anacardos-sobre-fondo-negro_141793-8649.jpg?w=1380&t=st=1703207129~exp=1703207729~hmac=f2fea39dd9f84052c1f075118ee8ad587144fd1c93c762b35b259cd8a0817293",
      stock: 1,
      category:"castañas",
    },
    {
        id: 6,
        title:
          "Avellanas",
        price: 2200,
        description:
          "Deliciosas Avellanas directamente de Guatemala.",
        image: "https://img.freepik.com/fotos-premium/grupo-avellanas-sobre-fondo-rustico-piedra-comida-sana_996271-5657.jpg?w=1380",
        stock: 6,
        category: "avellanas", 
      },
  ];
  
  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });
  };
  
  export const getProductById = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find((product) => product.id === id));
      }, 2000);
    });
  };
  
  export const getProductByCategory = (category) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.filter((product) => product.category === category));
      }, 2000);
    });
  };
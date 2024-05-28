const products = [
  {
    id: 1,
    title: "Almendras",
    price: 1500,
    description: "Almendras crudas sin sal",
    image: "https://img.freepik.com/foto-gratis/bocadillo-monton-nueces-sobre-mesa_144627-11043.jpg?size=626&ext=jpg&ga=GA1.1.1735716721.1715817513&semt=ais_user",
    stock: 10,
    category: "nuecesysemillas"
  },
  {
    id: 2,
    title: "Nueces",
    price: 1200,
    description: "Nueces de calidad premium",
    image: "https://img.freepik.com/foto-gratis/muchas-nueces_1398-330.jpg?t=st=1715817559~exp=1715821159~hmac=97d5e2423e850833e2c7dd88f5a200f5640d744adbcde1dba2321578b318e84f&w=1380",
    stock: 8,
    category: "nuecesysemillas"
  },
  {
    id: 3,
    title: "Semillas de Calabaza",
    price: 800,
    description: "Semillas de calabaza tostadas y sin sal",
    image: "https://img.freepik.com/foto-gratis/composicion-hacer-pastel-calabaza_23-2149055420.jpg?t=st=1715817587~exp=1715821187~hmac=b86e0d5cbfe81dfb6b3ce0e4e1a3621536afe40be8190cedcaceb4ebd6519d7d&w=1380",
    stock: 15,
    category: "nuecesysemillas"
  },
  {
    id: 4,
    title: "Dátiles",
    price: 1000,
    description: "Dátiles secos y jugosos",
    image: "https://img.freepik.com/foto-gratis/varios-datiles-secos-o-kurma_114579-85770.jpg?t=st=1715817749~exp=1715821349~hmac=ad77911f6327a00f8b9086560d3d7df04be463672673842fde0c5db8f4d8894f&w=1380",
    stock: 20,
    category: "frutossecos"
  },
  {
    id: 5,
    title: "Ciruelas Secas",
    price: 900,
    description: "Ciruelas Secas",
    image: "https://img.freepik.com/fotos-premium/ciruelas-secas-cuenco_1472-87746.jpg?w=1380",
    stock: 18,
    category: "frutossecos"
  },
  {
    id: 6,
    title: "Higos Secos",
    price: 1100,
    description: "Higos secos naturales",
    image: "https://img.freepik.com/foto-gratis/cuenco-higos-negros-rodajas-higos-sobre-mesa-madera-foto-alta-calidad_114579-44274.jpg?t=st=1715817875~exp=1715821475~hmac=ebdf4fd4b8311f493f5dc4c71db91d60111ff72d7f721d7f4e4991a6c683d2ca&w=1380",
    stock: 12,
    category: "frutossecos"
  },
  {
    id: 7,
    title: "Lentejas",
    price: 600,
    description: "Lentejas pardinas",
    image: "https://img.freepik.com/foto-gratis/primer-plano-bolsa-frijoles-naranjas_23-2148685797.jpg?t=st=1715817916~exp=1715821516~hmac=1ff7a7d02a9c37368c562aefa928398e2dcae7d946ee6d04710c5722e07de200&w=826",
    stock: 25,
    category: "legumbressecas"
  },
  {
    id: 8,
    title: "Garbanzos",
    price: 500,
    description: "Garbanzos secos",
    image: "https://img.freepik.com/foto-gratis/deliciosos-cacahuetes-sobre-papel-mesa-azul_23-2148332227.jpg?t=st=1715817935~exp=1715821535~hmac=d9d750ca02bf23052413461314b44703e24ea6e7c0092817bb227476c2f445b4&w=996",
    stock: 30,
    category: "legumbressecas"
  },
  {
    id: 9,
    title: "Frijoles Negros",
    price: 700,
    description: "Frijoles negros secos",
    image: "https://img.freepik.com/foto-gratis/arreglo-comida-brasilena-deliciosa-endecha-plana_23-2148875292.jpg?t=st=1715817958~exp=1715821558~hmac=d3802a7a50a278d055235407835d12c7886477e6594b377801cb05f68429f123&w=740",
    stock: 22,
    category: "legumbressecas"
  },
  {
    id: 10,
    title: "Almendras Tostadas",
    price: 1400,
    description: "Almendras tostadas y crujientes",
    image: "https://img.freepik.com/foto-gratis/mantequilla-almendras-organica-cruda-sobre-fondo-oscuro_1150-45175.jpg?t=st=1715818015~exp=1715821615~hmac=25d539d59916c2fc2fddcbb5fc4692b78266583354d5fad13eedc5ec6348c175&w=1380",
    stock: 10,
    category: "frutossecostostados"
  },
  {
    id: 11,
    title: "Pistachos Tostados",
    price: 1600,
    description: "Pistachos tostados y salados",
    image: "https://img.freepik.com/foto-gratis/granos-trigo-tazon-palomitas-maiz-tazon-semilla-trigo-rustica_114579-1317.jpg?t=st=1715818111~exp=1715821711~hmac=c53f8496c03fbc8b219b6e2075aa43336b893c63bf5cf446a1875a9b14cbfa79&w=1380",
    stock: 15,
    category: "frutossecostostados"
  },
  {
    id: 12,
    title: "Cacahuetes Tostados",
    price: 900,
    description: "Cacahuetes tostados con un toque de sal",
    image: "https://img.freepik.com/foto-gratis/mantequilla-cacahuete-ecologica-casera-cacahuetes_114579-14257.jpg?t=st=1715818164~exp=1715821764~hmac=73e08f46b3cab18e7cd168e291493ae367ec3b81c2516db9c73421bdc3cb21a5&w=740",
    stock: 20,
    category: "frutossecostostados"
  },
  {
    id: 13,
    title: "Mezcla Energética",
    price: 1800,
    description: "Mezcla equilibrada de frutos secos y frutas deshidratadas",
    image: "https://img.freepik.com/foto-gratis/nueces-mixtas-frutos-secos_23-2147689610.jpg?t=st=1715818217~exp=1715821817~hmac=98b72ea47d18f2412dbf663fa8b59f6bae08a26ec5bf2479ce4bd4bd7406ed9d&w=1380",
    stock: 8,
    category: "mixfrutossecos"
  },
  {
    id: 14,
    title: "Mezcla Premium",
    price: 2000,
    description: "Mezcla premium de frutos secos seleccionados",
    image: "https://img.freepik.com/foto-gratis/vista-alergenos-que-encuentran-comunmente-nueces_23-2150170316.jpg?t=st=1715818231~exp=1715821831~hmac=a7d4ef97e24d76bb38a8466afd677fef2744d6ec1fe7625eacc5e7e7827db7b6&w=1380",
    stock: 6,
    category: "mixfrutossecos"
  },
  {
    id: 15,
    title: "Mezcla de Frutas y Frutos Secos",
    price: 1500,
    description: "Mezcla de frutas y frutos secos deshidratados",
    image: "https://img.freepik.com/fotos-premium/close-up-mezclar-nueces-frutos-secos-sobre-fondo-amarillo-concepto-dieta-nutricion-adecuada_295890-31.jpg?w=1380",
    stock: 10,
    category: "mixfrutossecos"
  }
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
      }, 500);
    });
  };
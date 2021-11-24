const products = [
    {
      id: 1,
      name: "Auriculares Inalambricos ASUS ROG STRIX Fusion 700 ACI FR 7.1 RGB ",
      stock: 0,
      cost: 17000,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      image: [
        "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_23226_Auriculares_Inalambricos_ASUS_ROG_STRIX_Fusion_700_ACI_FR_7.1_RGB_e8913b73-grn.jpg"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T19:39:05.347Z",
      categoryId: 9,
      brandId: 103,
      packingId: null,
      category: {
        name: "Auriculares",
        id: 9
      },
      brand: {
        id: 103,
        name: "Asus"
      },
      reviews: []
    },
    {
      id: 2,
      name: "Auriculares Microfono Logitech G433 Gaming Black 7.1 ",
      stock: 24,
      cost: 9999,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      image: [
        "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_9806_Auriculares_Microfono_Logitech_G433_Gaming_Black_7.1_PC___PS4___Switch___XBOX_1ee6ebce-grn.jpg"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T19:39:05.347Z",
      categoryId: 9,
      brandId: 104,
      packingId: null,
      category: {
        name: "Auriculares",
        id: 9
      },
      brand: {
        id: 104,
        name: "Logitech"
      },
      reviews: []
    },
    {
      id: 3,
      name: "Auriculares HyperX Cloud II ",
      stock: 10,
      cost: 10880,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      image: [
        "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_11934_Auriculares_HyperX_Cloud_II_Red_PC___PS4___Switch___XBOX_94ae061e-grn.jpg"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T19:39:05.347Z",
      categoryId: 9,
      brandId: 95,
      packingId: null,
      category: {
        name: "Auriculares",
        id: 9
      },
      brand: {
        id: 95,
        name: "HyperX"
      },
      reviews: [
        {
          "comment": "Excelentes auriculares, buena calidad de sonido y muy confortables",
          "rating": "5"
        }
      ]
    },
    {
      id: 10,
      name: "Teclado Mecanico Glorious GMMK-TKL",
      stock: 8,
      cost: 12870,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus tincidunt odio, et rhoncus elit lacinia luctus. Nullam malesuada, odio rhoncus dignissim finibus, justo mauris facilisis risus, sit amet commodo tellus arcu interdum enim. Praesent nisi sapien, egestas sit amet erat non, porttitor lacinia ipsum. Etiam nec sapien eu mauris congue semper sit amet id libero. Fusce id magna sollicitudin, porta orci porttitor, blandit orci. Vestibulum nec libero ultrices, tristique mi non, eleifend tortor. Praesent interdum aliquam nunc sed venenatis. Nullam in euismod massa. Etiam egestas, nunc vitae vulputate accumsan, dolor nisi hendrerit diam, a iaculis odio ligula ut odio. Sed ultrices sapien eget enim lobortis vehicula. Vestibulum auctor neque cursus ligula imperdiet, nec ultricies metus blandit. Fusce in erat vel quam auctor consectetur sit amet ullamcorper mi.",
      image: [
        "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_20146_Teclado_Mecanico_Glorious_GMMK-TKL__Pre_Built__c01f2afd-grn.jpg"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.030Z",
      categoryId: 1,
      brandId: 10,
      packingId: null,
      category: {
        name: "Teclados",
        id: 1
      },
      brand: {
        id: 10,
        name: "Glorious"
      },
      reviews: []
    },
    {
      id: 11,
      name: "Teclado Corsair K65 Rapidfire RGB Mechanical MX Speed ",
      stock: 14,
      cost: 11000,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus tincidunt odio, et rhoncus elit lacinia luctus. Nullam malesuada, odio rhoncus dignissim finibus, justo mauris facilisis risus, sit amet commodo tellus arcu interdum enim. Praesent nisi sapien, egestas sit amet erat non, porttitor lacinia ipsum. Etiam nec sapien eu mauris congue semper sit amet id libero. Fusce id magna sollicitudin, porta orci porttitor, blandit orci. Vestibulum nec libero ultrices, tristique mi non, eleifend tortor. Praesent interdum aliquam nunc sed venenatis. Nullam in euismod massa. Etiam egestas, nunc vitae vulputate accumsan, dolor nisi hendrerit diam, a iaculis odio ligula ut odio. Sed ultrices sapien eget enim lobortis vehicula. Vestibulum auctor neque cursus ligula imperdiet, nec ultricies metus blandit. Fusce in erat vel quam auctor consectetur sit amet ullamcorper mi.",
      image: [
        "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_17482_Teclado_Mecanico_Patriot_Viper_V770_RGB_Aluminio_Kailh_Red_a68ef0bb-grn.jpg"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.030Z",
      categoryId: 1,
      brandId: 105,
      packingId: null,
      category: {
        name: "Teclados",
        id: 1
      },
      brand: {
        id: 105,
        name: "Corsair"
      },
      reviews: []
    },
    {
      id: 12,
      name: "Teclado Mecanico HyperX Alloy Origins RGB Switch HyperX Red",
      stock: 22,
      cost: 13100,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus tincidunt odio, et rhoncus elit lacinia luctus. Nullam malesuada, odio rhoncus dignissim finibus, justo mauris facilisis risus, sit amet commodo tellus arcu interdum enim. Praesent nisi sapien, egestas sit amet erat non, porttitor lacinia ipsum. Etiam nec sapien eu mauris congue semper sit amet id libero. Fusce id magna sollicitudin, porta orci porttitor, blandit orci. Vestibulum nec libero ultrices, tristique mi non, eleifend tortor. Praesent interdum aliquam nunc sed venenatis. Nullam in euismod massa. Etiam egestas, nunc vitae vulputate accumsan, dolor nisi hendrerit diam, a iaculis odio ligula ut odio. Sed ultrices sapien eget enim lobortis vehicula. Vestibulum auctor neque cursus ligula imperdiet, nec ultricies metus blandit. Fusce in erat vel quam auctor consectetur sit amet ullamcorper mi.",
      image: [
        "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_16081_Teclado_Mecanico_HyperX_Alloy_Origins_RGB_Switch_HyperX_Red_b4e1cfe2-grn.jpg"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.030Z",
      categoryId: 1,
      brandId: 95,
      packingId: null,
      category: {
        name: "Teclados",
        id: 1
      },
      brand: {
        id: 95,
        name: "HyperX"
      },
      reviews: []
    },
    {
      id: 20,
      name: "Mouse Glorious Model D Minus - Matte Black ",
      stock: 15,
      cost: 6000,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus tincidunt odio, et rhoncus elit lacinia luctus. Nullam malesuada, odio rhoncus dignissim finibus, justo mauris facilisis risus, sit amet commodo tellus arcu interdum enim. Praesent nisi sapien, egestas sit amet erat non, porttitor lacinia ipsum. Etiam nec sapien eu mauris congue semper sit amet id libero. Fusce id magna sollicitudin, porta orci porttitor, blandit orci. Vestibulum nec libero ultrices, tristique mi non, eleifend tortor. Praesent interdum aliquam nunc sed venenatis. Nullam in euismod massa. Etiam egestas, nunc vitae vulputate accumsan, dolor nisi hendrerit diam, a iaculis odio ligula ut odio. Sed ultrices sapien eget enim lobortis vehicula. Vestibulum auctor neque cursus ligula imperdiet, nec ultricies metus blandit. Fusce in erat vel quam auctor consectetur sit amet ullamcorper mi.",
      image: [
        "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_21233_Mouse_Glorious_Model_D_Minus_-_Matte_Black_ad043ce3-grn.jpg"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.030Z",
      categoryId: 4,
      brandId: 87,
      packingId: null,
      category: {
        name: "Mouse",
        id: 4
      },
      brand: {
        id: 87,
        name: "Glorious"
      },
      reviews: []
    },
    {
      id: 21,
      name: "Mouse ASUS ROG STRIX Evolve RGB",
      stock: 8,
      cost: 12870,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus tincidunt odio, et rhoncus elit lacinia luctus. Nullam malesuada, odio rhoncus dignissim finibus, justo mauris facilisis risus, sit amet commodo tellus arcu interdum enim. Praesent nisi sapien, egestas sit amet erat non, porttitor lacinia ipsum. Etiam nec sapien eu mauris congue semper sit amet id libero. Fusce id magna sollicitudin, porta orci porttitor, blandit orci. Vestibulum nec libero ultrices, tristique mi non, eleifend tortor. Praesent interdum aliquam nunc sed venenatis. Nullam in euismod massa. Etiam egestas, nunc vitae vulputate accumsan, dolor nisi hendrerit diam, a iaculis odio ligula ut odio. Sed ultrices sapien eget enim lobortis vehicula. Vestibulum auctor neque cursus ligula imperdiet, nec ultricies metus blandit. Fusce in erat vel quam auctor consectetur sit amet ullamcorper mi.",
      image: [
        "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_23203_Mouse_ASUS_ROG_STRIX_Evolve_RGB_99814b07-grn.jpg"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.030Z",
      categoryId: 4,
      brandId: 103,
      packingId: null,
      category: {
        name: "Mouse",
        id: 4
      },
      brand: {
        id: 103,
        name: "Asus"
      },
      reviews: []
    },
    {
      id: 22,
      name: "Mouse Logitech G300S Gaming 2500dpi",
      stock: 80,
      cost: 2870,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus tincidunt odio, et rhoncus elit lacinia luctus. Nullam malesuada, odio rhoncus dignissim finibus, justo mauris facilisis risus, sit amet commodo tellus arcu interdum enim. Praesent nisi sapien, egestas sit amet erat non, porttitor lacinia ipsum. Etiam nec sapien eu mauris congue semper sit amet id libero. Fusce id magna sollicitudin, porta orci porttitor, blandit orci. Vestibulum nec libero ultrices, tristique mi non, eleifend tortor. Praesent interdum aliquam nunc sed venenatis. Nullam in euismod massa. Etiam egestas, nunc vitae vulputate accumsan, dolor nisi hendrerit diam, a iaculis odio ligula ut odio. Sed ultrices sapien eget enim lobortis vehicula. Vestibulum auctor neque cursus ligula imperdiet, nec ultricies metus blandit. Fusce in erat vel quam auctor consectetur sit amet ullamcorper mi.",
      image: [
        "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_15210_Mouse_Logitech_G300S_Gaming_2500dpi___9_botones_4702c29a-grn.jpg"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.030Z",
      categoryId: 4,
      brandId: 104,
      packingId: null,
      category: {
        name: "Mouse",
        id: 4
      },
      brand: {
        id: 104,
        name: "Logitech"
      },
      reviews: []
    },
    {
      id: 30,
      name: "Gabinete ASUS ROG STRIX Helios Aluminum Black RGB",
      stock: 10,
      cost: 52190,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      image: [
        "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_21594_Gabinete_ASUS_ROG_STRIX_Helios_Aluminum_Black_RGB_81c9ec14-grn.jpg"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T11:08:17.792Z",
      categoryId: 5,
      brandId: 103,
      packingId: null,
      category: {
        name: "Gabinetes",
        id: 5
      },
      brand: {
        id: 103,
        name: "Asus"
      },
      
      reviews: []
    },
    {
      id: 31,
      name: "Gabinete Kolink Phalanx V2 4xCoolers dRGB 120mm",
      stock: 4,
      cost: 10500,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      image: [
        "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_23002_Gabinete_Kolink_Phalanx_V2_4xCoolers_dRGB_120mm_ab3d042e-grn.jpg"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T11:08:17.792Z",
      categoryId: 5,
      brandId: 170,
      packingId: null,
      category: {
        name: "Gabinetes",
        id: 5
      },
      brand: {
        id: 170,
        name: "Kolink "
      },
      
      reviews: []
    },
    {
      id: 32,
      name: "Gabinete Aerocool Bolt Black RGB Ventana Acrilica ATX ",
      stock: 170,
      cost: 3879,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      image: [
        "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_13554_Gabinete_Aerocool_Bolt_Black_RGB_Ventana_Acrilica_ATX_66b77f2a-grn.jpg"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T11:08:17.792Z",
      categoryId: 5,
      brandId: 171,
      packingId: null,
      category: {
        name: "Gabinetes",
        id: 5
      },
      brand: {
        id: 171,
        name: "Aerocool"
      },
      
      reviews: []
    }
    
  ];
  

  module.exports = {
    products,
  }
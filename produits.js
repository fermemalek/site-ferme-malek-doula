// ============================================================================
// CONFIGURATION DU SITE — FERME MALEK (MARQUE DOULA)
// Vous pouvez modifier les prix, le numéro WhatsApp ou les textes ici,
// ou directement depuis le bouton "Gérer les prix" en bas du site.
// ============================================================================

window.DOULA_CONFIG = {
  brandName: "DOULA",
  brandNameAr: "دولة",
  farmName: "Ferme Malek",
  farmNameAr: "مزرعة مالك",
  phoneDisplay: "0554 51 06 78",
  whatsappNumber: "213554510678", // Format international Algérie (+213)
  cityFr: "Aïn Oussara — Région de Benhar",
  cityAr: "عين وسارة — منطقة بنهار",
  wilayaFr: "Djelfa / Aïn Oussara, Algérie",
  wilayaAr: "عين وسارة، الجزائر",
  currencyFr: "DA",
  currencyAr: "د.ج",
  harvestYear: "Récolte Nouvelle",
  harvestYearAr: "محصول جديد",

  products: [
    // ========================================================================
    // GAMME BOUTEILLES EN VERRE (PRESTIGE & TABLE)
    // Formats : 1L, 0,750L, 0,370L
    // ========================================================================
    {
      id: "verre-1l",
      category: "verre",
      packaging: "glass",
      volume: "1 L",
      volumeMl: "1000 ml",
      badgeFr: "Édition Prestige",
      badgeAr: "إصدار فاخر",
      nameFr: "Huile d'Olive Vierge Extra — Bouteille en Verre 1L",
      nameAr: "زيت زيتون بكر ممتاز — قارورة زجاجية 1 لتر",
      descFr: "Bouteille en verre élégante d'un litre, idéale pour préserver tous les arômes fruités et polyphénols de notre huile pressée à froid à Benhar.",
      descAr: "قارورة زجاجية أنيقة بسعة 1 لتر، مثالية للحفاظ على النكهة الفريدة والفوائد الغذائية لزيتنا المعصور على البارد في مزرعة مالك ببنهار.",
      price: 1400,
      inStock: true,
      featured: true,
      bottleScale: 1.0
    },
    {
      id: "verre-750ml",
      category: "verre",
      packaging: "glass",
      volume: "0,750 L",
      volumeMl: "750 ml",
      badgeFr: "Format Table",
      badgeAr: "حجم المائدة",
      nameFr: "Huile d'Olive Vierge Extra — Bouteille en Verre 0,750L",
      nameAr: "زيت زيتون بكر ممتاز — قارورة زجاجية 0.750 لتر",
      descFr: "Le format classique 750 ml en verre foncé protecteur, parfait pour le service à table quotidien et pour offrir.",
      descAr: "الحجم الكلاسيكي 750 مل في زجاج واقٍ، مثالي للتقديم اليومي على المائدة أو كهدية راقية.",
      price: 1100,
      inStock: true,
      featured: true,
      bottleScale: 0.88
    },
    {
      id: "verre-370ml",
      category: "verre",
      packaging: "glass",
      volume: "0,370 L",
      volumeMl: "370 ml",
      badgeFr: "Format Découverte",
      badgeAr: "حجم صغير",
      nameFr: "Huile d'Olive Vierge Extra — Bouteille en Verre 0,370L",
      nameAr: "زيت زيتون بكر ممتاز — قارورة زجاجية 0.370 لتر",
      descFr: "Petit flacon en verre de 370 ml, pratique pour la dégustation, les salades raffinées ou pour découvrir la qualité Doula.",
      descAr: "قارورة زجاجية صغيرة بحجم 370 مل، عملية للتذوق والسلطات ولاكتشاف جودة علامة دولة.",
      price: 600,
      inStock: true,
      featured: false,
      bottleScale: 0.74
    },

    // ========================================================================
    // GAMME BOUTEILLES & BIDONS EN PLASTIQUE (FAMILIAL & ÉCONOMIQUE)
    // Formats : 1L, 3L, 5L
    // ========================================================================
    {
      id: "plastique-1l",
      category: "plastique",
      packaging: "plastic-1l",
      volume: "1 L",
      volumeMl: "Bouteille 1 Litre",
      badgeFr: "Pratique & Léger",
      badgeAr: "عملي وخفيف",
      nameFr: "Huile d'Olive Vierge Extra — Bouteille Plastique 1L",
      nameAr: "زيت زيتون بكر ممتاز — قارورة بلاستيكية 1 لتر",
      descFr: "La même huile d'olive pure de la Ferme Malek en bouteille plastique alimentaire incassable de 1 litre, facile à transporter.",
      descAr: "نفس زيت الزيتون الطبيعي الصافي من مزرعة مالك في قارورة بلاستيكية غذائية 1 لتر غير قابلة للكسر وسهلة النقل.",
      price: 1200,
      inStock: true,
      featured: false,
      bottleScale: 0.9
    },
    {
      id: "plastique-3l",
      category: "plastique",
      packaging: "plastic-3l",
      volume: "3 L",
      volumeMl: "Bidon 3 Litres",
      badgeFr: "Format Milieu",
      badgeAr: "حجم متوسط",
      nameFr: "Huile d'Olive Vierge Extra — Bidon Plastique 3L",
      nameAr: "زيت زيتون بكر ممتاز — دلو / قارورة بلاستيكية 3 لتر",
      descFr: "Format intermédiaire de 3 litres avec poignée ergonomique, idéal pour la consommation régulière à la maison.",
      descAr: "حجم متوسط بسعة 3 لتر مع مقبض مريح، مثالي للاستهلاك العائلي المنتظم في المنزل.",
      price: 3500,
      inStock: true,
      featured: true,
      bottleScale: 0.95
    },
    {
      id: "plastique-5l",
      category: "plastique",
      packaging: "plastic-5l",
      volume: "5 L",
      volumeMl: "Bidon Familial 5 Litres",
      badgeFr: "Meilleure Vente ★",
      badgeAr: "الأكثر طلباً ★",
      nameFr: "Huile d'Olive Vierge Extra — Bidon Familial 5L",
      nameAr: "زيت زيتون بكر ممتاز — الحجم العائلي 5 لتر",
      descFr: "Le grand format économique de 5 litres pour toute la famille. Huile 100% naturelle issue de nos oliviers de Benhar (Aïn Oussara).",
      descAr: "الحجم العائلي الاقتصادي بسعة 5 لتر. زيت طبيعي 100% مستخلص من أشجار الزيتون بمزرعتنا في بنهار (عين وسارة).",
      price: 5800,
      inStock: true,
      featured: true,
      bottleScale: 1.05
    },

    // ========================================================================
    // AUTRES PRODUITS DÉRIVÉS DE LA FERME MALEK
    // ========================================================================
    {
      id: "olives-table",
      category: "derives",
      packaging: "jar-olives",
      volume: "1 Kg",
      volumeMl: "Bocal / Sachet 1 Kg",
      badgeFr: "Récolte Ferme",
      badgeAr: "منتوج المزرعة",
      nameFr: "Olives de Table Naturelles — Ferme Malek",
      nameAr: "زيتون المائدة الطبيعي — مزرعة مالك",
      descFr: "Olives charnues récoltées à la main sur nos terres à Benhar, préparées de façon traditionnelle sans produits chimiques.",
      descAr: "زيتون مائدة مقطوف يدوياً من أراضينا في بنهار، محضر بطريقة تقليدية طبيعية بدون مواد كيميائية.",
      price: 650,
      inStock: true,
      featured: false,
      bottleScale: 0.85
    },
    {
      id: "olives-marinees",
      category: "derives",
      packaging: "jar-marinated",
      volume: "500 g",
      volumeMl: "Bocal 500 g",
      badgeFr: "Recette Terroir",
      badgeAr: "وصفة تقليدية",
      nameFr: "Olives Marinées à l'Huile d'Olive Doula & Herbes",
      nameAr: "زيتون متبل بزيت زيتون دولة والأعشاب العطرية",
      descFr: "Olives concassées et marinées dans notre huile d'olive vierge extra Doula avec thym sauvage, ail et piment doux.",
      descAr: "زيتون متبل في زيت زيتون دولة البكر الممتاز مع الزعتر البري والثوم والفلفل الحلو.",
      price: 550,
      inStock: true,
      featured: false,
      bottleScale: 0.8
    },
    {
      id: "savon-olive",
      category: "derives",
      packaging: "soap",
      volume: "150 g",
      volumeMl: "Pain Artisanal",
      badgeFr: "100% Naturel",
      badgeAr: "طبيعي 100%",
      nameFr: "Savon Artisanal Pur à l'Huile d'Olive Doula",
      nameAr: "صابون تقليدي طبيعي بزيت زيتون دولة",
      descFr: "Savon doux surgras fabriqué à base de notre huile d'olive pure, idéal pour le soin naturel de la peau et des cheveux.",
      descAr: "صابون طبيعي ناعم مصنوع من زيت الزيتون الصافي، مثالي للعناية اليومية بالبشرة والشعر.",
      price: 350,
      inStock: true,
      featured: false,
      bottleScale: 0.8
    }
  ]
};

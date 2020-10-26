var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_EvolucinIndicedeHumedad29081310_1 = new ol.format.GeoJSON();
var features_EvolucinIndicedeHumedad29081310_1 = format_EvolucinIndicedeHumedad29081310_1.readFeatures(json_EvolucinIndicedeHumedad29081310_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EvolucinIndicedeHumedad29081310_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EvolucinIndicedeHumedad29081310_1.addFeatures(features_EvolucinIndicedeHumedad29081310_1);
var lyr_EvolucinIndicedeHumedad29081310_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EvolucinIndicedeHumedad29081310_1, 
                style: style_EvolucinIndicedeHumedad29081310_1,
                interactive: true,
    title: 'Evolución Indice de Humedad - 29/08~13/10<br />\
    <img src="styles/legend/EvolucinIndicedeHumedad29081310_1_0.png" /> -0,02 - 0,05 - Muy Bajo<br />\
    <img src="styles/legend/EvolucinIndicedeHumedad29081310_1_1.png" /> 0,05 - 0,12 - Bajo<br />\
    <img src="styles/legend/EvolucinIndicedeHumedad29081310_1_2.png" /> 0,12 - 0,19 - Medio<br />\
    <img src="styles/legend/EvolucinIndicedeHumedad29081310_1_3.png" /> 0,19 - 0,26 - Alto<br />\
    <img src="styles/legend/EvolucinIndicedeHumedad29081310_1_4.png" /> 0,26 - 0,33 - Muy Alto<br />'
        });
var format_IndicedeHumedad13102020_2 = new ol.format.GeoJSON();
var features_IndicedeHumedad13102020_2 = format_IndicedeHumedad13102020_2.readFeatures(json_IndicedeHumedad13102020_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndicedeHumedad13102020_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndicedeHumedad13102020_2.addFeatures(features_IndicedeHumedad13102020_2);
var lyr_IndicedeHumedad13102020_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IndicedeHumedad13102020_2, 
                style: style_IndicedeHumedad13102020_2,
                interactive: true,
    title: 'Indice de Humedad - 13/10/2020<br />\
    <img src="styles/legend/IndicedeHumedad13102020_2_0.png" /> -0,153 - -0,072 - Muy Bajo<br />\
    <img src="styles/legend/IndicedeHumedad13102020_2_1.png" /> -0,072 - 0,009 - Bajo<br />\
    <img src="styles/legend/IndicedeHumedad13102020_2_2.png" /> 0,009 - 0,089 - Medio<br />\
    <img src="styles/legend/IndicedeHumedad13102020_2_3.png" /> 0,089 - 0,170 - Alto<br />\
    <img src="styles/legend/IndicedeHumedad13102020_2_4.png" /> 0,170 - 0,251 - Muy Alto<br />'
        });
var format_EvolucinIndicedeVegetacin29081310_3 = new ol.format.GeoJSON();
var features_EvolucinIndicedeVegetacin29081310_3 = format_EvolucinIndicedeVegetacin29081310_3.readFeatures(json_EvolucinIndicedeVegetacin29081310_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EvolucinIndicedeVegetacin29081310_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EvolucinIndicedeVegetacin29081310_3.addFeatures(features_EvolucinIndicedeVegetacin29081310_3);
var lyr_EvolucinIndicedeVegetacin29081310_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EvolucinIndicedeVegetacin29081310_3, 
                style: style_EvolucinIndicedeVegetacin29081310_3,
                interactive: true,
    title: 'Evolución Indice de Vegetación - 29/08~13/10<br />\
    <img src="styles/legend/EvolucinIndicedeVegetacin29081310_3_0.png" /> -0,10 - 0,01 - Muy Bajo<br />\
    <img src="styles/legend/EvolucinIndicedeVegetacin29081310_3_1.png" /> 0,01 - 0,11 - Bajo<br />\
    <img src="styles/legend/EvolucinIndicedeVegetacin29081310_3_2.png" /> 0,11 - 0,22 - Medio<br />\
    <img src="styles/legend/EvolucinIndicedeVegetacin29081310_3_3.png" /> 0,22 - 0,33 - Alto<br />\
    <img src="styles/legend/EvolucinIndicedeVegetacin29081310_3_4.png" /> 0,33 - 0,43 - Muy Alto<br />'
        });
var format_IndicedeVegetacin13102020_4 = new ol.format.GeoJSON();
var features_IndicedeVegetacin13102020_4 = format_IndicedeVegetacin13102020_4.readFeatures(json_IndicedeVegetacin13102020_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndicedeVegetacin13102020_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndicedeVegetacin13102020_4.addFeatures(features_IndicedeVegetacin13102020_4);
var lyr_IndicedeVegetacin13102020_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IndicedeVegetacin13102020_4, 
                style: style_IndicedeVegetacin13102020_4,
                interactive: true,
    title: 'Indice de Vegetación - 13/10/2020<br />\
    <img src="styles/legend/IndicedeVegetacin13102020_4_0.png" /> 0,13 - 0,25 - Muy Bajo<br />\
    <img src="styles/legend/IndicedeVegetacin13102020_4_1.png" /> 0,25 - 0,36 - Bajo<br />\
    <img src="styles/legend/IndicedeVegetacin13102020_4_2.png" /> 0,36 - 0,48 - Medio<br />\
    <img src="styles/legend/IndicedeVegetacin13102020_4_3.png" /> 0,48 - 0,60 - Alto<br />\
    <img src="styles/legend/IndicedeVegetacin13102020_4_4.png" /> 0,60 - 0,71 - Muy Alto<br />'
        });

lyr_GoogleHybrid_0.setVisible(true);lyr_EvolucinIndicedeHumedad29081310_1.setVisible(true);lyr_IndicedeHumedad13102020_2.setVisible(true);lyr_EvolucinIndicedeVegetacin29081310_3.setVisible(true);lyr_IndicedeVegetacin13102020_4.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_EvolucinIndicedeHumedad29081310_1,lyr_IndicedeHumedad13102020_2,lyr_EvolucinIndicedeVegetacin29081310_3,lyr_IndicedeVegetacin13102020_4];
lyr_EvolucinIndicedeHumedad29081310_1.set('fieldAliases', {'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'id': 'id', 'ID_2': 'ID_2', 'X': 'X', 'Y': 'Y', 'OUTPUT': 'OUTPUT', });
lyr_IndicedeHumedad13102020_2.set('fieldAliases', {'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'id': 'id', 'ID_2': 'ID_2', 'X': 'X', 'Y': 'Y', 'OUTPUT': 'OUTPUT', });
lyr_EvolucinIndicedeVegetacin29081310_3.set('fieldAliases', {'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'id': 'id', 'ID_2': 'ID_2', 'X': 'X', 'Y': 'Y', 'OUTPUT': 'OUTPUT', });
lyr_IndicedeVegetacin13102020_4.set('fieldAliases', {'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'id': 'id', 'ID_2': 'ID_2', 'X': 'X', 'Y': 'Y', 'OUTPUT': 'OUTPUT', });
lyr_EvolucinIndicedeHumedad29081310_1.set('fieldImages', {'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'id': 'Range', 'ID_2': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'OUTPUT': 'TextEdit', });
lyr_IndicedeHumedad13102020_2.set('fieldImages', {'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'id': 'Range', 'ID_2': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'OUTPUT': 'TextEdit', });
lyr_EvolucinIndicedeVegetacin29081310_3.set('fieldImages', {'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'id': 'Range', 'ID_2': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'OUTPUT': 'TextEdit', });
lyr_IndicedeVegetacin13102020_4.set('fieldImages', {'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'id': 'Range', 'ID_2': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'OUTPUT': 'TextEdit', });
lyr_EvolucinIndicedeHumedad29081310_1.set('fieldLabels', {'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'id': 'no label', 'ID_2': 'no label', 'X': 'no label', 'Y': 'no label', 'OUTPUT': 'no label', });
lyr_IndicedeHumedad13102020_2.set('fieldLabels', {'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'id': 'no label', 'ID_2': 'no label', 'X': 'no label', 'Y': 'no label', 'OUTPUT': 'no label', });
lyr_EvolucinIndicedeVegetacin29081310_3.set('fieldLabels', {'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'id': 'no label', 'ID_2': 'no label', 'X': 'no label', 'Y': 'no label', 'OUTPUT': 'no label', });
lyr_IndicedeVegetacin13102020_4.set('fieldLabels', {'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'id': 'no label', 'ID_2': 'no label', 'X': 'no label', 'Y': 'no label', 'OUTPUT': 'no label', });
lyr_IndicedeVegetacin13102020_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
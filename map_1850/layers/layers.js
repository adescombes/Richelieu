var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'Stamen Terrain',
    'type': 'base',
    source: new ol.source.Stamen({
        layer: 'terrain'
    })
})
]
});
var format_num_1850_0 = new ol.format.GeoJSON();
var features_num_1850_0 = format_num_1850_0.readFeatures(json_num_1850_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_num_1850_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_num_1850_0.addFeatures(features_num_1850_0);var lyr_num_1850_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_num_1850_0, 
                style: style_num_1850_0,
    title: 'num_1850<br />\
    <img src="styles/legend/num_1850_0_0.png" /> 5 - 10<br />\
    <img src="styles/legend/num_1850_0_1.png" /> 10 - 20<br />\
    <img src="styles/legend/num_1850_0_2.png" /> 20 - 30<br />\
    <img src="styles/legend/num_1850_0_3.png" /> 30 - 40<br />\
    <img src="styles/legend/num_1850_0_4.png" /> 40 - 50<br />'
        });

lyr_num_1850_0.setVisible(true);
var layersList = [baseLayer,lyr_num_1850_0];
lyr_num_1850_0.set('fieldAliases', {'Nom': 'Nom', 'Métier': 'Métier', 'Rue': 'Rue', 'Numéro': 'Numéro', 'Année': 'Année', 'decade': 'decade', 'X': 'X', 'Y': 'Y', 'start': 'start', 'end': 'end', 'exercice': 'exercice', 'duration': 'duration', });
lyr_num_1850_0.set('fieldImages', {'Nom': 'TextEdit', 'Métier': 'TextEdit', 'Rue': 'Hidden', 'Numéro': 'Hidden', 'Année': 'Hidden', 'decade': 'Hidden', 'X': 'Hidden', 'Y': 'Hidden', 'start': 'Hidden', 'end': 'Hidden', 'exercice': 'TextEdit', 'duration': 'Hidden', });
lyr_num_1850_0.set('fieldLabels', {'Nom': 'inline label', 'Métier': 'header label', 'exercice': 'inline label', });
lyr_num_1850_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
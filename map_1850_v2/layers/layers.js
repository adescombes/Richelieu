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
var format_duredexerciceannes_0 = new ol.format.GeoJSON();
var features_duredexerciceannes_0 = format_duredexerciceannes_0.readFeatures(json_duredexerciceannes_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_duredexerciceannes_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_duredexerciceannes_0.addFeatures(features_duredexerciceannes_0);var lyr_duredexerciceannes_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_duredexerciceannes_0, 
                style: style_duredexerciceannes_0,
    title: 'durée d\'exercice (années)<br />\
    <img src="styles/legend/duredexerciceannes_0_0.png" /> 0 - 5<br />\
    <img src="styles/legend/duredexerciceannes_0_1.png" /> 5 - 10<br />\
    <img src="styles/legend/duredexerciceannes_0_2.png" /> 10 - 20<br />\
    <img src="styles/legend/duredexerciceannes_0_3.png" /> 20 - 30<br />\
    <img src="styles/legend/duredexerciceannes_0_4.png" /> 30 - 50<br />'
        });

lyr_duredexerciceannes_0.setVisible(true);
var layersList = [baseLayer,lyr_duredexerciceannes_0];
lyr_duredexerciceannes_0.set('fieldAliases', {'Nom': 'Nom', 'Métier': 'Métier', 'Rue': 'Rue', 'Numéro': 'Numéro', 'Année': 'Année', 'decade': 'decade', 'X': 'X', 'Y': 'Y', 'start': 'start', 'end': 'end', 'exercice': 'exercice', 'duration': 'duration', });
lyr_duredexerciceannes_0.set('fieldImages', {'Nom': 'TextEdit', 'Métier': 'TextEdit', 'Rue': 'Hidden', 'Numéro': 'Hidden', 'Année': 'Hidden', 'decade': 'Hidden', 'X': 'Hidden', 'Y': 'Hidden', 'start': 'Hidden', 'end': 'Hidden', 'exercice': 'TextEdit', 'duration': 'Hidden', });
lyr_duredexerciceannes_0.set('fieldLabels', {'Nom': 'inline label', 'Métier': 'header label', 'exercice': 'inline label', });
lyr_duredexerciceannes_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
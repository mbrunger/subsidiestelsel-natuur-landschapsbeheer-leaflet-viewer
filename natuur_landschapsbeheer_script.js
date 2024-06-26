var RD = new L.Proj.CRS(
    'EPSG:28992','+proj=sterea +lat_0=52.15616055555555 +lon_0=5.38763888888889 +k=0.9999079 +x_0=155000 +y_0=463000 +ellps=bessel +units=m +towgs84=565.2369,50.0087,465.658,-0.406857330322398,0.350732676542563,-1.8703473836068,4.0812 +no_defs', {    
origin: [-285401.920, 903401.920],
resolutions: [3440.640, 1720.320, 860.160, 430.080, 215.040, 107.520, 53.760, 26.880, 13.440, 6.720, 3.360, 1.680, 0.840, 0.420, 0.210, 0.105],
bounds: L.bounds([-285401.920, 903401.920], [595401.920, 22598.080])
});

var southWest = L.latLng(51.33,3.47);
var northEast = L.latLng(52.50, 5.19); 

var maxBoundArea = L.latLngBounds(southWest, northEast);

var map = new L.Map('map', {
crs: RD,
minZoom: 5,
maxZoom:14,
maxBounds: maxBoundArea
});

var center = L.point(90000.0, 445000.0);
map.setView(RD.projection.unproject(center), 5);

var BRT_grijs = L.tileLayer('https://service.pdok.nl/brt/achtergrondkaart/wmts/v2_0?&service=WMTS&request=GetTile&version=1.0.0&layer=grijs&style=default&tilematrixset=EPSG%3A28992&format=image%2Fpng&height=256&width=256&tilematrix={z}&tilecol={x}&tilerow={y}',
{attribution:'Kaartgegevens: <a href="http://www.kadaster.nl">Kadaster</a></span>',minZoom:5,maxZoom:16}).addTo(map);
  	
var Luchtfoto = L.tileLayer('https://service.pdok.nl/hwh/luchtfotorgb/wmts/v1_0?&service=WMTS&request=GetTile&version=1.0.0&layer=Actueel_orthoHR&style=default&tilematrixset=EPSG%3A28992&format=image%2Fpng&height=256&width=256&tilematrix={z}&tilecol={x}&tilerow={y}',
{attribution:'Kaartgegevens: <a href="http://www.kadaster.nl">Kadaster</a></span>',minZoom:5,maxZoom:16});
  
function highlightFeature1(e) {
var layer = e.target;
layer.setStyle({
	weight: 1,
	color: '#000000',
	fillOpacity: 1
});
if (!L.Browser.ie && !L.Browser.opera) {
	layer.bringToFront();
	info1.update(layer.feature.properties);
}
}

function resetHighlight1(e) {
SNL_BEOORDELINGEN_1.resetStyle(e.target);
info1.update();
}

function onEachFeature1(feature, layer) {
layer.on({
   mouseover: highlightFeature1,
   mouseout: resetHighlight1
});
}
    
function getColor1(d) {
return d == 'Hoog' ? '#008035' :
d == 'Midden' ? '#f9b200' :
d == 'Laag' ? '#e2001a' :
d == 'Niet beoordeeld' ? '#b2b2b2' :
	  '#E5E4E2';
}
      
function getColor2(d) {
return  d == 'N01.01' ? '#0045b5' :
d == 'N01.02' ? '#e8e6a0' :
d == 'N01.03' ? '#99CCD1' :
d == 'N02.01' ? '#0054A3' :
d == 'N03.01' ? '#0788D9' :
d == 'N04.01' ? '#9cc2e6' :
d == 'N04.02' ? '#9CE2E6' :
d == 'N04.03' ? '#9ca9d6' :
d == 'N04.04' ? '#7ADEFF' :
d == 'N05.01' ? '#94A694' :
d == 'N05.02' ? '#82A871' :
d == 'N05.03' ? '#888ab5' :
d == 'N05.04' ? '#9c7d65' :
d == 'N06.01' ? '#618253' :
d == 'N06.02' ? '#245228' :
d == 'N08.01' ? '#E3CA9F' :
d == 'N08.02' ? '#fff200' :
d == 'N08.03' ? '#cca750' :
d == 'N08.04' ? '#f29488' :
d == 'N09.01' ? '#9cd6c1' :
d == 'N10.01' ? '#EAFFBF' :
d == 'N10.02' ? '#88CC66' :
d == 'N11.01' ? '#D9D56F' :
d == 'N12.01' ? '#FFD280' :
d == 'N12.02' ? '#CBDE00' :
d == 'N12.03' ? '#B2C227' :
d == 'N12.04' ? '#C6D69C' :
d == 'N12.05' ? '#D6D69C' :
d == 'N12.06' ? '#B8B87D' :
d == 'N13.01' ? '#88CC00' :
d == 'N13.02' ? '#95B366' :
d == 'N14.01' ? '#BFFFE9' :
d == 'N14.02' ? '#4DEBDE' :
d == 'N14.03' ? '#00A884' :
d == 'N15.01' ? '#809100' :
d == 'N15.02' ? '#12784F' :
d == 'N16.03' ? '#B8AF76' :
d == 'N16.04' ? '#877A2D' :
d == 'N17.02' ? '#9E5008' :
d == 'N17.03' ? '#CC7716' :
d == 'N17.04' ? '#E69D55' :
d == 'N17.05' ? '#734d00' :
d == 'N17.06' ? '#a87000' :
d == 'L01.01' ? '#97DBF2' :
d == 'L01.02' ? '#00734C' :
d == 'L01.03' ? '#267300' :
d == 'L01.05' ? '#A8A800' :
d == 'L01.06' ? '#FFD280' :
d == 'L01.07' ? '#DC78B1' :
d == 'L01.08' ? '#737300' :
d == 'L01.09' ? '#00E6A9' :
d == 'L01.16' ? '#4CE600' :
d == 'L02.02' ? '#894444' :
d == 'L03.01' ? '#894465' :
	  '#E5E4E2';
}
    
function getColor3(d) {
return  d == 'bouwland' ? '#ffed00' :
d == 'grasland' ? '#58ab27' :
d == 'grasland/bouwland' ? '#a4c400' :
d == 'landschapselement' ? '#a97242' :
d == 'landschapselement (sloot)' ? '#0081c6' :
	  '#E5E4E2';
}
      
function highlightFeature2(e) {
var layer = e.target;
layer.setStyle({
weight: 1,
color: '#000000',
fillOpacity: 1
});
if (!L.Browser.ie && !L.Browser.opera) {
layer.bringToFront();
info2.update(layer.feature.properties);
}
}

function resetHighlight2(e) {
SNL_BESCHIKKINGEN_2023_1.resetStyle(e.target);
info2.update();
}

function onEachFeature2(feature, layer) {
layer.on({
mouseover: highlightFeature2,
mouseout: resetHighlight2
});
}
                
function highlightFeature3(e) {
var layer = e.target;
layer.setStyle({
weight: 1,
color: '#000000',
fillOpacity: 1
});
if (!L.Browser.ie && !L.Browser.opera) {
layer.bringToFront();
info3.update(layer.feature.properties);
}
}

function resetHighlight3(e) {
ANLB_BESCHIKKINGEN_1.resetStyle(e.target);
info3.update();
}

function onEachFeature3(feature, layer) {
layer.on({
mouseover: highlightFeature3,
mouseout: resetHighlight3
});
}

var SNL_BEOORDELINGEN_1 = L.geoJson(null,
{
style: getStyle1,
onEachFeature: onEachFeature1
}
).addTo(map);

var url1 = 'https://geodata.zuid-holland.nl/geoserver/landelijk_gebied/ows?';
var params1 = 'service=WFS&version=2.0.0&request=GetFeature&outputFormat=application/json&srsName=EPSG:4326&';
params1 += 'typeName=landelijk_gebied:SNL_BEOORDELINGEN';

var xhr1 = new XMLHttpRequest();
xhr1.open('GET', encodeURI(url1 + params1));
xhr1.onload = function() {
	if (xhr1.status === 200) {
		SNL_BEOORDELINGEN_1.addData(JSON.parse(xhr1.responseText));
	} else {
		alert('Request failed.  Returned status of ' + xhr1.status);
	}
};
xhr1.send();

function getStyle1(feature) {
	return {
			color: '#000000',
			fillColor: getColor1(feature.properties.FF_kwaliteit),
			weight: 0,
			fillOpacity: 0.7
		}
}

var SNL_BESCHIKKINGEN_2023_1 = L.geoJson(null,
{
style: getStyle2,
onEachFeature: onEachFeature2
}
);
    
var url2 = 'https://geodata.zuid-holland.nl/geoserver/landelijk_gebied/ows?';
var params2 = 'service=WFS&version=2.0.0&request=GetFeature&outputFormat=application/json&srsName=EPSG:4326&';
params2 += 'typeName=landelijk_gebied:SNL_BESCHIKKINGEN_2023';
        
var xhr2 = new XMLHttpRequest();
xhr2.open('GET', encodeURI(url2 + params2));
xhr2.onload = function() {
	if (xhr2.status === 200) {
		SNL_BESCHIKKINGEN_2023_1.addData(JSON.parse(xhr2.responseText));
	} else {
		alert('Request failed.  Returned status of ' + xhr2.status);
	}
};
xhr2.send();
    
function getStyle2(feature) {
return {
		color: '#000000',
		fillColor: getColor2(feature.properties.beheerType),
		weight: 0,
		fillOpacity: 0.7
	}
}
     
 var ANLB_BESCHIKKINGEN_1 = L.geoJson(null,
{
style: getStyle3,
onEachFeature: onEachFeature3
}
);
  
var url3 = 'https://geodata.zuid-holland.nl/geoserver/landelijk_gebied/ows?';
var params3 = 'service=WFS&version=2.0.0&request=GetFeature&outputFormat=application/json&srsName=EPSG:4326&';
params3 += 'typeName=landelijk_gebied:ANLB_BESCHIKKINGEN_2023';

var xhr3 = new XMLHttpRequest();
xhr3.open('GET', encodeURI(url3 + params3));
xhr3.onload = function() {
	if (xhr3.status === 200) {
		ANLB_BESCHIKKINGEN_1.addData(JSON.parse(xhr3.responseText));
	} else {
		alert('Request failed.  Returned status of ' + xhr3.status);
	}
};
xhr3.send();
    
function getStyle3(feature) {
return {
		color: 'white',
		fillColor: getColor3(feature.properties.Grondgebruik),
		weight: 0,
		fillOpacity: 0.7
	}
}
     	
 var PROVINCIEGRENS_MASKER_1 = L.geoJson(null,
{
style: getStyle0
}
).addTo(map);
    
var url4 = 'https://geodata.zuid-holland.nl/geoserver/topografie/ows?';
var params4 = 'service=WFS&version=2.0.0&request=GetFeature&outputFormat=application/json&srsName=EPSG:4326&';
params4 += 'typeName=topografie:PROVINCIEGRENS_MASKER';
    
var xhr4 = new XMLHttpRequest();
xhr4.open('GET', encodeURI(url4 + params4));
xhr4.onload = function() {
	if (xhr4.status === 200) {
		PROVINCIEGRENS_MASKER_1.addData(JSON.parse(xhr4.responseText));
	} else {
		alert('Request failed.  Returned status of ' + xhr4.status);
	}
};
xhr4.send();
	
function getStyle0(feature) {
return {
		color: '#000000',
		fillColor: '#d9d9d9',
		weight: 0,
		fillOpacity: 0.7
	}
}
            
var legenda = L.control({position: 'bottomleft'});
legenda.onAdd = function (map) 
{
var div = L.DomUtil.create('div', 'info legend'),
grades = ['Hoog','Midden','Laag','Niet beoordeeld'],
labels = [];
div.innerHTML = '<img width="211" src="logo/PZH-logo-Liggend-RGB-1.0.png"><br><h3>Subsidiestelsel Natuur </br> en Landschap beoordelingen </h3><h3><a href="https://opendata.zuid-holland.nl/geonetwork/srv/dut/catalog.search#/metadata/5f338a6d-625c-4dd2-9014-9bb4166cb268" target="_blank">Link naar metadata</a></h3><h4>Legenda</h4>'
for (var i = 0; i < grades.length; i++) {
div.innerHTML +=
'<i style="background:' + getColor1(grades[i]) + '"></i> ' +
grades[i] + '<br>';
}L.DomEvent.on(div, 'wheel', L.DomEvent.stopPropagation);
return div;
};
legenda.addTo(map);
      
var legenda2 = L.control({position: 'bottomleft'});
legenda2.onAdd = function (map) 
{
var div = L.DomUtil.create('div', 'info legend'),
grades =  ['N01.01','N01.02','N01.03','N02.01','N03.01','N04.01','N04.02','N04.03','N04.04','N05.01','N05.02','N05.03','N05.04','N06.01','N06.02','N08.01','N08.02','N08.03','N08.04','N09.01','N10.01','N10.02','N11.01','N12.01','N12.02','N12.03','N12.04','N12.05','N12.06','N13.01','N13.02','N14.01','N14.02','N14.03','N15.01','N15.02','N16.03','N16.04','N17.02','N17.03','N17.04','N17.05','N17.06'],
labels = ['N01.01 Zee en wad','N01.02 Duin- en kwelderlandschap','N01.03 Rivier- en moeraslandschap','N02.01 Rivier','N03.01 Beek en bron','N04.01 Kranswierwater','N04.02 Zoete plas','N04.03 Brak water','N04.04 Afgesloten zeearm','N05.01 Moeras (vervallen)','N05.02 Gemaaid rietland','N05.03 Veenmoeras','N05.04 Dynamisch Moeras','N06.01 Veenmosrietland en moerasheide','N06.02 Trilveen','N08.01 Strand en embryonaal duin','N08.02 Open duin','N08.03 Vochtige duinvallei','N08.04 Duinheide','N09.01 Schor of kwelder','N10.01 Nat schraalland','N10.02 Vochtig hooiland','N11.01 Droog schraalgrasland','N12.01 Bloemdijk','N12.02 Kruiden- en faunarijk grasland','N12.03 Glanshaverhooiland','N12.04 Zilt- en overstromingsgrasland','N12.05 Kruiden- en faunarijke akker','N12.06 Ruigteveld','N13.01 Vochtig weidevogelgrasland','N13.02 Wintergastenweide','N14.01 Rivier- en beekbegeleidend bos','N14.02 Hoog- en laagveenbos','N14.03 Haagbeuken- en essenbos','N15.01 Duinbos','N15.02 Dennen-, eiken-, en beukenbos','N16.03 Droog bos met productie','N16.04 Vochtig bos met productie','N17.02 Drooghakhout','N17.03 Park- en stinzenbos','N17.04 Eendenkooi','N17.05 Wilgengriend','N17.06 Vochtig en hellinghakhout'];
grades2 =  ['L01.01','L01.02','L01.03','L01.05','L01.06','L01.07','L01.08','L01.09','L01.16','L02.02','L03.01'],
labels2 = ['L01.01 Poel en klein historisch water','L01.02 Houtwal en houtsingel','L01.03 Elzensingel','L01.05 Knip- of scheerheg','L01.06 Struweelhaag','L01.07 Laan','L01.08 Knotboom','L01.09 Hoogstamboomgaard','L01.16 Bossingel','L02.02 Historisch bouwwerk en erf','L03.01 Aardwerk en groeve'];
div.innerHTML = '<img width="211" src="logo/PZH-logo-Liggend-RGB-1.0.png"><br><h3>Subsidiestelsel Natuur </br> en Landschap beschikkingen 2023 </h3><h3><a href="https://opendata.zuid-holland.nl/geonetwork/srv/dut/catalog.search#/metadata/f3ae64c5-7f01-496b-ab9a-cddfae02d62e" target="_blank">Link naar metadata</a></h3><h4>Legenda</h4><h5>Natuurtypen</h5>'
for (var i = 0; i < grades.length; i++) {
div.innerHTML +=
'<i style="background:' + getColor2(grades[i]) + '"></i> ' +
labels[i] + '<br>';
}
div.innerHTML += '<br><h5>Landschapselementtypen</h5>'
for (var i = 0; i < grades2.length; i++) {
div.innerHTML +=
'<i style="background:' + getColor2(grades[i]) + '"></i> ' +
labels2[i] + '<br>';
}L.DomEvent.on(div, 'wheel', L.DomEvent.stopPropagation);
return div;
};
          
var legenda3 = L.control({position: 'bottomleft'});
legenda3.onAdd = function (map) 
{
var div = L.DomUtil.create('div', 'info legend'),
grades = ['bouwland','grasland','grasland/bouwland','landschapselement','landschapselement (sloot)'],
labels = [];
div.innerHTML = '<img width="211" src="logo/PZH-logo-Liggend-RGB-1.0.png"><br><h3>Agrarisch Natuur </br> en Landschapsbeheer beschikkingen 2023 </h3><h3><a href="https://opendata.zuid-holland.nl/geonetwork/srv/dut/catalog.search#/metadata/57493af4-4e90-495e-bb20-a0b7c8877a69" target="_blank">Link naar metadata</a></h3><h4>Legenda</h4>'
for (var i = 0; i < grades.length; i++) {
div.innerHTML +=
'<i style="background:' + getColor3(grades[i]) + '"></i> ' +
grades[i] + '<br>';
}L.DomEvent.on(div, 'wheel', L.DomEvent.stopPropagation);
return div;
};

map.on('overlayremove', function (eventLayer) {
    if (eventLayer.name === 'Subsidiestelsel Natuur en Landschap beschikkingen 2023') {
        map.removeControl(legenda2),map.removeControl(info2);
    } 
});
    
map.on('overlayremove', function (eventLayer) {
    if (eventLayer.name === 'Agrarisch Natuur- en Landschapsbeheer beschikkingen 2023') {
        map.removeControl(legenda3),map.removeControl(info3);
    } 
});
    
map.on('overlayremove', function (eventLayer) {
    if (eventLayer.name === 'Subsidiestelsel Natuur en Landschap beoordelingen') {
        map.removeControl(legenda),map.removeControl(info1);
    } 
});
    
map.on('overlayadd', function (eventLayer) {
    if (eventLayer.name === 'Subsidiestelsel Natuur en Landschap beschikkingen 2023') {
        legenda2.addTo(map),info2.addTo(map);
    } 
});
    
map.on('overlayadd', function (eventLayer) {
    if (eventLayer.name === 'Agrarisch Natuur- en Landschapsbeheer beschikkingen 2023') {
        legenda3.addTo(map),info3.addTo(map);
    } 
});
    
map.on('overlayadd', function (eventLayer) {
    if (eventLayer.name === 'Subsidiestelsel Natuur en Landschap beoordelingen') {
        legenda.addTo(map),info1.addTo(map);
    } 
});
               
L.control.scale({
	position: 'bottomright'
}).addTo(map);
		
var groupedOverlays = {
        "Kaartlagen":{
            "Subsidiestelsel Natuur en Landschap beoordelingen":SNL_BEOORDELINGEN_1,
            "Subsidiestelsel Natuur en Landschap beschikkingen 2023":SNL_BESCHIKKINGEN_2023_1,
            "Agrarisch Natuur- en Landschapsbeheer beschikkingen 2023":ANLB_BESCHIKKINGEN_1
        }

    };
   
var options = {
  exclusiveGroups: ["Kaartlagen"],
  groupCheckboxes: true
};

var baseMaps = {
    "BRT grijs": BRT_grijs,
    "Luchtfoto": Luchtfoto
};

var layerControl = L.control.groupedLayers(baseMaps, groupedOverlays, options);
map.addControl(layerControl);
     
const info1 = L.control();

info1.onAdd = function (map) {
	this._div = L.DomUtil.create('div', 'info');
	this.update();
	return this._div;
};
  
info1.update = function (props) {
	const contents = props ? 'Beoordelingsgebied: ' + props.beoordelingsgebied + '<br />Beheertype: ' + props.beheertype + '<br /><br />Startdatum: ' + props.startdatum.substring(0, 10) + '<br />Einddatum: ' + props.einddatum.substring(0, 10) + '<br /><br />Beoordeling kwaliteit: ' + props.FF_kwaliteit + '<br />Kwalificerende soorten: ' + props.FF_kwalificerende_soorten + '<br />Aantal verspreid: ' + props.FF_aantal_verspreid + '<br />Aantal soortgroepen: ' + props.FF_aantal_soortgroepen + '<br />Aantal rode lijst: ' + props.FF_aantal_rodelijst : 'Ga met de muis over een gebied';
	this._div.innerHTML = contents;
	
};
  
info1.addTo(map); 
       
const info2 = L.control();

info2.onAdd = function (map) {
	this._div = L.DomUtil.create('div', 'info');
	this.update();
	return this._div;
};

info2.update = function (props) {
	const contents = props ? '<br />Beheertype: ' + props.beheerType + '<br />Beheertype naam: ' + props.Beheertype_Naam + '<br /><br />Startdatum: ' + props.beginTijd.substring(0, 10) + '<br />Einddatum: ' + props.eindTijd.substring(0, 10) + '<br /><br />Contractnaam: ' + props.contractNaam + '<br />Datum beschikking: ' + props.datumBeschikking.substring(0, 10) : 'Ga met de muis over een gebied';
	this._div.innerHTML = contents;
	
};
    
const info3 = L.control();

info3.onAdd = function (map) {
	this._div = L.DomUtil.create('div', 'info');
	this.update();
	return this._div;
};

info3.update = function (props) {
	const contents = props ? '<br />Type leefgebied: ' + props.TYPECODE_LEEFGEBIED + '<br />Beheerpakket: ' + props.CODE_BEHEERPAKKET + '<br />Beheerpakket naam: ' + props.Pakketnaam + '<br />Beheerpakketvariant naam: ' + props.Pakketvariant_naam + '<br /><br />Zaaknummer: ' + props.ZAAKNR_GEBIEDSAANVRAAG + '<br /><br />Beheeractiviteiten: ' + props.onderliggende_beheeractiviteite + '<br /><br />Grondgebruik: ' + props.Grondgebruik : 'Ga met de muis over een gebied';
	this._div.innerHTML = contents;
	
};

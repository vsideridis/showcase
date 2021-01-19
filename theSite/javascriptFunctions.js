//Functions For Displaying Plots
/*
var SLCshortSlider = document.getElementById("SLCshortRange");
var SLCshortOutput = document.getElementById("SLCshortDisSelectionValue");
SLCshortOutput.innerHTML = "Select Short Threshold: " + SLCshortSlider.value + "%";

var SLClongSlider = document.getElementById("SLClongRange");
var SLClongOutput = document.getElementById("SLClongDisSelectionValue");
SLClongOutput.innerHTML = "Select Long Threshold: " + SLClongSlider.value + "%";

SLCshortSlider.oninput = function() {
  SLCshortOutput.innerHTML = "Select Short Threshold: " + this.value + "%";
  changePlotMultipleSelectionSLC();
}

SLClongSlider.oninput = function() {
  SLClongOutput.innerHTML = "Select Long Threshold: " + this.value + "%";
  changePlotMultipleSelectionSLC();
}


function changePlotMultipleSelectionSLC() {
  var tmpmouse = document.getElementById("SLCmouseSelection");
	var mouse = tmpmouse.options[tmpmouse.selectedIndex].value;
	
  var tmpdataset = document.getElementById("SLCdatasetSelection");
	var dataset = tmpdataset.options[tmpdataset.selectedIndex].value;
  
  var tmplayer = document.getElementById("SLClayerSelection");
	var layer = tmplayer.options[tmplayer.selectedIndex].value;
	
  var tmparea = document.getElementById("SLCareaSelection");
	var area = tmparea.options[tmparea.selectedIndex].value;
	
  var tmpdt = document.getElementById("SLCdtSelection");
	var dt = tmpdt.options[tmpdt.selectedIndex].value;
	
	var tmpshrtDis = document.getElementById("SLCshortDisSelection");
	var shortDis = tmpshrtDis.options[tmpshrtDis.selectedIndex].value;
	
	var tmplngDis = document.getElementById("SLClongDisSelection");
	var longDis = tmplngDis.options[tmplngDis.selectedIndex].value;
	
	var shortThres = document.getElementById("SLCshortRange").value;
	var longThres = document.getElementById("SLClongRange").value;
	
  document.getElementById("SLCMulti").src = "https://sideridis.netlify.app/Results/shortLongCommunicators/" + mouse + layer + area + dataset + dt + shortDis + longDis + "_shThres-" + shortThres + "_lonThres-" + longThres + "_xyPlane.png";
}

*/

function changePlotOrientDiversity() {
  var selection1 = "orientDiversityPlot1";
  var selection2 = "orientDiversityPlot2"; 
  var imgTarget1 = "orientDiversComparison1";
  var imgTarget2 = "orientDiversComparison2";
	var selec1 = document.getElementById(selection1);
	var selec2 = document.getElementById(selection2);
  var imgPath1 = selec1.options[selec1.selectedIndex].value;
  var imgPath2 = selec2.options[selec2.selectedIndex].value;
  document.getElementById(imgTarget1).src = imgPath1;
  document.getElementById(imgTarget2).src = imgPath2;
}

function changeXYPlaneHubNeuronsPlots() {
  var selection1 = "xyPlaneHubNeuronsPlot1";
  var selection2 = "xyPlaneHubNeuronsPlot2"; 
  var imgTarget1 = "xyPlaneHubNeuronsComparison1";
  var imgTarget2 = "xyPlaneHubNeuronsComparison2";
	var selec1 = document.getElementById(selection1);
	var selec2 = document.getElementById(selection2);
  var imgPath1 = selec1.options[selec1.selectedIndex].value;
  var imgPath2 = selec2.options[selec2.selectedIndex].value;
  document.getElementById(imgTarget1).src = imgPath1;
  document.getElementById(imgTarget2).src = imgPath2;
}


function changePlot() {
  var selection1 = "STTCPlot1";
  var selection2 = "STTCPlot2";
  var imgTarget1 = "STTCComparison1";
  var imgTarget2 = "STTCComparison2";
	var selec1 = document.getElementById(selection1);
	var selec2 = document.getElementById(selection2);
  var imgPath1 = selec1.options[selec1.selectedIndex].value;
  var imgPath2 = selec2.options[selec2.selectedIndex].value;
  document.getElementById(imgTarget1).src = imgPath1;
  document.getElementById(imgTarget2).src = imgPath2;
}


function changePlotMultipleSelectionBoxes() {
  var selectMouse = "mouseSelection";
  var tmpmouse = document.getElementById(selectMouse);
	var mouse = tmpmouse.options[tmpmouse.selectedIndex].value;
	var selectMouse2 = "mouseSelection2";
  var tmpmouse2 = document.getElementById(selectMouse2);
	var mouse2 = tmpmouse2.options[tmpmouse2.selectedIndex].value;
	
	
  var selectDataset = "datasetSelection"; 
  var tmpdataset = document.getElementById(selectDataset);
	var dataset = tmpdataset.options[tmpdataset.selectedIndex].value;
	var selectDataset2 = "datasetSelection2"; 
  var tmpdataset2 = document.getElementById(selectDataset2);
	var dataset2 = tmpdataset2.options[tmpdataset2.selectedIndex].value;
  
  
  var selectLayer = "layerSelection";
  var tmplayer = document.getElementById(selectLayer);
	var layer = tmplayer.options[tmplayer.selectedIndex].value;
	var selectLayer2 = "layerSelection2";
  var tmplayer2 = document.getElementById(selectLayer2);
	var layer2 = tmplayer2.options[tmplayer2.selectedIndex].value;
	
	
  var selectArea = "areaSelection"; 
  var tmparea = document.getElementById(selectArea);
	var area = tmparea.options[tmparea.selectedIndex].value;
	var selectArea2 = "areaSelection2"; 
  var tmparea2 = document.getElementById(selectArea2);
	var area2 = tmparea2.options[tmparea2.selectedIndex].value;
	
	
  var selectDt = "dtSelection";
  var tmpdt = document.getElementById(selectDt);
	var dt = tmpdt.options[tmpdt.selectedIndex].value;
	var selectDt2 = "dtSelection2";
  var tmpdt2 = document.getElementById(selectDt2);
	var dt2 = tmpdt2.options[tmpdt2.selectedIndex].value;
	
	
	var selectFR = "FRSelection"; 
  var tmpFR = document.getElementById(selectFR);
	var FR = tmpFR.options[tmpFR.selectedIndex].value;
	var selectFR2 = "FRSelection2"; 
  var tmpFR2 = document.getElementById(selectFR2);
	var FR2 = tmpFR2.options[tmpFR2.selectedIndex].value;
	
	
	var selectDis = "DisSelection"; 
  var tmpDis = document.getElementById(selectDis);
	var Dis = tmpDis.options[tmpDis.selectedIndex].value;
	var selectDis2 = "DisSelection2"; 
  var tmpDis2 = document.getElementById(selectDis2);
	var Dis2 = tmpDis2.options[tmpDis2.selectedIndex].value;
	
	
	var selectZscore = "zscoreSelection"; 
  var tmpzscore = document.getElementById(selectZscore);
	var zscore = tmpzscore.options[tmpzscore.selectedIndex].value;
	var selectZscore2 = "zscoreSelection2"; 
  var tmpzscore2 = document.getElementById(selectZscore2);
	var zscore2 = tmpzscore2.options[tmpzscore2.selectedIndex].value;
	
	
	var selecttype = "typeSelection"; 
  var tmptype = document.getElementById(selecttype);
	var type = tmptype.options[tmptype.selectedIndex].value;
	var selecttype2 = "typeSelection2"; 
  var tmptype2 = document.getElementById(selecttype2);
	var type2 = tmptype2.options[tmptype2.selectedIndex].value;
	
  var imgTarget1 = "STTCComparison1Multi";
  var imgTarget2 = "STTCComparison2Multi";
  
  
  document.getElementById(imgTarget1).src = "https://sideridis.netlify.app/Results/HistogramOfSTTC/HistSTTC" + mouse + layer + area + dataset + dt + FR + Dis + zscore + type;
  
  document.getElementById(imgTarget2).src = "https://sideridis.netlify.app/Results/HistogramOfSTTC/HistSTTC" + mouse2 + layer2 + area2 + dataset2 + dt2 + FR2 + Dis2 + zscore2 + type2;
}


function changePlotMultipleSelectionBoxesClustCoef() {
  var selectMouse = "mouseSelectionClustCoef";
  var tmpmouse = document.getElementById(selectMouse);
	var mouse = tmpmouse.options[tmpmouse.selectedIndex].value;
	var selectMouse2 = "mouseSelectionClustCoef2";
  var tmpmouse2 = document.getElementById(selectMouse2);
	var mouse2 = tmpmouse2.options[tmpmouse2.selectedIndex].value;
	
  var selectDataset = "datasetSelectionClustCoef"; 
  var tmpdataset = document.getElementById(selectDataset);
	var dataset = tmpdataset.options[tmpdataset.selectedIndex].value;
	var selectDataset2 = "datasetSelectionClustCoef2"; 
  var tmpdataset2 = document.getElementById(selectDataset2);
	var dataset2 = tmpdataset2.options[tmpdataset2.selectedIndex].value;
	
  var selectArea = "areaSelectionClustCoef"; 
  var tmparea = document.getElementById(selectArea);
	var area = tmparea.options[tmparea.selectedIndex].value;
	var selectArea2 = "areaSelectionClustCoef2"; 
  var tmparea2 = document.getElementById(selectArea2);
	var area2 = tmparea2.options[tmparea2.selectedIndex].value;
	
  var selectDt = "dtSelectionClustCoef";
  var tmpdt = document.getElementById(selectDt);
	var dt = tmpdt.options[tmpdt.selectedIndex].value;
	var selectDt2 = "dtSelectionClustCoef2";
  var tmpdt2 = document.getElementById(selectDt2);
	var dt2 = tmpdt2.options[tmpdt2.selectedIndex].value;
	
  var imgTarget1 = "ClusterCoefPlot1";
  var imgTarget2 = "ClusterCoefPlot2";

  document.getElementById(imgTarget1).src = "https://sideridis.netlify.app/Results/clusteringCoef/" + mouse  + area + dataset + dt;
  document.getElementById(imgTarget2).src = "https://sideridis.netlify.app/Results/clusteringCoef/" + mouse2 + area2 + dataset2 + dt2;
}




function changePlotMultipleSelectionOrientationDiversity() {
  var selectMouse = "OrDivmouseSelection";
  var tmpmouse = document.getElementById(selectMouse);
	var mouse = tmpmouse.options[tmpmouse.selectedIndex].value;
	var selectMouse2 = "OrDivmouseSelection2";
  var tmpmouse2 = document.getElementById(selectMouse2);
	var mouse2 = tmpmouse2.options[tmpmouse2.selectedIndex].value;
	
  var selectDataset = "OrDivdatasetSelection"; 
  var tmpdataset = document.getElementById(selectDataset);
	var dataset = tmpdataset.options[tmpdataset.selectedIndex].value;
	var selectDataset2 = "OrDivdatasetSelection2"; 
  var tmpdataset2 = document.getElementById(selectDataset2);
	var dataset2 = tmpdataset2.options[tmpdataset2.selectedIndex].value;
  
  var selectLayer = "OrDivlayerSelection";
  var tmplayer = document.getElementById(selectLayer);
	var layer = tmplayer.options[tmplayer.selectedIndex].value;
	var selectLayer2 = "OrDivlayerSelection2";
  var tmplayer2 = document.getElementById(selectLayer2);
	var layer2 = tmplayer2.options[tmplayer2.selectedIndex].value;
	
  var selectArea = "OrDivareaSelection"; 
  var tmparea = document.getElementById(selectArea);
	var area = tmparea.options[tmparea.selectedIndex].value;
	var selectArea2 = "OrDivareaSelection2"; 
  var tmparea2 = document.getElementById(selectArea2);
	var area2 = tmparea2.options[tmparea2.selectedIndex].value;
	
  var selectDt = "OrDivdtSelection";
  var tmpdt = document.getElementById(selectDt);
	var dt = tmpdt.options[tmpdt.selectedIndex].value;
	var selectDt2 = "OrDivdtSelection2";
  var tmpdt2 = document.getElementById(selectDt2);
	var dt2 = tmpdt2.options[tmpdt2.selectedIndex].value;
	
  var imgTarget1 = "OrDivComparison1Multi";
  var imgTarget2 = "OrDivComparison2Multi";
  
  document.getElementById(imgTarget1).src = "https://sideridis.netlify.app/Results/diversityInOrientationPreference/angleDifWithRef_" + mouse + layer + area + dataset + dt;
  
  document.getElementById(imgTarget2).src = "https://sideridis.netlify.app/Results/diversityInOrientationPreference/angleDifWithRef_" + mouse2 + layer2 + area2 + dataset2 + dt2;
}

function changePlotCoreNetworks() {
  var selection1 = 'coreNetworksPlot1';
  var selection2 = 'coreNetworksPlot2'; 
  var imgTarget1 = 'coreNetworkComparison1';
  var imgTarget2 = 'coreNetworkComparison2';
	var selec1 = document.getElementById(selection1);
	var selec2 = document.getElementById(selection2);
  var imgPath1 = selec1.options[selec1.selectedIndex].value;
  var imgPath2 = selec2.options[selec2.selectedIndex].value;
  document.getElementById(imgTarget1).src = imgPath1;
  document.getElementById(imgTarget2).src = imgPath2;
}


function changePlotCoreNetworksLengthBias() {
  var selection1 = 'coreNetworksLengthBiasPlot1';
  var selection2 = 'coreNetworksLengthBiasPlot2'; 
  var imgTarget1 = 'coreNetworkLengthBiasComparison1';
  var imgTarget2 = 'coreNetworkLengthBiasComparison2';
	var selec1 = document.getElementById(selection1);
	var selec2 = document.getElementById(selection2);
  var imgPath1 = selec1.options[selec1.selectedIndex].value;
  var imgPath2 = selec2.options[selec2.selectedIndex].value;
  document.getElementById(imgTarget1).src = imgPath1;
  document.getElementById(imgTarget2).src = imgPath2;
}


function localityHashingHubNeurons() {
  var selection1 = "localityHashingPlot1";
  var selection2 = "localityHashingPlot2"; 
  var imgTarget1 = "localityHashingComparison1";
  var imgTarget2 = "localityHashingComparison2";
	var selec1 = document.getElementById(selection1);
	var selec2 = document.getElementById(selection2);
  var imgPath1 = selec1.options[selec1.selectedIndex].value;
  var imgPath2 = selec2.options[selec2.selectedIndex].value;
  document.getElementById(imgTarget1).src = imgPath1;
  document.getElementById(imgTarget2).src = imgPath2;
}


function changePlotShortLongCommunicators() {
  var selection1 = "SLCPlot1";
  var selection2 = "SLCPlot2";
  var imgTarget1 = "SLCComparison1";
  var imgTarget2 = "SLCComparison2";
	var selec1 = document.getElementById(selection1);
	var selec2 = document.getElementById(selection2);
  var imgPath1 = selec1.options[selec1.selectedIndex].value;
  var imgPath2 = selec2.options[selec2.selectedIndex].value;
  document.getElementById(imgTarget1).src = imgPath1;
  document.getElementById(imgTarget2).src = imgPath2;
}


function changePlotSpatialLocality() {
  var selection1 = 'spatialLocalityPlot1';
  var selection2 = 'spatialLocalityPlot2'; 
  var imgTarget1 = 'spatialLocalityComparison1';
  var imgTarget2 = 'spatialLocalityComparison2';
	var selec1 = document.getElementById(selection1);
	var selec2 = document.getElementById(selection2);
  var imgPath1 = selec1.options[selec1.selectedIndex].value;
  var imgPath2 = selec2.options[selec2.selectedIndex].value;
  document.getElementById(imgTarget1).src = imgPath1;
  document.getElementById(imgTarget2).src = imgPath2;
}



function changePlotkSize() {
  var imgTarget1 = "kSizeComparison1";
  var imgTarget2 = "kSizeComparison2";
	var selec1 = document.getElementById("kSizePlot1");
	var selec2 = document.getElementById("kSizePlot2");
  var imgPath1 = selec1.options[selec1.selectedIndex].value;
  var imgPath2 = selec2.options[selec2.selectedIndex].value;
  document.getElementById(imgTarget1).src = imgPath1;
  document.getElementById(imgTarget2).src = imgPath2;
}


function changePlotHubNeurons() {
  var selection1 = "hubNeuronsPlot1";
  var selection2 = "hubNeuronsPlot2"; 
  var imgTarget1 = "hubNeuronsComparison1";
  var imgTarget2 = "hubNeuronsComparison2";
	var selec1 = document.getElementById(selection1);
	var selec2 = document.getElementById(selection2);
  var imgPath1 = selec1.options[selec1.selectedIndex].value;
  var imgPath2 = selec2.options[selec2.selectedIndex].value;
  document.getElementById(imgTarget1).src = imgPath1;
  document.getElementById(imgTarget2).src = imgPath2;
}


function changePlothyperactiveFrames() {
  var selection1 = "hyperactiveFramesPlot1";
  var selection2 = "hyperactiveFramesPlot2"; 
  var imgTarget1 = "hyperactiveFramesComparison1";
  var imgTarget2 = "hyperactiveFramesComparison2";
	var selec1 = document.getElementById(selection1);
	var selec2 = document.getElementById(selection2);
  var imgPath1 = selec1.options[selec1.selectedIndex].value;
  var imgPath2 = selec2.options[selec2.selectedIndex].value;
  document.getElementById(imgTarget1).src = imgPath1;
  document.getElementById(imgTarget2).src = imgPath2;
}


function changePlothyperactiveFramesNeuronsMembership() {
  var selection1 = "neuronsMembershipPlot1";
  var selection2 = "neuronsMembershipPlot2"; 
  var imgTarget1 = "neuronsMembershipComparison1";
  var imgTarget2 = "neuronsMembershipComparison2";
	var selec1 = document.getElementById(selection1);
	var selec2 = document.getElementById(selection2);
  var imgPath1 = selec1.options[selec1.selectedIndex].value;
  var imgPath2 = selec2.options[selec2.selectedIndex].value;
  document.getElementById(imgTarget1).src = imgPath1;
  document.getElementById(imgTarget2).src = imgPath2;
}


function changePlotPredictivePower() {
  var selection1 = "predictivePowerPlot1";
  var selection2 = "predictivePowerPlot2"; 
  var imgTarget1 = "predictivePowerComparison1";
  var imgTarget2 = "predictivePowerComparison2";
	var selec1 = document.getElementById(selection1);
	var selec2 = document.getElementById(selection2);
  var imgPath1 = selec1.options[selec1.selectedIndex].value;
  var imgPath2 = selec2.options[selec2.selectedIndex].value;
  document.getElementById(imgTarget1).src = imgPath1;
  document.getElementById(imgTarget2).src = imgPath2;
}


function changePlotPredictivePower_secondPlot() {
  var selection1 = "predictivePowerPlot1_secondPlot";
  var selection2 = "predictivePowerPlot2_secondPlot"; 
  var imgTarget1 = "predictivePowerComparison1_secondPlot";
  var imgTarget2 = "predictivePowerComparison2_secondPlot";
	var selec1 = document.getElementById(selection1);
	var selec2 = document.getElementById(selection2);
  var imgPath1 = selec1.options[selec1.selectedIndex].value;
  var imgPath2 = selec2.options[selec2.selectedIndex].value;
  document.getElementById(imgTarget1).src = imgPath1;
  document.getElementById(imgTarget2).src = imgPath2;
}






//Functions For Downloading Data
function downloadCoreNetworks() {
  var selection = "coreNetworksDownloadsSelection";
	var selec = document.getElementById(selection);
  var dataPath = selec.options[selec.selectedIndex].value;
  window.location.href = dataPath;
}


function downloadSortLongCommunicators() {
  var selection = "shortLongComSelection";
	var selec = document.getElementById(selection);
  var dataPath = selec.options[selec.selectedIndex].value;
  window.location.href = dataPath;
}


function downloadOrientationDiversity() {
  var selection = "orientationDiversityDownloadsSelection";
	var selec = document.getElementById(selection);
  var dataPath = selec.options[selec.selectedIndex].value;
  window.location.href = dataPath;
}


function downloadLocalityHashingData() {
  var selection = "localityHashingDownloadsSelection";
	var selec = document.getElementById(selection);
  var dataPath = selec.options[selec.selectedIndex].value;
  window.location.href = dataPath;
}


function downloadSortLongCommunicators() {
  var selection = "shortLongComSelection";
	var selec = document.getElementById(selection);
  var dataPath = selec.options[selec.selectedIndex].value;
  window.location.href = dataPath;
}


function downloadSpatialLocalityMetrics() {
  var selection = "spatialLocMetricsDownloadsSelection";
	var selec = document.getElementById(selection);
  var dataPath = selec.options[selec.selectedIndex].value;
  window.location.href = dataPath;
}


function downloadHubNeurons() {
  var selection = "hubNeuronsDownloadsSelection";
	var selec = document.getElementById(selection);
  var dataPath = selec.options[selec.selectedIndex].value;
  window.location.href = dataPath;
}


function downloadclusteringCoefficient() {
  var selection = "clusteringCoefficientDownloadsSelection";
	var selec = document.getElementById(selection);
  var dataPath = selec.options[selec.selectedIndex].value;
  window.location.href = dataPath;
}




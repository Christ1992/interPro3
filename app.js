
var model;
var courseTemp='starter';

//var initialization;
$(document).ready(function(){
	//We instantiate our model
	model = new DinnerModel();

	model.setNumberOfGuests(7);


	//And create the needed controllers and views
	//var exampleView = new ExampleView($("#exampleView"), model);
	var sideNavView = new SideNavView($("#sideNavView"), model);
	var searchArea = new SearchArea($("#searchArea"), model);
	var topBar= new TopBar($("#topBar"),model);
	var dinnerOverview= new DinnerOverview($("#dinnerOverview"),model);
	

});

function initialization(){
	$("#hover-div").show();
	$("#SecondPage").hide();
	$("#SearchArea").hide();
	$("#detailView").hide();
	$("#topBar").hide();
	$("#dinnerOverview").hide();
	$("#DinnerPreparation").hide();}




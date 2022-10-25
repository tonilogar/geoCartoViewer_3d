let code="";  
let vel="";
let autoCorr="";
let stDev="";
let valuesDataPointDisplacenet=[];
let horizontalValuesGraph = [];
 
// Show metadata points //////////  
map.on('click', function (e) {
    //Array to catch metadata points salect
    let propertiesPointsCatch = [];
    propertiesPointsCatch = map.queryRenderedFeatures(e.point);
    
    if (propertiesPointsCatch.length === 0) //If mouse don touch any point
    {
        console.log("There isn't point");
        return false;
    }
    else{
        console.log("There's point ");
    

        //only work with first element [0]
        code = propertiesPointsCatch[0].properties.CODE;
        vel = propertiesPointsCatch[0].properties.VEL;
        autoCorr = propertiesPointsCatch[0].properties.AUTOCORR; 
        stDev = propertiesPointsCatch[0].properties.TS_STDEV;
        //Create array with keys first object
        let timeDisplacementKeys = Object.keys(propertiesPointsCatch[0].properties);
         
        //Create array with values first object
        let timeDisplacementValues = Object.values(propertiesPointsCatch[0].properties);
        
        //Delete the first 7 element
        //console.log(' timeDisplacementKeys ' + timeDisplacementKeys + ' numero elementos ' + timeDisplacementKeys.length)
        //console.log(' timeDisplacementValues ' + timeDisplacementValues  + ' numero elementos ' + timeDisplacementValues.length)
        timeDisplacementKeys.splice(0,7);
        timeDisplacementValues.splice(0,7);
        
        //Format data
        for (var i = 0; i <  timeDisplacementKeys.length; i++) {
            //console.log(' timeDisplacementKeys[i] ' + timeDisplacementKeys[i])
            var year = timeDisplacementKeys[i].slice(1,[5]);
            //console.log(' year ' + year)
            var month = timeDisplacementKeys[i].slice(5,[7]);
            var monthIn = parseInt(month)
            monthIn = monthIn - 1
            //console.log(' monthIn ' + monthIn)
            //console.log(' month ' + month)
            var day = timeDisplacementKeys[i].slice(7,[9]);
            //console.log(' day ' + day)
            //Create array with horizontal values
            valuesDataPointDisplacenet.push([new Date(year, monthIn, day), timeDisplacementValues[i]]);
           
        }
        const timeDisplacementValuesRound = []
        for (var i = 0; i <  timeDisplacementValues.length; i++) {

            timeDisplacementValuesRound.push(Math.round(timeDisplacementValues[i]))

        }
        
        timeDisplacementValuesRound.shift()
        timeDisplacementValuesRound.sort(function(a, b) {
            return a - b;
        });
        /* for (var i = 0; i <  valuesDataPointDisplacenet.length; i++) {
            console.log(' timeDisplacementValuesRound[i] ' + timeDisplacementValuesRound[i])

        } */
        const firstElement = timeDisplacementValuesRound.shift()
        const endElement = timeDisplacementValuesRound.pop()
        console.log(' firstElement ' + firstElement + ' endElement ' + endElement)
        let horizontalValuesGraphNegative = []
        let horizontalValuesGraphPositive = []
        if(firstElement > -20) {
            horizontalValuesGraphNegative = [-20, -15, -10, -5];
        }
        else {
            horizontalValuesGraphNegative = [firstElement, firstElement/2, firstElement/3, firstElement/4];
        }
        if(endElement < 20) {
            horizontalValuesGraphPositive = [0, 5, 10, 15, 20];
        }
        else {
            horizontalValuesGraphPositive = [0, endElement/4, endElement/3, endElement/2, endElement];
        }
       
        
        

        
        const joinNegativePositive = horizontalValuesGraphNegative.concat( horizontalValuesGraphPositive);
        for (var i = 0; i <  joinNegativePositive.length; i++) {

            horizontalValuesGraph.push(Math.round(joinNegativePositive[i]))

        }
        console.log(horizontalValuesGraph +' horizontalValuesGraph')

        /* for (var i = 0; i <  valuesDataPointDisplacenet.length; i++) {
            console.log(' valuesDataPointDisplacenet[i] ' + valuesDataPointDisplacenet[i])

        } */
        
        // Call googleCghart ////////
            document.getElementById('chart__Div').style.display="block";      
            google.charts.setOnLoadCallback(drawChart);
        }
});
// Show metadata points ////////// 
// Close graphic window ////////// 
function closeX(){
    document.getElementById('chart__Div').style.display="none";
    }
    // Close graphic window ////////// 
    
    
    
    // Add google chart  //////////
    // Load the Visualization API and the corechart package.
    google.charts.load('current', {'packages':['corechart']});

    
    
    // Callback that creates and populates a data table,
    // instantiates the pie chart, passes in the data and
    // draws it.
    function drawChart() {       
        // Create the data table.
        let data = new google.visualization.DataTable();
        data.addColumn('date', 'Month');
        data.addColumn('number', 'Dis');   
        data.addRows(valuesDataPointDisplacenet);

        const espacio ="\xa0\xa0\xa0\xa0\xa0\xa0\xa0";
        const espacioData ="\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0";
        


        
        // Set chart options
        let options = {'title': "id: " + code +espacio+ "vel: " + vel +espacio+   "autoCorr: " + autoCorr +espacio+   "stDev: " + stDev,
        'width':600,
        'height':200,     
        lineWidth: 0, 
        pointSize: 4,
        pointShape: 'square',
        legend: 'none',
        vAxis: {
            title: 'Displacement [mm]',
                 ticks: horizontalValuesGraph
               },
        /* hAxis: {
            title: 'from 2016 to 2019',			   
            titleFontSize: 15 
        }   */
        };
    
        // Instantiate and draw our chart, passing in some options.
        let chart = new google.visualization.LineChart(document.getElementById('chart__Div__View'));
        chart.draw(data, options);
        //Create array empty
        valuesDataPointDisplacenet=[];
        horizontalValuesGraph = [];
    }
    // Add google chart  //////////
    
    $( function() {
        $( "#chart__Div" ).draggable();
      } );
    

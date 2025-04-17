"use strict";
/**
 * Dashboard Charts and Data Visualization
 * This file handles all chart initializations and data display for the dashboard
 */



/**
 * From here chart-3 needed to develop filling with dummy
 * 
 * 
 * Caution untouched
 * 
 * 
 * 
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * 
 
 * **/ 

// Chart 1: Average Cost Per Night Chart
var averageCostPerNightData = {
    series: [{
        name: "Total Client",
        data: [4, 10, 25, 12, 25, 18, 40, 22, 7]
    }],
    chart: {
        height: 65,
        type: "area",
        sparkline: {
            enabled: true
        },
        zoom: {
            enabled: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: 2,
        curve: "smooth"
    },
    fill: {
        type: "gradient",
        gradient: {
            shade: "dark",
            gradientToColors: ["#2e7ce4"],
            shadeIntensity: 1,
            type: "vertical",
            opacityFrom: 0.75,
            opacityTo: 0.1
        }
    },
    colors: ["#2e7ce4"],
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function() {
                    return "";
                }
            }
        },
        marker: {
            show: false
        }
    },
    // xaxis: {
    //     categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]
    // }
};

// Implement Average Cost Per Night to the page
var averageCostPerNightChart = new ApexCharts(
    document.querySelector("#average-cost-per-night-chart"),
    averageCostPerNightData
);
averageCostPerNightChart.render();





// Initialize Morris Charts when document is ready
$(function() {
    // Bar Chart for Sales Comparison
    if ($("#morris-bar-example").length) {
        Morris.Bar({
            element: "morris-bar-example",
            barColors: ["#2e7ce4", "#00c2b2"],
            data: [
                { y: "2010", a: 80, b: 100 },
                { y: "2011", a: 110, b: 130 },
                { y: "2012", a: 90, b: 110 },
                { y: "2013", a: 80, b: 100 },
                { y: "2014", a: 110, b: 130 },
                { y: "2015", a: 90, b: 110 },
                { y: "2016", a: 120, b: 140 },
                { y: "2017", a: 110, b: 125 },
                { y: "2018", a: 170, b: 190 },
                { y: "2019", a: 120, b: 140 }
            ],
            xkey: "y",
            ykeys: ["a", "b"],
            hideHover: "auto",
            gridLineColor: "#eef0f2",
            resize: true,
            barSizeRatio: 0.4,
            labels: ["Homeless", "Something Else"]
        });
    }

    // Donut Chart for Company Distribution
    if ($("#morris-donut-example").length) {
        Morris.Donut({
            element: "morris-donut-example",
            resize: true,
            colors: ["#2e7ce4", "#00c2b2", "#df3554"],
            data: [
                { label: "Bondi", value: 12 },
                { label: "Ashfield", value: 30 },
                { label: "Randwick", value: 20 }
            ]
        });
    }
});

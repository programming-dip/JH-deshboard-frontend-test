"use strict";
/**
 * Dashboard Charts and Data Visualization
 * This file handles all chart initializations and data display for the dashboard
 */

// Chart 1: Total Client Chart
var totalClientOptions = {
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
    xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]
    }
};

// Initialize Total Client Chart to the page
var totalClientChart = new ApexCharts(
    document.querySelector("#total-client"),
    totalClientOptions
);
totalClientChart.render();

// Chart 2: Total Revenue Chart
var totalRevenueOptions = {
    series: [{
        name: "Total Revenue",
        data: [35, 65, 47, 35, 44, 32, 27, 54, 44, 61]
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
        width: 1.5,
        curve: "smooth"
    },
    fill: {
        type: "gradient",
        gradient: {
            shade: "dark",
            gradientToColors: ["#627898"],
            shadeIntensity: 1,
            type: "vertical",
            opacityFrom: 0.75,
            opacityTo: 0.1
        }
    },
    colors: ["#627898"],
    plotOptions: {
        bar: {
            horizontal: false,
            borderRadius: 3,
            columnWidth: "48%"
        }
    },
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
    xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]
    }
};

// Initialize Total Revenue Chart to the page
var totalRevenueChart = new ApexCharts(
    document.querySelector("#total-revenue"),
    totalRevenueOptions
);

totalRevenueChart.render();

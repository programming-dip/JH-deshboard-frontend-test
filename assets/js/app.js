/**
 * Main Application Class
 * Handles core application functionality and initialization
 */

class App {
    /**
     * Initialize the application
     * */ 

    constructor() {
        // Get the html doc
        this.html = document.getElementsByTagName("html")[0];

        // Initialize configuration objects
        this.config = {};
        this.defaultConfig = window.config;
    }

    /**
     * Initialize UI components
     * Sets up Waves effect for buttons and other interactive elements
     */
    initComponents() {
        Waves.init();
    }

    /**
     * Initialize the sidebar navigation
     * Handles active states and scrolling to active menu items
     */
    initSidenav(){
        
    }

}
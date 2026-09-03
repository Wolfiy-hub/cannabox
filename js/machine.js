// Cannabox Machine Engine
// Integrates machine state, inventory tracking and detail views

(function() {
    // Forwarder & helper functions for machine interactions
    window.CannaboxMachine = {
        init: function() {
            if (typeof renderMachines === 'function') {
                renderMachines();
            }
            if (typeof initMachineDetail === 'function') {
                initMachineDetail();
            }
        }
    };
})();


class SsoController {

    constructor(SsoService, $mdSidenav, $mdBottomSheet, $scope, $router, $log, $mdToast, $mdDialog) {
        this.SsoService = SsoService;
        this.$mdSidenav = $mdSidenav;
        this.$mdBottomSheet = $mdBottomSheet;
        this.$router = $router;
        this.$log = $log;
        this.$mdToast = $mdToast;
        this.$mdDialog = $mdDialog;

    }

    /**
     * Show Toast
     */
    showSimpleToast1() {
        this.$mdToast.show(
            this.$mdToast.simple()
                .content('Service Call Succeeded!')
                .position('top right')
                .hideDelay(3000)
        );
    }

}

SsoController.$inject = ['SsoService', '$mdSidenav', '$mdBottomSheet', '$scope', '$router', '$log', '$mdToast', '$mdDialog'];

export default SsoController;
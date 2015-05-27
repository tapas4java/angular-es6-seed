
export class SsoController {

    constructor(SsoService, $mdSidenav, $mdBottomSheet, $router, $log, $mdToast, $mdDialog) {
        this.SsoService = SsoService;
        this.$mdSidenav = $mdSidenav;
        this.$mdBottomSheet = $mdBottomSheet;
        this.$router = $router;
        this.$log = $log;
        this.$mdToast = $mdToast;
        this.$mdDialog = $mdDialog;

    }

}

SsoController.$inject = ['SsoService', '$mdSidenav', '$mdBottomSheet', '$router', '$log', '$mdToast', '$mdDialog'];

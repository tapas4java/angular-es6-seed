
export class HomeController {

    constructor(HomeService, $mdSidenav, $mdBottomSheet, $scope, $router, $log, $mdToast, $mdDialog){
        this.HomeService = HomeService;
        this.$mdSidenav = $mdSidenav;
        this.$mdBottomSheet = $mdBottomSheet;
        this.$router = $router;
        this.$log = $log;
        this.$mdToast = $mdToast;
        this.$mdDialog = $mdDialog;

        this.selected     = null;
        this.tools        = [ ];
        this.theme 	      = 'default';
        this.themeList    = [
            'red',
            'purple',
            'deep-purple',
            'indigo',
            'blue',
            'light-blue',
            'cyan',
            'teal',
            'green',
            'light-green',
            'lime',
            'yellow',
            'amber',
            'orange',
            'deep-orange',
            'brown',
            'grey',
            'blue-grey'
        ];

        // Load all registered tools
        HomeService
            .getToolsList()
            .then(tools => {
                this.tools = [].concat(tools);
                this.selected = tools[0];
            });

        this.configureRouter();

        $scope.$watch('selectedTheme', function(value) {

            if (value !== undefined) {
                $scope.theme = value + '-theme';
                console.log('Changed theme', $scope.theme, value);
            }
        });

    }

    configureRouter(){

        this.$router.config([
            { path: '/', redirectTo: '/sso' },
            { path: '/sso', component: 'sso' },
            { path: '/services', component: 'services' },
            { path: '/properties', component: 'properties' },
            { path: '/logs', component: 'logs' },
            { path: '/settings', component: 'settings' },
            { path: '/health', component: 'health' }
        ]);
    }

    /**
     * Show Toast
     */
    showSimpleToast() {
        this.$mdToast.show(
            this.$mdToast.simple()
                .content('Service Call Succeeded!')
                .position('top right')
                .hideDelay(3000)
        );
    }

    /**
     * Show modal dialog.
     */
    showSimpleModal(event){
        this.$mdDialog.show(
            this.$mdDialog.alert()
                .title('DigiBank Dev Tool - designed and Developed by TITANS!')
                .content('Unified tool for performing common development activities like SSO Stuff, Services Check, Properties Files Updation, Log Check etc.')
                .ariaLabel('Alert Dialog Demo')
                .ok('Got IT!')
                .targetEvent(event)
        );
    }

    /**
     * First hide the bottomsheet IF visible, then
     * hide or Show the 'left' sideNav area
     */
    toggleToolsList() {
        var pending = this.$mdBottomSheet.hide() || this.$q.when(true);

        pending.then(function(){
            this.$mdSidenav('left').toggle();
        });
    }

    /**
     * Select the current avatars
     * @param menuId
     */
    selectTool( tool ) {
        this.selected = angular.isNumber(tool) ? this.tools[tool] : tool;
        //this.toggleToolsList();
    }

    /**
     * Show the bottom sheet
     */
    share($event) {
        var tool = this.selected;

         this.$mdBottomSheet.show({
             parent: angular.element(document.getElementById('content')),
             templateUrl: 'modules/console/console.html',
             controller: [ '$mdBottomSheet', UserSheetController],
             controllerAs: "vm",
             bindToController : true,
             targetEvent: $event
         }).then(function(clickedItem) {
             this.$log.debug( clickedItem.name + ' clicked!');
         });

        /**
         * Bottom Sheet controller for the Avatar Actions
         */
        function UserSheetController( $mdBottomSheet ) {
             this.tool = tool;
             this.items = [
             { name: 'Phone'       , icon: 'phone'       , icon_url: 'assets/svg/phone.svg'},
             { name: 'Twitter'     , icon: 'twitter'     , icon_url: 'assets/svg/twitter.svg'},
             { name: 'Google+'     , icon: 'google_plus' , icon_url: 'assets/svg/google_plus.svg'},
             { name: 'Hangout'     , icon: 'hangouts'    , icon_url: 'assets/svg/hangouts.svg'}
             ];
             this.performAction = function(action) {
                $mdBottomSheet.hide(action);
             };
         }
    }

}

HomeController.$inject = ['HomeService', '$mdSidenav', '$mdBottomSheet', '$scope', '$router', '$log', '$mdToast', '$mdDialog'];
